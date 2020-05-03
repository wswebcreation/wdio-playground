import LoginScreen from '../../page-objects/login';
import { LOGIN_USERS, PERSONAL_INFO } from '../../../configs/e2eConstants';
import InventoryListScreen from '../../page-objects/inventoryList';
import AppHeader from '../../page-objects/appHeader';
import CartContent from '../../page-objects/cart';
import CheckoutPageOne from '../../page-objects/checkoutPageOne';
import CheckoutPageTwo from '../../page-objects/checkoutPageTwo';

describe('Checkout overview old fashion way', () => {
    it('should be to able to verify the checkout overview in the old fashion way', () => {
        browser.url('');

        // The real test execution
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        InventoryListScreen.waitForIsDisplayed();
        InventoryListScreen.addSwagItemToCart(0);
        InventoryListScreen.addSwagItemToCart(2);
        InventoryListScreen.addSwagItemToCart(4);

        expect(AppHeader.getCartAmount()).toEqual('3');

        AppHeader.openCart();
        CartContent.waitForIsDisplayed();
        CartContent.goToCheckout();
        CheckoutPageOne.waitForIsDisplayed();
        CheckoutPageOne.submitPersonalInfo(PERSONAL_INFO.STANDARD);
        CheckoutPageTwo.waitForIsDisplayed();

        expect(CheckoutPageTwo.items.length).toEqual(3);
        expect(CheckoutPageTwo.getSwagItemText(0)).toContain('Sauce Labs Backpack', 'Item text is not correct');
        expect(CheckoutPageTwo.getSwagItemText(1)).toContain('Sauce Labs Bolt T-Shirt', 'Item text is not correct');
        expect(CheckoutPageTwo.getSwagItemText(2)).toContain('Sauce Labs Onesie', 'Item text is not correct');
    });
});
