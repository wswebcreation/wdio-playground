import { hideKeyboard, restartApp } from '../../helpers/utils'
import { DEFAULT_TIMEOUT, LOGIN_USERS, PERSONAL_INFO } from '../../../configs/e2eConstants'
import Gestures from '../../helpers/Gestures'

describe('iOS walk through', () => {
    beforeEach(() => {
        restartApp();
    });

    it('should be able to use class chain to walk through the app', () => {
        // This is a bad practice of code, it's just to compare xpath with predicate string / class chain selectors

        // Log in
        const username = '**/XCUIElementTypeTextField[`name CONTAINS "test-Username"`]';
        const password = '**/XCUIElementTypeSecureTextField[`name CONTAINS "test-Password"`]';
        const loginButton = '**/XCUIElementTypeOther[`name CONTAINS "test-LOGIN"`]';

        $(`-ios class chain:${ username }`).waitForDisplayed({timeout:DEFAULT_TIMEOUT});
        $(`-ios class chain:${ username }`).addValue(LOGIN_USERS.STANDARD.username);
        $(`-ios class chain:${ password }`).addValue(LOGIN_USERS.STANDARD.password);
        $(`-ios class chain:${ loginButton }`).click();

        // Select a product
        const swagScreen = '**/XCUIElementTypeOther[`name CONTAINS "test-PRODUCTS"`]';
        const swagItem = '**/XCUIElementTypeOther[`name CONTAINS "test-Item"`]/**/XCUIElementTypeOther[`name CONTAINS "Sauce Labs Bike Light" AND name CONTAINS "ADD TO CART"`]/**/XCUIElementTypeOther[`name == "test-ADD TO CART"`]';

        $(`-ios class chain:${ swagScreen }`).waitForDisplayed({timeout:DEFAULT_TIMEOUT});
        $(`-ios class chain:${ swagItem }`).click();


        // Go to the cart
        const cart = '**/XCUIElementTypeOther[`name CONTAINS "test-Cart"`]';

        $(`-ios class chain:${ cart }`).click();

        // Go to checkout one
        const checkoutScreenOne = '**/XCUIElementTypeOther[`name CONTAINS "test-Cart Content"`]';

        $(`-ios class chain:${ checkoutScreenOne }`).waitForDisplayed({timeout:DEFAULT_TIMEOUT});

        const checkoutButton = '**/XCUIElementTypeOther[`name CONTAINS "test-CHECKOUT"`]';

        Gestures.scrollDownToElement($(`-ios class chain:${ checkoutButton }`));
        $(`-ios class chain:${ checkoutButton }`).click();

        // Go to checkout two
        const firstName = '**/XCUIElementTypeTextField[`name CONTAINS "test-First Name"`]';
        const lastName = '**/XCUIElementTypeTextField[`name CONTAINS "test-Last Name"`]';
        const zip = '**/XCUIElementTypeTextField[`name CONTAINS "test-Zip/Postal Code"`]';
        const continueButton = '**/XCUIElementTypeOther[`name CONTAINS "test-CONTINUE"`]';
        $(`-ios class chain:${ continueButton }`).waitForDisplayed({timeout:DEFAULT_TIMEOUT});

        $(`-ios class chain:${ firstName }`).addValue(PERSONAL_INFO.STANDARD.firstName);
        $(`-ios class chain:${ lastName }`).addValue(PERSONAL_INFO.STANDARD.lastName);
        $(`-ios class chain:${ zip }`).addValue(PERSONAL_INFO.STANDARD.zip);
        hideKeyboard($(`-ios class chain:${ firstName }`));
        Gestures.scrollDownToElement($(`-ios class chain:${ continueButton }`));
        $(`-ios class chain:${ continueButton }`).click();

        // Continue to the finished screen
        const checkoutOverview = '**/XCUIElementTypeOther[`name CONTAINS "test-CHECKOUT: OVERVIEW"`]';
        const finishButton = '**/XCUIElementTypeOther[`name CONTAINS "test-FINISH"`]';

        $(`-ios class chain:${ checkoutOverview }`).waitForDisplayed({timeout:DEFAULT_TIMEOUT});
        Gestures.scrollDownToElement($(`-ios class chain:${ finishButton }`));
        $(`-ios class chain:${ finishButton }`).click();

        // Verify you're on finished screen
        const checkoutFinish = '**/XCUIElementTypeOther[`name CONTAINS "test-CHECKOUT: COMPLETE!"`]';

        $(`-ios class chain:${ checkoutFinish }`).waitForDisplayed({timeout:DEFAULT_TIMEOUT});

        // [iPhone X MAC 12.2 #0-0] iOS walk through
        // [iPhone X MAC 12.2 #0-0]    ✓ should be able to use predicate string to walk through the app
        // [iPhone X MAC 12.2 #0-0]
        // [iPhone X MAC 12.2 #0-0] 1 passing (20.1s)
        // [iPhone X MAC 12.2 #0-0] 1 skipped
        //
        //
        // Spec Files:      1 passed, 1 total (100% completed) in 00:00:26
    });
});
