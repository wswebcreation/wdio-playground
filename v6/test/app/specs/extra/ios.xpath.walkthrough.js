import { hideKeyboard, restartApp } from '../../helpers/utils'
import { DEFAULT_TIMEOUT, LOGIN_USERS, PERSONAL_INFO } from '../../../configs/e2eConstants'
import Gestures from '../../helpers/Gestures'

describe('iOS walk through', () => {
    beforeEach(() => {
        restartApp();
    });

    it('should be able to use XPATH to walk through the app', () => {
        // This is a bad practice of code, it's just to compare xpath with predicate string / class chain selectors

        // Log in
        const username = '//XCUIElementTypeTextField[@name="test-Username"]';
        const password = '//XCUIElementTypeSecureTextField[@name="test-Password"]';
        const loginButton = '//XCUIElementTypeOther[@name="test-LOGIN"]'

        $(username).waitForDisplayed(DEFAULT_TIMEOUT);
        $(username).addValue(LOGIN_USERS.STANDARD.username);
        $(password).addValue(LOGIN_USERS.STANDARD.password);
        $(loginButton).click();

        // Select a product
        const swagScreen = '//XCUIElementTypeOther[@name="test-PRODUCTS"]';
        const swagItem = '//XCUIElementTypeStaticText[contains(@value,"Sauce Labs Bike Light")]//ancestor::*[@name="test-Item"]//*[@name="test-ADD TO CART"]';

        $(swagScreen).waitForDisplayed(DEFAULT_TIMEOUT);
        $(swagItem).click();


        // Go to the cart
        const cart = '//XCUIElementTypeOther[@name="test-Cart"]';

        $(cart).click();

        // Go to checkout one
        const checkoutScreenOne = '//XCUIElementTypeOther[@name="test-Cart Content"]';
        const checkoutButton = '//XCUIElementTypeOther[@name="test-CHECKOUT"]';
        $(checkoutScreenOne).waitForDisplayed(DEFAULT_TIMEOUT);

        Gestures.scrollDownToElement($(checkoutButton));
        $(checkoutButton).click();

        // Go to checkout two
        const firstName = '//XCUIElementTypeTextField[@name="test-First Name"]';
        const lastName = '//XCUIElementTypeTextField[@name="test-Last Name"]';
        const zip = '//XCUIElementTypeTextField[@name="test-Zip/Postal Code"]';
        const continueButton = '//XCUIElementTypeOther[@name="test-CONTINUE"]';
        $(continueButton).waitForDisplayed(DEFAULT_TIMEOUT);

        $(firstName).addValue(PERSONAL_INFO.STANDARD.firstName);
        $(lastName).addValue(PERSONAL_INFO.STANDARD.lastName);
        $(zip).addValue(PERSONAL_INFO.STANDARD.zip);
        hideKeyboard($(firstName));
        Gestures.scrollDownToElement($(continueButton));
        $(continueButton).click();

        // Continue to the finished screen
        const checkoutOverview = '//XCUIElementTypeOther[@name="test-CHECKOUT: OVERVIEW"]';
        const finishButton = '//XCUIElementTypeOther[@name="test-FINISH"]';

        $(checkoutOverview).waitForDisplayed(DEFAULT_TIMEOUT);
        Gestures.scrollDownToElement($(finishButton));
        $(finishButton).click();

        // Verify you're on finished screen
        const checkoutFinish = '//XCUIElementTypeOther[@name="test-CHECKOUT: COMPLETE!"]';

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
