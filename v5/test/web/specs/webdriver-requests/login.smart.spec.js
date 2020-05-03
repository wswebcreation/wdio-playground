import LoginScreen from '../../page-objects/login';
import InventoryListScreen from '../../page-objects/inventoryList';
import { LOGIN_USERS, SAUCE_DEMO_URL } from '../../../configs/e2eConstants';

describe('Less WD requests', () => {

    beforeEach(() => {
        // Load the url
        browser.url(SAUCE_DEMO_URL);
    });

    it('should be able to login with a standard user', () => {
        // Login
        LoginScreen.signInAddValue(LOGIN_USERS.STANDARD);

        // Wait for the inventory screen and check it
        InventoryListScreen.waitForIsDisplayed();
        expect(InventoryListScreen.isDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
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

    it('should show an error when no username is provided', () => {
        // Login
        LoginScreen.signInAddValue(LOGIN_USERS.NO_USER_DETAILS);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Username is required',
            'The error message is not as expected',
        );
    });

    it('should show an error when no password is provided', () => {
        // Login
        LoginScreen.signInAddValue(LOGIN_USERS.NO_PASSWORD);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Password is required',
            'The error message is not as expected',
        );
    });

    it('should show an error when no match is found', () => {
        // Login
        LoginScreen.signInAddValue(LOGIN_USERS.NO_MATCH);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service',
            'The error message is not as expected',
        );
    });
});
