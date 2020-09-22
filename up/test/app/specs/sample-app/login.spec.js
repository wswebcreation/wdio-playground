import LoginScreen from '../../screenObjects/login';
import InventoryListScreen from '../../screenObjects/inventoryList';
import {restartApp} from '../../helpers/utils';
import {LOGIN_USERS} from '../../../configs/e2eConstants';

describe('Login', () => {
    beforeEach(() => {
        restartApp();
        LoginScreen.waitForIsShown();
    });

    fit('should be able to login with a standard user', () => {
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        expect(InventoryListScreen.isShown()).toEqual(true, 'Inventory List screen was not shown');
    });

    it('should not be able to login with a locked user', () => {
        LoginScreen.signIn(LOGIN_USERS.LOCKED);

        expect(LoginScreen.getErrorMessage()).toContain('Sorry, this user has been locked out.', 'The error message is not as expected');
    });

    it('should show an error when no username is provided', () => {
        LoginScreen.signIn(LOGIN_USERS.NO_USER_DETAILS);

        expect(LoginScreen.getErrorMessage()).toContain('Username is required', 'The error message is not as expected');
    });

    it('should show an error when no password is provided', () => {
        LoginScreen.signIn(LOGIN_USERS.NO_PASSWORD);

        expect(LoginScreen.getErrorMessage()).toContain('Password is required', 'The error message is not as expected');
    });

    it('should show an error when no match is found', () => {
        LoginScreen.signIn(LOGIN_USERS.NO_MATCH);

        expect(LoginScreen.getErrorMessage()).toContain('Username and password do not match any user in this service.', 'The error message is not as expected');
    });
});
