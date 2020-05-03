import { hideKeyboard, restartApp } from '../helpers/utils'
import { DEFAULT_TIMEOUT, LOGIN_USERS, PERSONAL_INFO } from '../../configs/e2eConstants'
import Gestures from '../helpers/Gestures'

describe('Android walk through', () => {
    beforeEach(() => {
        restartApp();
    });

    it('should be able to use XPATH to walk through the app', () => {
        // This is a bad practice of code, it's just to compare xpath with predicate string / class chain selectors

        // Log in
        const username = '//android.widget.EditText[@content-desc="test-Username"]';
        const password = '//android.widget.EditText[@content-desc="test-Password"]';
        const loginButton = '//android.view.ViewGroup[@content-desc="test-LOGIN"]'

        $(username).waitForDisplayed(DEFAULT_TIMEOUT);
        $(username).addValue(LOGIN_USERS.STANDARD.username);
        $(password).addValue(LOGIN_USERS.STANDARD.password);
        $(loginButton).click();

        // Select a product
        const swagScreen = '//android.widget.ScrollView[@content-desc="test-PRODUCTS"]';
        const swagItem = '//android.widget.TextView[contains(@text,"Sauce Labs Bike Light")]//ancestor::*[@content-desc="test-Item"]//*[@content-desc="test-ADD TO CART"]';

        $(swagScreen).waitForDisplayed(DEFAULT_TIMEOUT);
        $(swagItem).click();


        // Go to the cart
        const cart = '//android.view.ViewGroup[@content-desc="test-Cart"]';

        $(cart).click();

        // Go to checkout one
        const checkoutButton = '//android.view.ViewGroup[@content-desc="test-CHECKOUT"]';
        $(checkoutButton).waitForDisplayed(DEFAULT_TIMEOUT);

        $(checkoutButton).click();

        // Go to checkout two
        const firstName = '//android.widget.EditText[@content-desc="test-First Name"]';
        const lastName = '//android.widget.EditText[@content-desc="test-Last Name"]';
        const zip = '//android.widget.EditText[@content-desc="test-Zip/Postal Code"]';
        const continueButton = '//android.view.ViewGroup[@content-desc="test-CONTINUE"]';
        $(continueButton).waitForDisplayed(DEFAULT_TIMEOUT);

        $(firstName).addValue(PERSONAL_INFO.STANDARD.firstName);
        $(lastName).addValue(PERSONAL_INFO.STANDARD.lastName);
        $(zip).addValue(PERSONAL_INFO.STANDARD.zip);
        hideKeyboard($(firstName));
        Gestures.scrollDownToElement($(continueButton), 2);
        $(continueButton).click();

        // Continue to the finished screen
        const checkoutOverview = '//android.widget.ScrollView[@content-desc="test-CHECKOUT: OVERVIEW"]';
        const finishButton = '//android.view.ViewGroup[@content-desc="test-FINISH"]';

        $(checkoutOverview).waitForDisplayed(DEFAULT_TIMEOUT);
        Gestures.scrollDownToElement($(finishButton), 2);
        $(finishButton).click();

        // Verify you're on finished screen
        const checkoutFinish = '//android.widget.ScrollView[@content-desc="test-CHECKOUT: COMPLETE!"]';

        $(checkoutFinish).waitForDisplayed(DEFAULT_TIMEOUT);

        // [iPhone X MAC 12.2 #0-0] iOS walk through
        // [iPhone X MAC 12.2 #0-0]    ✓ should be able to use XPATH to walk through the app
        // [iPhone X MAC 12.2 #0-0]
        // [iPhone X MAC 12.2 #0-0] 1 passing (54.5s)
        //
        //
        // Spec Files:      1 passed, 1 total (100% completed) in 00:01:03
    });
});
