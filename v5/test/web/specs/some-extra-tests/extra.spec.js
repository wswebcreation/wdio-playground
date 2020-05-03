// describe('Exam Sharing Test', () => {
//     beforeEach(() => {
//         browser.url('https://staging.liviasaude.com.br/entrar')
//
//         $('input[name=federalTaxId]').waitForExist()
//         $('input[name=federalTaxId]').setValue('42463613050')
//         browser.hideKeyboard();
//         // triggerOnChange('input[name=federalTaxId]')
//
//         browser.pause(5000)
//
//         $('button[type=submit]').waitForEnabled()
//         $('button[type=submit]').click()
//         browser.pause(5000)
//
//         $('input[name=password]').waitForExist()
//         $('input[name=password]').setValue('uEd!38#0GEwo1Bx')
//         // triggerOnChange('input[name=password]')
//
//         $('button[type=submit]').waitForEnabled()
//         $('button[type=submit]').click()
//
//         $('li.exam-results__item.exam-results__fade-enter-done').waitForExist()
//         $('button.share-button a').waitForEnabled()
//         $('button.share-button a').click()
//     })
//
//     afterEach(() => {
//         browser.execute(() => window.localStorage.clear())
//     })
//
//     it('Validate Shared Copy Link PDF Status', () => {
//         $('.share__item[data-clipboard-text]').waitForEnabled()
//         $('.share__item[data-clipboard-text]').click()
//
//         // clipboard validation
//         // browser.executeAsync(cb => navigator.clipboard.readText().then(cb, cb))
//         const currentContext = driver.getContext()
//         driver.switchContext('NATIVE_APP')
//         const rawBase64Cb = driver.getClipboard()
//         driver.switchContext(currentContext)
//         const clipboardValue = Buffer.from(rawBase64Cb, 'base64').toString('utf8')
//         console.log('\n\n\n\n FORDEBUG')
//         console.log({ clipboardValue })
//         // browser.url('https://liviastag.page.link/GWLsoB9Cag9o5o6c8')
//         // what happens if you don't do the `browser.url(pastedLink)` but do this
//
//             // `browser.execute('window.location="http://example.com"')`
//         browser.execute('window.location="https://liviastag.page.link/GWLsoB9Cag9o5o6c8"')
//
//         browser.pause(5000)
//
//         console.log('getWindowHandles = ', driver.getWindowHandles())
//
//         browser.execute(() => document.querySelector('#root > div.cta-overlay').click())
//         // $('#root > div.cta-overlay')
//         console.log(browser.getUrl())
//         browser.pause(10000)
//         console.log('\n\n\n\n FORDEBUG')
//     })
// })
//
// /**
//  * Trigger the onChange on an element
//  *
//  * @param {string} selector the selector
//  */
// function triggerOnChange(selector) {
//     if(browser.isIOS) {
//         browser.execute((elementSelector) => {
//             let input = document.querySelector(elementSelector);
//             let lastValue = '';
//             let event = new Event('input', { bubbles: true });
//             let tracker = input._valueTracker;
//             if (tracker) {
//                 tracker.setValue(lastValue);
//             }
//             input.dispatchEvent(event);
//         }, selector);
//     }
// }


// describe('Simple test', () => {
// //     it('Do something', () => {
// //         browser.url('https://d-policyservicing.qa.progressive.com/app/slot1/account-entry');
// //
// //         expect(browser.getTitle()).toEqual('Online Servicing App');
// //
// //         $('.notesArea').setValue('I am able to interact with this page on a desktop and on an iOS emulator.\n\nGrtz Wim Selles');
// //
// //         // this is only for demo purposes
// //         browser.pause(3000);
// //     });
// // });

// import {CONTEXT_REF} from "../../../app/helpers/Context";
//
// describe('Dont start app by default', () => {
//     it('should start the browser first', () => {
//         // For demo purpose
//         browser.pause(5000);
//
//         // Launch the browser
//         driver.execute('mobile: launchApp', {bundleId: 'com.apple.mobilesafari'});
//
//         // Get the webview id of the browser, this needs to be an exact ID and can differ per run
//         let webviewID = null;
//         driver.waitUntil(
//             () => {
//                 const currentContexts = driver.getContexts();
//                 const index = currentContexts.findIndex(context => context.includes('WEBVIEW'));
//
//                 if (currentContexts.length > 1 && index > -1) {
//                     return webviewID = currentContexts[index];
//                 }
//
//                 return false
//             },
//             10000,
//             'Webview context not loaded',
//             100
//         );
//
//         //Switch to webview because this is a native app project
//         driver.switchContext(webviewID);
//
//         // Get the url
//         driver.url('https://www.saucelabs.com');
//
//         // For demo purpose
//         browser.pause(5000);
//
//         // Switch back to NATIVE_APP webview because this is a native app project
//         driver.switchContext('NATIVE_APP');
//
//         // Launch the APP
//         driver.execute('mobile: launchApp', {bundleId: 'org.reactjs.native.example.SwagLabsMobileApp'});
//
//         // For demo purpose
//         browser.pause(5000);
//     });
// });
// it('should be able to open the hamburger menu', () => {
//     // Go to the website
//     browser.url('https://www.hulu.com/welcome');
//
//     // Verify that the menu is not open
//     expect($('.toggler--collapsed').isDisplayed()).toEqual(false, 'Menu is already open')
//
//     // Open the menu
//     $('.navigation__toggler').click();
//
//     // Verify that is opened
//     expect($('.toggler--collapsed').waitForDisplayed(15000)).toEqual(true, 'Menu is NOT opened');
//
//     // Open the login page
//     $('.navigation__login-button').click();
//
//     // Wait for the login page to be loaded and set the data
//     $('#email_id').waitForDisplayed(15000);
//     $('#email_id').setValue('foo@bar.com');
//     // This tirggers the internal app state to be updated
//     triggerOnChange('#email_id');
//
//     // Set the password
//     $('#password_id').setValue('password');
//     // This tirggers the internal app state to be updated
//     triggerOnChange('#password_id');
//
//     // For demo purpose
//     browser.pause(5000);
// });

// describe('Sliders', () => {
//     it('should be able to swipe from right to left and from left to right', ()=>{
//         browser.url('https://www.saucelabs.com');
//
//         // Wait for the cookie banner to be loaded
//         $('.cc-btn.cc-dismiss').waitForDisplayed(15000);
//         $('.cc-btn.cc-dismiss').click();
//
//         // The promo slider
//         const promoSlider = $('.is-dark.section-promo-carousel .carousel-container');
//
//         // Scroll it into view, but not to the top of the page, due to the header
//         promoSlider.scrollIntoView(false);
//
//         // For demo purpose
//         browser.pause(3000);
//
//         // Get the position of the element
//         const elementRectangles = browser.getElementRect(promoSlider.elementId);
//
//         // Swipe from right to left
//         swipe(elementRectangles);
//
//         // For demo purpose
//         browser.pause(3000);
//
//         // Swipe from left to right
//         swipe(elementRectangles, false);
//
//         // For demo purpose
//         browser.pause(3000);
//     });
// });
//
// /**
//  * Swipe from right to left of from left to right
//  *
//  * @param {object} coordinates
//  * @param {number} coordinates.x
//  * @param {number} coordinates.y
//  * @param {number} coordinates.width
//  * @param {number} coordinates.height
//  * @param {boolean} rightToLeft
//  */
// function swipe(coordinates, rightToLeft = true){
//     const browserContextID = browser.getContext();
//
//     // switch to native app
//     browser.switchContext('NATIVE_APP');
//
//     // Calculate the from and to
//     // The y position should be half of the slider
//     // The x drag should be from right to left minus a x amount of pixels
//     const y = coordinates.y + (coordinates.height / 2);
//     const xStart = coordinates.width;
//     const xEnd = coordinates.x + 50;
//
//     const from = {
//         x: rightToLeft ? xStart : xEnd,
//         y:y,
//     };
//     const to = {
//         x: rightToLeft ? xEnd : xStart,
//         y: y,
//     };
//
//     // Now do the swipe magic
//     browser.touchPerform([ {
//         action: 'press',
//         options: from,
//     }, {
//         action: 'wait',
//         options: { ms: 1000 },
//     }, {
//         action: 'moveTo',
//         options: to,
//     }, {
//         action: 'release',
//     } ]);
//     driver.pause(1000);
//
//     // switch back to get it in the original state
//     browser.switchContext(browserContextID);
// }
//
// /**
//  * This script will trigger the onChange event of an input component so
//  * the internal state is being updated
//  * This is a temporary fix, because it is fixed in Appium 1.17.0
//  *
//  * @param {string} selector
//  */
// function triggerOnChange(selector) {
//     // WebdriverIO can automatically determine if this is an iOS device,
//     // if so do all the magic =)
//     if(browser.isIOS) {
//         browser.execute((elementSelector) => {
//             let input = document.querySelector(elementSelector);
//             let lastValue = '';
//             let event = new Event('input', { bubbles: true });
//             let tracker = input._valueTracker;
//             if (tracker) {
//                 tracker.setValue(lastValue);
//             }
//             input.dispatchEvent(event);
//         }, selector);
//     }
// }


describe('Drag and drop', () => {
    // it('should be able to put documents in the trash', () => {
    //     // lod the url
    //     browser.url('https://marcojakob.github.io/dart-dnd/basic/');
    //
    //     // Wait for the bin to be there
    //     const trashCan = $('.trash');
    //     trashCan.waitForDisplayed(15000);
    //
    //     // First check how many documents whe have
    //     expect($$('.document').length).toEqual(
    //         4,
    //         'There are less documents, this is not correct',
    //     );
    //
    //     // Drag the first document to the trash can
    //     $$('.document')[0].dragAndDrop(trashCan);
    //
    //     // for demo purpose
    //     browser.pause(1000)
    //
    //     // Check the amount of documents is 3
    //     expect($$('.document').length).toEqual(3);
    //
    //     // Check the trash can is full
    //     expect($('.trash.full').waitForDisplayed(15000)).toEqual(
    //         true,
    //         'The trash can is not filled!'
    //     );
    //     function dragAndDrop(dragEl, targetEl) {
    //         /**
    //          * Get coordinates to drag and drop
    //          */
    //         const dragRect = browser.getElementRect(dragEl.elementId);
    //         const targetRect = browser.getElementRect(targetEl.elementId);
    //         // Get the center of the elements
    //         const dragX = parseInt(dragRect.x + (dragRect.width / 2), 10);
    //         const dragY = parseInt(dragRect.y + (dragRect.height / 2), 10);
    //         const targetX = parseInt(targetRect.x + (targetRect.width / 2), 10) - dragX;
    //         const targetY = parseInt(targetRect.y + (targetRect.height / 2), 10) - dragY;
    //
    //         // Start the action
    //         browser.performActions([
    //             {
    //                 type: 'pointer',
    //                 // Give it a unique ID
    //                 id: 'DragAndDrop-1',
    //                 parameters: {pointerType: 'mouse'},
    //                 // The actions
    //                 actions: [
    //                     // Select the document based on its x and y coordinates
    //                     {type: 'pointerMove', duration: 0, x: 'start x', y: 'start y'},
    //                     // Press the mouse button
    //                     {type: 'pointerDown', button: 0},
    //                     // Add a human pause
    //                     {type: 'pause', duration: 10},
    //                     // Now move the mouse to the trash bin
    //                     {type: 'pointerMove', duration: 1000, origin: 'pointer', x: 'end x', y: 'end y'},
    //                     // Release the mouse button
    //                     {type: 'pointerUp', button: 0}
    //                 ]
    //             }
    //         ]);
    //
    //         // Release all actions
    //         browser.releaseActions();
    //
    //
    //         browser.performActions([
    //             {
    //                 type: 'pointer',
    //                 id: 'finger1',
    //                 parameters: {pointerType: 'mouse'},
    //                 actions: [
    //                     {type: 'pointerMove', duration: 0, x: dragX, y: dragY},
    //                     {type: 'pointerDown', button: 0},
    //                     {type: 'pause', duration: 10},
    //                     {type: 'pointerMove', duration: 1000, origin: 'pointer', x: targetX, y: targetY},
    //                     {type: 'pointerUp', button: 0}
    //                 ]
    //             }
    //         ]);
    //         browser.releaseActions();
    //     }
    //
    //     // // Drag the first document to the trash can
    //     // $$('.document')[0].dragAndDrop(trashCan);
    //     //
    //     // // for demo purpose
    //     // browser.pause(1000)
    //     //
    //     // // Check the amount of documents is 2
    //     // expect($$('.document').length).toEqual(2);
    //     //
    //     // // Drag the first document to the trash can
    //     // $$('.document')[0].dragAndDrop(trashCan);
    //     //
    //     // // for demo purpose
    //     // browser.pause(1000);
    //     //
    //     // // Check the amount of documents is 1
    //     // expect($$('.document').length).toEqual(1);
    //     //
    //     // // Drag the last document to the trash can
    //     // $$('.document')[0].dragAndDrop(trashCan);
    //     //
    //     // // for demo purpose
    //     // browser.pause(1000);
    //     //
    //     // // Check the amount of documents is 0
    //     // expect($$('.document').length).toEqual(0);
    // });
    it('should do something', ()=>{
        console.log('browser = ', browser.options.requestedCapabilities.w3cCaps.alwaysMatch)
    })
});
