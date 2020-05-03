import LoginScreen from '../../screenObjects/login'
import { DEFAULT_TIMEOUT, LOGIN_USERS } from '../../../configs/e2eConstants'
import InventoryListScreen from '../../screenObjects/inventoryList'
import Context from '../../helpers/Context'
import Menu from '../../screenObjects/menu';

describe('iOS Appium', () => {
    it('should be able to work with the safari browser that is opened with the app', () => {
        // Login to the app and verify that it succeeded
        LoginScreen.waitForIsShown();
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        InventoryListScreen.waitForIsShown();

        expect(InventoryListScreen.isShown()).toEqual(true);

        // Open the menu and click on the about screen
        Menu.open();
        Menu.openAbout();

        // Now do all the context magic
        let correctWebview = null;

        /**
         * Wait until the right context with the right url has loaded
         * This `waitUntil` will wait until the condition of the provided
         * function will return true, in our case it will return true if
         * the `correctWebview` contains a value
         */
        /**
         * `waitUntil` expects a condition and waits until that condition is
         * fulfilled with a truthy value. So just log the contexts for 15 seconds
         */
        driver.waitUntil(() => {
            // Get all the contexts, that could look like this
            // [
            //     {
            //         id: 'NATIVE_APP',
            //     },
            //     {
            //         id: 'WEBVIEW_74323.1',
            //         title: 'Smashing Magazine — For Web Designers And Developers — Smashing Magazine',
            //         url: 'https://www.smashingmagazine.com/',
            //     },
            //     {
            //         id: 'WEBVIEW_74323.2',
            //         title: 'Cross Browser Testing, Selenium Testing, Mobile Testing | Sauce Labs',
            //         url: 'https://saucelabs.com/',
            //     },
            //  ]
            const contexts = Context.getCurrentContexts();

            // Store the correct context into this variable
            // if there is no match don't do anything
            correctWebview = contexts
            // First filter out the 'NATIVE_APP'
                .filter(context => {
                    return !context.id.includes('NATIVE_APP')
                })
                // Now filter out the webview that contains the correct URL
                .find(context => {
                    return context.url.includes('https://saucelabs.com/')
                });

            // If the `correctWebview` contains a value this function will evaluate to `true` meaning
            // the `waitUntil` can stop
            return correctWebview || false;
        }, {timeout: DEFAULT_TIMEOUT});

        // Now switch to the right context
        driver.switchContext(correctWebview.id);

        expect(driver.getTitle()).toEqual('Cross Browser Testing, Selenium Testing, Mobile Testing | Sauce Labs');
    });
});
