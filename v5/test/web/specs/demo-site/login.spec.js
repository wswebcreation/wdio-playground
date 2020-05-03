import LoginScreen from '../../page-objects/login';
import InventoryListScreen from '../../page-objects/inventoryList';
import { LOGIN_USERS } from '../../../configs/e2eConstants';

describe('Login', () => {
    // beforeAll(()=>{
    //     browser.execute('sauce:job-name=Login');
    // });

    beforeEach(() => {
        browser.url('');
    });

    it('should be able to login with a standard user', () => {
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        InventoryListScreen.waitForIsDisplayed();
        // console.log('browser.log(\'sauce:network\') = ', browser.log('sauce:network'))
        expect(InventoryListScreen.isDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
    });

    it('should not be able to login with a locked user', () => {
        LoginScreen.signIn(LOGIN_USERS.LOCKED);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Sorry, this user has been locked out.',
            'The error message is not as expected',
        );
    });

    it('should show an error when no username is provided', () => {
        LoginScreen.signIn(LOGIN_USERS.NO_USER_DETAILS);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Username is required',
            'The error message is not as expected',
        );
    });

    it('should show an error when no password is provided', () => {
        LoginScreen.signIn(LOGIN_USERS.NO_PASSWORD);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Password is required',
            'The error message is not as expected',
        );
    });

    it('should show an error when no match is found', () => {
        LoginScreen.signIn(LOGIN_USERS.NO_MATCH);

        expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginScreen.getErrorMessage()).toContain(
            'Epic sadface: Username and password do not match any user in this service',
            'The error message is not as expected',
        );
    });
});
