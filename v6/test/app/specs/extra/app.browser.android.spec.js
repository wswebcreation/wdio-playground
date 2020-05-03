import LoginScreen from '../../screenObjects/login'
import InventoryListScreen from '../../screenObjects/inventoryList'
import Menu from '../../screenObjects/menu';

describe('Android Appium', () => {
    it('should be able to work with the Chrome browser that is opened with the app', () => {
        // Login to the app and verify that it succeeded
        LoginScreen.waitForIsShown();
        LoginScreen.signIn({
            username: 'standard_user',
            password: 'secret_sauce',
        });
        InventoryListScreen.waitForIsShown();

        /**
         * It depends if you want to solve challenge 2, the Welcome screen, with an `adb shell`-command, as found below,
         * or with a coding solution. Just uncomment the code
         */
        // // This will execute an `adb shell` command on the device to hide the Welcome screen of Chrome on startup
        // // after a fresh install
        // driver.execute('mobile:shell', {
        //     command: 'echo',
        //     args: ['"chrome --disable-fre --no-default-browser-check --no-first-run" > /data/local/tmp/chrome-command-line'],
        // });

        expect(InventoryListScreen.isShown()).toEqual(true);

        // Open the menu and click on the about screen
        Menu.open();
        Menu.openAbout();

        /**
         * This is a situation, where we COULD have the notification
         *
         * We use a try/catch here (challenge 1c), in combination with a small amount of wait time for the notification
         * (challenge 1a/1b).
         * It will be there very fast, and if it is not there it will fail and go into the catch meaning
         * it will not break the flow.
         */
        try {
            $('*//android.widget.ListView[@resource-id="android:id/resolver_list"]').waitForDisplayed(
                {
                    // Use a max wait of 2 seconds
                    timeout: 2000,
                    // This is a reverse parameter, when we provide a custom error
                    // message we need to provide the default value
                    reverse: false,
                    // A custom error message
                    timeoutMsg: 'The notification is not shown, this is not an error.',
                }
            );

            // Store if the button is there yes or no, this is for challenge 1a/1b
            const isJustOnceButtonShown = $('*//android.widget.Button[@resource-id="android:id/button_once"]').isDisplayed();

            // Select Chome
            $('*//android.widget.TextView[@text="Chrome"]').click();

            // Now check if the button was there, if so, then click on it
            if (isJustOnceButtonShown) {
                $('*//android.widget.Button[@resource-id="android:id/button_once"]').click();
            }
        } catch (error) {
            console.log('Something went wrong due to \n\n', error, '\n\n, but it was not severe enough to let the test fail');
        }

        /**
         * It depends if you want to solve challenge 2, the Welcome screen, with an `adb shell`-command
         * or with a coding solution as found below. Just uncomment the code
         */
        // /**
        //  * This is a situation, where we COULD have the welcome screen
        //  *
        //  * We use a try/catch here (challenge 2), in combination with a small amount of wait time for the screen to be shown.
        //  * It will be there very fast, and if it is not there it will fail and go into the catch meaning
        //  * it will not break the flow.
        //  */
        // try {
        //     $('*//android.widget.Button[@resource-id="com.android.chrome:id/terms_accept"]').waitForDisplayed(
        //         // Use a max wait of 2 seconds
        //         2000,
        //         // This is a reverse parameter, when we provide a custom error
        //         // message we need to provide the default value
        //         false,
        //         // A custom error message
        //         'The welcome screen is not shown, this is not an error.',
        //     );
        //     // If the `Accept & continue` is shown, click on it
        //     $('*//android.widget.Button[@resource-id="com.android.chrome:id/terms_accept"]').click();
        //
        //     // Wait for the `No Thanks` button and click on it
        //     $('*//android.widget.Button[@resource-id="com.android.chrome:id/negative_button"]').waitForDisplayed(DEFAULT_TIMEOUT);
        //     $('*//android.widget.Button[@resource-id="com.android.chrome:id/negative_button"]').click();
        // } catch (error) {
        //     console.log('Something went wrong due to \n\n', error, '\n\n, but it was not severe enough to let the test fail');
        // }

        // Now do all the context magic for challenge 2 and just wait until `WEBVIEW_chrome` is given back
        driver.waitUntil(
            // Check if there is a context that holds `WEBVIEW_chrome`
            () => {
                return driver.getContexts().find(context => context === 'WEBVIEW_chrome');
            },
            {
                // This time to verify if the condition is met
                timeout: 15000,
                // The custom error message when the webview is not found in time
                timeoutMsg: 'Could not find the right `WEBVIEW_chrome`-context',
            }
        );

        // Now change to the correct webview
        driver.switchContext('WEBVIEW_chrome');

        // What if there is no just once
        expect(driver.getTitle()).toEqual('Cross Browser Testing, Selenium Testing, Mobile Testing | Sauce Labs');
    });
});
