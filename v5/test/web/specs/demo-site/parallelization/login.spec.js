import { LOGIN_USERS } from '../../../../configs/e2eConstants';
import LoginScreen from '../../../page-objects/login';
import InventoryListScreen from '../../../page-objects/inventoryList';

describe('Parallelization - Login', () => {
    // afterAll(() => browser.execute('sauce:job-name=Parallelization - Login 2-2'));
    beforeEach(() => {
        // Load the url
        browser.url('');
    });

    fit('should be able to test loading of login page', () => {
        expect(LoginScreen.waitForIsDisplayed()).toEqual(
            true,
            'Login page was not shown',
        );
    });

    it('should be able to login with a standard user', () => {
        LoginScreen.signIn(LOGIN_USERS.STANDARD);

        // Wait for the inventory screen and check it
        expect(InventoryListScreen.waitForIsDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
    });

    it('should not be able to login with a locked user', () => {
        // Login
        LoginScreen.signIn(LOGIN_USERS.LOCKED);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Sorry, this user has been locked out.',
            'The error message is not as expected',
        );
    });

    it('should not be able to login with an invalid username', () => {
        // Login
        LoginScreen.signIn(LOGIN_USERS.NO_MATCH);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service',
            'The error message is not as expected',
        );
    });

    it('should not be able to login with an invalid password', () => {
        // Login
        LoginScreen.signIn(LOGIN_USERS.NO_MATCH);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service',
            'The error message is not as expected',
        );
    });
});
