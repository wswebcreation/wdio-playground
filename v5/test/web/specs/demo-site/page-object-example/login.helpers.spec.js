import Login from '../../../page-objects/login';
import InventoryList from '../../../page-objects/inventoryList';
import { LOGIN_USERS } from '../../../../configs/e2eConstants';

describe('Login', () => {
    it('should be able to login with a standard user', () => {
        // Open the page
        browser.url('');
        // Wait for the page to be visible
        Login.waitForIsDisplayed();

        // Now login
        LoginScreen.signIn(LOGIN_USERS.STANDARD);

        // Wait for the screen to be displayed
        expect(InventoryList.waitForIsDisplayed()).toEqual(true, 'Inventory List screen was not shown');
    });

    it('should not be able to login with a locked user', () => {
        // Open the page
        browser.url('');
        // Wait for the page to be visible
        Login.waitForIsDisplayed();

        // Now login
        LoginScreen.signIn(LOGIN_USERS.STANDARD);

        expect(Login.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(Login.getErrorMessage()).toContain(
            'Epic sadface: Sorry, this user has been locked out.',
            'The error message is not as expected',
        );
    });

    it('should show an error when no username is provided', () => {
        // ..
    });

    it('should show an error when no password is provided', () => {
        // ..
    });
});
