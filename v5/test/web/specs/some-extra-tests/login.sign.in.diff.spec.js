import LoginScreen from '../../page-objects/login';
import InventoryListScreen from '../../page-objects/inventoryList';
import { LOGIN_USERS, SAUCE_DEMO_URL } from '../../../configs/e2eConstants';

describe('Sign in differences', () => {
    beforeAll(()=>{
        if (browser.config.services.includes('sauce')) {
            browser.execute('sauce:job-name=Sign in differences')
        }
    });

    beforeEach(()=>{
        browser.url(SAUCE_DEMO_URL);
    });

    it('should be able to login with setValue', () => {
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        InventoryListScreen.waitForIsDisplayed();

        expect(InventoryListScreen.isDisplayed()).toEqual(true, 'Inventory List screen was not shown');
    });

    it('should be able to login with addValue', () => {
        LoginScreen.signInAddValue(LOGIN_USERS.STANDARD);
        InventoryListScreen.waitForIsDisplayed();

        expect(InventoryListScreen.isDisplayed()).toEqual(true, 'Inventory List screen was not shown');
    });

    it('should be able to login like a real user', () => {
        LoginScreen.signInAsRealUser(LOGIN_USERS.STANDARD);
        InventoryListScreen.waitForIsDisplayed();

        expect(InventoryListScreen.isDisplayed()).toEqual(true, 'Inventory List screen was not shown');
    });
});
