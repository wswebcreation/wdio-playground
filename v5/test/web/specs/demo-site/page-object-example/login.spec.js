import Login from '../../../page-objects/login';
import InventoryList from '../../../page-objects/inventoryList';

describe('Login', () => {
    it('should be able to login with a standard user', () => {
        // Open the page
        browser.url('');
        // Wait for the page to be visible
        Login.screen.waitForVisible(15000);

        // Now login
        Login.username.addValue('standard_user');
        Login.password.addValue('secret_sauce');
        Login.loginButton.click();

        // Wait for the screen to be displayed
        expect(InventoryList.screen.waitForVisible(15000)).toEqual(true, 'Inventory List screen was not shown');
    });

    it('should not be able to login with a locked user', () => {
        // Open the page
        browser.url('');
        // Wait for the page to be visible
        Login.screen.waitForVisible(15000);

        // Now login
        Login.username.addValue('standard_user');
        Login.password.addValue('secret_sauce');
        Login.loginButton.click();

        expect(Login.errorMessage.waitForVisible(15000)).toEqual(true, 'Error message is shown');
        expect(Login.errorMessage.getText()).toContain(
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
