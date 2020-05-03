import { LOGIN_USERS, PERSONAL_INFO } from '../../../../configs/e2eConstants';
import AppHeader from '../../../page-objects/appHeader';
import Menu from '../../../page-objects/menu';
import LoginScreen from '../../../page-objects/login';
import InventoryListScreen from '../../../page-objects/inventoryList';
import CartContent from '../../../page-objects/cart';
import CheckoutComplete from '../../../page-objects/checkoutComplete';
import CheckoutPageOne from '../../../page-objects/checkoutPageOne';
import CheckoutPageTwo from '../../../page-objects/checkoutPageTwo';

describe('Anti pattern', () => {
    beforeEach(() => {
        // Load the url
        browser.url('');
    });

    afterEach(() => {
        // For some reason Firefox and internet explorer
        // don't accept the `browser.sessionStorage('DELETE');`
        browser.execute('sessionStorage.clear()');
    });

    it('should be able to test loading of login page', () => {
        expect(LoginScreen.waitForIsDisplayed()).toEqual(
            true,
            'Login page was not shown',
        );
        expect(LoginScreen.username.isDisplayed()).toEqual(
            true,
            'Username field was not shown',
        );
        expect(LoginScreen.password.isDisplayed()).toEqual(
            true,
            'Username field was not shown',
        );
    });

    it('should be able to login with a standard user', () => {
        expect(LoginScreen.waitForIsDisplayed()).toEqual(
            true,
            'Login page was not shown',
        );
        LoginScreen.signInAddValue(LOGIN_USERS.STANDARD);

        // Wait for the inventory screen and check it
        expect(InventoryListScreen.waitForIsDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
        );

        Menu.open();
        Menu.logout();

        expect(LoginScreen.waitForIsDisplayed()).toEqual(
            true,
            'Login page was still shown',
        );

    });

    it('should not be able to login with a locked user', () => {
        // Login
        LoginScreen.signInAddValue(LOGIN_USERS.LOCKED);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Sorry, this user has been locked out.',
            'The error message is not as expected',
        );
    });

    it('should not be able to login with an invalid username', () => {
        // Login
        LoginScreen.signInAddValue(LOGIN_USERS.NO_MATCH);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service',
            'The error message is not as expected',
        );
    });

    it('should not be able to login with an invalid password', () => {
        // Login
        LoginScreen.signInAddValue(LOGIN_USERS.NO_MATCH);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service',
            'The error message is not as expected',
        );
    });

    it('should validate that all products are present', () => {
        // Login
        LoginScreen.signInAddValue(LOGIN_USERS.STANDARD);

        // Wait for the inventory screen and check it
        expect(InventoryListScreen.waitForIsDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
        expect(InventoryListScreen.swagItems.length).toEqual(
            6,
            'Amount of items was not equal to 6',
        );
    });

    it('should validate that a product can be added to a cart', () => {
        // Login
        LoginScreen.signInAddValue(LOGIN_USERS.STANDARD);

        // Wait for the inventory screen and check it
        expect(InventoryListScreen.waitForIsDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
        expect(AppHeader.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        // Add an item to the cart
        InventoryListScreen.addSwagItemToCart(0);
        expect(AppHeader.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
    });

    it('should validate that user can checkout', () => {
        // The real test execution
        LoginScreen.signIn(LOGIN_USERS.STANDARD);

        // Add something in the cart
        InventoryListScreen.waitForIsDisplayed();
        InventoryListScreen.addSwagItemToCart(0);

        expect(AppHeader.getCartAmount()).toEqual('1');

        // Go to checkout
        AppHeader.openCart();
        CartContent.waitForIsDisplayed();
        CartContent.goToCheckout();

        // Submit personal info
        CheckoutPageOne.waitForIsDisplayed();
        CheckoutPageOne.submitPersonalInfo(PERSONAL_INFO.STANDARD);
        CheckoutPageTwo.waitForIsDisplayed();

        expect(CheckoutPageTwo.items.length).toEqual(1);

        // Finish it
        CheckoutPageTwo.finishCheckout();

        // Validate that the checkout was successful
        expect(CheckoutComplete.waitForIsDisplayed()).toEqual(
            true,
            'The amount of cart items is not equal to 1',
        );
    });
});
