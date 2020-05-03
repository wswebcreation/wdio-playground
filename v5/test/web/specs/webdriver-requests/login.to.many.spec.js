import LoginScreen from '../../page-objects/login';
import InventoryListScreen from '../../page-objects/inventoryList';
import { LOGIN_USERS, SAUCE_DEMO_URL } from '../../../configs/e2eConstants';

describe('Too many WD requests', () => {

    beforeEach(() => {
        // Load the url
        browser.url(SAUCE_DEMO_URL);
        LoginScreen.username.isDisplayed();
        LoginScreen.password.isDisplayed();

        // Load it again
        browser.url(SAUCE_DEMO_URL);
        LoginScreen.username.isDisplayed();
        LoginScreen.password.isDisplayed();
    });

    it('should be able to login with a standard user', () => {
        // Login
        LoginScreen.isDisplayed();
        LoginScreen.username.isDisplayed();
        LoginScreen.username.setValue(LOGIN_USERS.STANDARD.username);
        LoginScreen.password.isDisplayed();
        LoginScreen.password.setValue(LOGIN_USERS.STANDARD.password);
        LoginScreen.loginButton.isDisplayed();
        LoginScreen.loginButton.click();

        // Wait for the inventory screen and check it
        InventoryListScreen.waitForIsDisplayed();
        expect(InventoryListScreen.isDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
    });

    it('should not be able to login with a locked user', () => {
        // Login
        LoginScreen.isDisplayed();
        LoginScreen.username.isDisplayed();
        LoginScreen.username.setValue(LOGIN_USERS.LOCKED.username);
        LoginScreen.password.isDisplayed();
        LoginScreen.password.setValue(LOGIN_USERS.LOCKED.password);
        LoginScreen.loginButton.isDisplayed();
        LoginScreen.loginButton.click();

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Sorry, this user has been locked out.',
            'The error message is not as expected',
        );
    });

    it('should show an error when no username is provided', () => {
        // Login
        LoginScreen.isDisplayed();
        LoginScreen.username.isDisplayed();
        LoginScreen.username.setValue(LOGIN_USERS.NO_USER_DETAILS.username);
        LoginScreen.password.isDisplayed();
        LoginScreen.password.setValue(LOGIN_USERS.NO_USER_DETAILS.password);
        LoginScreen.loginButton.isDisplayed();
        LoginScreen.loginButton.click();

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Username is required',
            'The error message is not as expected',
        );
    });

    it('should show an error when no password is provided', () => {
        // Login
        LoginScreen.isDisplayed();
        LoginScreen.username.isDisplayed();
        LoginScreen.username.setValue(LOGIN_USERS.NO_PASSWORD.username);
        LoginScreen.password.isDisplayed();
        LoginScreen.password.setValue(LOGIN_USERS.NO_PASSWORD.password);
        LoginScreen.loginButton.isDisplayed();
        LoginScreen.loginButton.click();

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Password is required',
            'The error message is not as expected',
        );
    });

    it('should show an error when no match is found', () => {
        // Login
        LoginScreen.isDisplayed();
        LoginScreen.username.isDisplayed();
        LoginScreen.username.setValue(LOGIN_USERS.NO_MATCH.username);
        LoginScreen.password.isDisplayed();
        LoginScreen.password.setValue(LOGIN_USERS.NO_MATCH.password);
        LoginScreen.loginButton.isDisplayed();
        LoginScreen.loginButton.click();

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service',
            'The error message is not as expected',
        );
    });
});
