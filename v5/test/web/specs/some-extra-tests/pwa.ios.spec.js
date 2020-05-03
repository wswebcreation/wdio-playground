import {DEFAULT_TIMEOUT} from "../../../configs/e2eConstants";
import Context from "../../../app/helpers/Context";

describe('An iOS PWA', () => {
    beforeAll(()=>{
        storeIosPwa();
    });

    beforeEach(()=> openPwa());
    afterEach(()=> driver.background(-1));

    it('should be able to close the cookie bar', () => {
        // @TODO: THIS WILL ONLY WORK ON AN EMULATOR THAT IS CLEAN, NO PWA CACHE
        // @TODO: IT FAILS ON A REAL DEVICE, ALSO NEED TO CHECK THAT

        /**
         * Start interacting with the app
         */
        // Accept the cookie
        $('#cookiebanner').waitForDisplayed(DEFAULT_TIMEOUT);
        $('.cookies--btn.btn--green').click();
        $('#cookiebanner').waitForDisplayed(DEFAULT_TIMEOUT, true);
    });

    it('should be able to find articles about PWAs in the app', ()=>{
        // Open search
        $('#menu-button').click();

        // Wait for search and search for PWA and submit
        $('#js-search-input').waitForDisplayed(DEFAULT_TIMEOUT);
        $('#js-search-input').setValue('PWA\uE007');

        // Wait for the title and assert that it contains more than 1 article
        $('.article--post').waitForDisplayed(DEFAULT_TIMEOUT);

        expect($$('.article--post').length).toBeGreaterThan(0);
    });
});

/**
 * Store an iOS PWA to the device
 */
function storeIosPwa() {
    // Open Safari
    // Go to url
    // Wait for loaded
    browser.url('https://www.smashingmagazine.com');

    // Switch to native context
    browser.switchContext('NATIVE_APP');

    // Use ~Share
    $('~Share').click();

    // Wait for the ~ActivityListView
    $('~ActivityListView').waitForDisplayed(DEFAULT_TIMEOUT);

    // Right to left swipe for the ~Add to Home Screen
    openAddToHomeScreen();

    // A new screen will be shown
    // Wait for ~Add and press it
    // @TODO: We skipped the step to change the name of the app
    $('~Add').waitForDisplayed(DEFAULT_TIMEOUT);
    $('~Add').click();

    // Wait till the icon is visible because then we know sure that Safari is already in the background
    $('~Smashing').waitForDisplayed(15000);

    closeExistingSafariTab();
}

/**
 * Scroll till you find the `~Add to Home Screen` button, but only for max 4 times
 *
 * @param {number} amount The amount of scrolls
 */
function openAddToHomeScreen(amount = 0) {
    if (!$('~Add to Home Screen').isDisplayed() && amount < 4) {
        const listRectangles = driver.getElementRect($('~ActivityListView').elementId);

        // The design of the screen is that it contains 2 equal rows,
        // the options are in the second row so take the half of that meaning 0.75% of height
        const y = listRectangles.y + Math.round(listRectangles.height * 0.75);

        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: listRectangles.width * 0.8,
                    y: y,
                },
            },
            {
                action: 'wait',
                options: {ms: 1000},
            },
            {
                action: 'moveTo',
                options: {
                    x: listRectangles.width * 0.2,
                    y: y,
                },
            },
            {
                action: 'release',
            },
        ]);

        openAddToHomeScreen(amount + 1);
    }

    // If found click on it
    $('~Add to Home Screen').click();
}

/**
 * Open Safari and close the last tab and close Safari again
 */
function closeExistingSafariTab() {
    // To make this more stable we need to kill the safari tab because
    // otherwise it will be seen as an available Webview
    driver.execute('mobile: launchApp', {bundleId: 'com.apple.mobilesafari'});

    // Switch to the native context, but first store the current one so we can easily switch back
    const currentContext = driver.getContext();
    // Now switch
    driver.switchContext('NATIVE_APP');

    // Now close all tabs
    // Longpress the Tabs button
    $('~Tabs').waitForDisplayed(DEFAULT_TIMEOUT);
    $('~Tabs').touchAction(['longPress', 'release']);

    // Wait untill the pop-up is there
    $('~TabOptionsAlert').waitForDisplayed(DEFAULT_TIMEOUT);

    // Then close tab with ~Close This Tab to close a single tab OR
    $('~Close This Tab').click();

    // OR make it smart and get the Y and the width of the $('~TabOptionsAlert') container
    const TopTabOptionsAlert = driver.getElementRect($('~TabOptionsAlert').elementId);
    // and make custom touch based on coordinates
    driver.touchPerforms([
        {
            action: 'press',
            options: {
                // This will be the x position on the screen,
                // based on the middle of the of the `TabOptionsAlert`
                x: TopTabOptionsAlert.width /2,
                // This is the current top of the menu, but we don't want to press on the top,
                // but on the top button which might hold `Close All 200 Tabs`
                y: TopTabOptionsAlert.y + 10,
            },
        },
        {
            action: 'wait',
            options: {ms: 500},
        },
        {
            action: 'release',
        },
    ]);

    // Make sure the menu and the tab are gone, the `~Share` button will be disabled then
    driver.waitUntil(() => !$('~Share').isEnabled(), DEFAULT_TIMEOUT);

    // Set the context back to the currentContext
    driver.switchContext(currentContext);

    // Put Safari in the background
    driver.background(-1);
}

/**
 * This method will open the PWA and set it to the right context
 */
function openPwa() {
    browser.switchContext('NATIVE_APP');
    // Wait till the app icon is on the screen (this might take a while)
    // Click on it, in our case it is the ~Smashing
    $('~Smashing').waitForDisplayed(15000);
    // Store the current contexts so they can be filtered out later
    const currentContexts = Context.getCurrentContexts();
    $('~Smashing').click();

    // Then the app is started and maybe listen to the context untill the Webview is added
    // maybe use the context filter here to use all webviews with id and title/url
    // @TODO: This is tricky, I need to find a way to clear safari tabs
    // @TODO This becomes more important now
    let webviewID = 'unknown';
    let blankID;
    let tempWebviewId = 'unknown';

    driver.waitUntil(() => {
        // const contexts = Context.getCurrentContexts();
        // // Looks like after a second run their are more about blanks
        // // [
        // //     {id: 'NATIVE_APP'},
        // //     {id: 'WEBVIEW_42682.2', title: '', url: 'about:blank'},
        // //     {
        // //         id: 'WEBVIEW_42331.1',
        // //         title: 'Search — Smashing Magazine',
        // //         url: 'https://www.smashingmagazine.com/search/?q=PWA'
        // //     },
        // //     {id: 'WEBVIEW_42331.2', title: '', url: 'about:blank'}
        // //  ]
        //
        // console.log('contexts = ', contexts);
        // /**
        //  * TODO
        //  * Maybe check if this assumption works:
        //  * - looks like with this app the webview is always added at the end
        //  * - why check the first, why not do contexts.reverse() and do the checks from there
        //  * - also when the first element is an `url: 'about:blank`, do a new get contexts
        //  */
        // webviewID = contexts
        //     .filter(context => {
        //         console.log('filter context = ', context);
        //         return !context.id.includes('NATIVE_APP')
        //     })
        //     .find(context => {
        //         console.log('some context = ', context);
        //         return (
        //             context.title.includes('Smashing Magazine — For Web Designers And Developers') &&
        //             context.url.includes('https://www.smashingmagazine.com')
        //         );
        //     });
        // console.log('webviewID = ', webviewID)
        // return webviewID || false;

        // /**
        //  * TODO
        //  * Maybe check if this assumption works:
        //  * - looks like with this app the webview is always added at the end
        //  * - why check the first, why not do contexts.reverse() and do the checks from there
        //  * - also when the first element is an `url: 'about:blank`, do a new get contexts
        //  * - think about checking it twice
        //  * - LAST IS NOT A GOOD CHOICE, BECAUSE IT COULD HAVE A NEW NUMBER
        //  */
        // const contexts = Context.getCurrentContexts();
        // const amount = contexts.length;
        // const lastContext = contexts[amount - 1];
        // console.log('\n\ncontexts = ', contexts, '\n\n');
        // console.log('\n\nlastContext = ', lastContext, '\n\n');
        //
        // const tempWebviewId = (
        //     lastContext.title.includes('Smashing Magazine — For Web Designers And Developers') &&
        //     lastContext.url.includes('https://www.smashingmagazine.com')
        // ) ? lastContext.id : false;
        //
        // console.log('\n\ntempWebviewId = ', tempWebviewId);
        // console.log('webviewID = ', webviewID, '\n\n');
        //
        // // First check
        // if (webviewID === 'unknown') {
        //     webviewID = tempWebviewId;
        //     // Check it again so it will be equal
        //     return false;
        // } else if (webviewID === tempWebviewId) {
        //     // For the second time it is equal
        //     return webviewID;
        // }
        // // Reset it to the latest
        // webviewID = tempWebviewId;
        //
        // return false;

        /**
         * Attempt 3
         */
            // Remove the `NATIVE_APP` and Safari contexts to have clean array
        const currentPwaContexts = Context.getCurrentContexts().filter(context =>
                !currentContexts.find(currentContext => context.id === currentContext.id)
            );

        console.log('\n\ncurrentPwaContexts =', currentPwaContexts, ' \n\n');

        // Don't check anything if there is no data in the array
        if (currentPwaContexts.length === 0) {
            return false;
        }

        // There is an id of a blank page, now check if it changed to become a full page
        if (blankID) {
            // do some magic here
            console.log('\n\n#### blankID magic ####\n\n')
            const title = currentPwaContexts.find(currentContext => currentContext.id === blankID).title;
            webviewID = title.includes('Smashing Magazine — For Web Designers And Developers') ? blankID : false;

            console.log('\n\nblankID = ', blankID);
            console.log('\n\ntempWebviewId = ', tempWebviewId);
            console.log('webviewID = ', webviewID, '\n\n');

            return webviewID
        }

        /**
         * If there is an `about:blank`, then that is the webview we need to have
         * if there is `about:blank`, then take the one that is matching the data we need
         * always check if it stays the same
         */
            // tempWebviewId = currentPwaContexts.find(currentPwaContext => {
            //     console.log('currentPwaContext = ', currentPwaContext);
            //     // // If it is an about blank, then this is the one we need to have
            //     // if (currentPwaContext.title === '' && currentPwaContext.url === 'about:blank') {
            //     //     return;
            //     // } else if (
            //     //     currentPwaContext.title.includes('Smashing Magazine — For Web Designers And Developers') &&
            //     //     currentPwaContext.url.includes('https://www.smashingmagazine.com')
            //     // ) {
            //     //     return;
            //     // }
            //     return (
            //         // If it is an about blank, then this is the one we need to have
            //         (
            //             currentPwaContext.title === '' &&
            //             currentPwaContext.url === 'about:blank'
            //         ) ||
            //         (
            //             currentPwaContext.title.includes('Smashing Magazine — For Web Designers And Developers') &&
            //             currentPwaContext.url.includes('https://www.smashingmagazine.com')
            //         )
            //     );
            // }).id;

            // First check if there is a blank
        const blank = currentPwaContexts
                .find(currentPwaContext => currentPwaContext.title === '' && currentPwaContext.url === 'about:blank');

        if (blank) {
            blankID = blank.id;
            return false;
        } else {
            console.log('\NN\#### DO SOME MAGIC HERE TO DETERMINE THE LATEST WEBVIEW ####\N\N')
        }
        // If there is no blank then find the latest that contains

        console.log('\n\nblankID = ', blankID);
        console.log('\n\ntempWebviewId = ', tempWebviewId);
        console.log('webviewID = ', webviewID, '\n\n');

        // // First check
        // if (webviewID === 'unknown') {
        //     console.log('######### first check #########');
        //     webviewID = tempWebviewId;
        //     // Check it again so it will be equal
        //     return false;
        // } else if (webviewID === tempWebviewId) {
        //     // For the second time it is equal
        //     console.log('######### second check #########');
        //     return webviewID;
        // }
        // // Reset it to the latest
        // webviewID = tempWebviewId;
        //
        // return false;
    }, DEFAULT_TIMEOUT);

    driver.switchContext(webviewID);


    // // driver.terminateApp('com.apple.mobilesafari');
    // driver.background(-1);
    // driver.switchContext('NATIVE_APP');
    // driver.pause(10000)
    // $('~Smashing').waitForDisplayed(15000);
    // $('~Smashing').click();
    // driver.pause(10000)
    // console.log('\n\nContext.getCurrentContexts()= ', Context.getCurrentContexts(),'\n\n')
    // driver.switchContext('WEBVIEW');

    //  [{"id":"NATIVE_APP"},{"id":"WEBVIEW_56652.1","title":"Smashing Magazine — For Web Designers And Developers — Smashing Magazine","url":"https://www.smashingmagazine.com/"},{"id":"WEBVIEW_57519.1","title":"Appium/welcome","url":"http://0.0.0.0:4723/welcome"}]
}

// Element to enter Wifi
// 	//XCUIElementTypeCell[@name="Wifi"]
// Button to disable
// 	//XCUIElementTypeSwitch[@name="Wifi"]
