import LoginScreen from '../../../app/screenObjects/login'
import WebLoginScreen from '../../page-objects/login';
import WebInventoryListScreen from '../../page-objects/inventoryList';
import { BUNDLE_IDS, LOGIN_USERS } from '../../../configs/e2eConstants'
import InventoryListScreen from '../../../app/screenObjects/inventoryList'
import Context, { CONTEXT_REF } from '../../../app/helpers/Context'


// This will only work on emu/sim, not on real devices due to re-signing the app for iOS
describe('Install the app afterwards', () => {
    it('should be possible to open safari and install an app later', () => {
        // Load the demo url
        browser.url('https://www.saucedemo.com/');

        // Login an make sure it succeeded
        WebLoginScreen.waitForIsDisplayed();
        WebLoginScreen.signIn(LOGIN_USERS.STANDARD);

        expect(WebInventoryListScreen.waitForIsDisplayed()).toEqual(true);

        // Put the browser to the background
        browser.background(-1)
        // Install the app
        const app = 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.1.0/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.1.0.ipa.zip'
        driver.execute('mobile: installApp', { app });
        // Open the app
        driver.execute('mobile: launchApp', { bundleId: BUNDLE_IDS.IOS });

        // Switch to the native context so the native locators will be used
        Context.waitForNativeContextLoaded();
        Context.switchToContext(CONTEXT_REF.NATIVE);

        // Login to the app and verify that it succeeded
        LoginScreen.waitForIsShown();
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        InventoryListScreen.waitForIsShown();

        expect(InventoryListScreen.isShown()).toEqual(true);
    })
})
