import { LOGIN_USERS } from '../../../configs/e2eConstants';
import LoginScreen from '../../page-objects/login';
import InventoryListScreen from '../../page-objects/inventoryList';

describe('Functional tests', () => {
    beforeEach(() => {
        // Load the url
        browser.url('');
    });

    afterEach(() => {
        // For some reason Firefox and internet explorer
        // don't accept the `browser.sessionStorage('DELETE');`
        browser.execute('sessionStorage.clear()');
    });

    it('should be able to login with style', () => {
        // The real test execution
        LoginScreen.signIn(LOGIN_USERS.STANDARD);

        // Add something in the cart
        InventoryListScreen.waitForIsDisplayed();
    });

    it('should be able to login without style', () => {
        removeCSS();

        // The real test execution
        LoginScreen.signIn(LOGIN_USERS.STANDARD);

        removeCSS();
        // Add something in the cart
        InventoryListScreen.waitForIsDisplayed();
    });
});

function removeCSS() {
    browser.execute('var element = document.querySelector(\'link, [href="css/sample-app-web.css"]\');element.parentNode.removeChild(element);')
    browser.pause(1000);
}
