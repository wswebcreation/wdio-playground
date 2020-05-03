import LoginScreen from '../../page-objects/login';
import { LOGIN_USERS } from '../../../configs/e2eConstants';
import InventoryListScreen from '../../page-objects/inventoryList';
import AppHeader from '../../page-objects/appHeader';
import CartContent from '../../page-objects/cart';

describe('Cart content old fashion way', () => {

    it('should be to able to verify the cart content in the old fashion way', () => {
        browser.url('');
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        InventoryListScreen.waitForIsDisplayed();
        InventoryListScreen.addSwagItemToCart(0);
        InventoryListScreen.addSwagItemToCart(2);
        InventoryListScreen.addSwagItemToCart(4);

        expect(AppHeader.getCartAmount()).toEqual('3');

        AppHeader.openCart();

        expect(CartContent.items.length).toEqual(3);
        expect(CartContent.getItemText(0)).toContain('Sauce Labs Backpack', 'Item text is not correct');
        expect(CartContent.getItemText(1)).toContain('Sauce Labs Bolt T-Shirt', 'Item text is not correct');
        expect(CartContent.getItemText(2)).toContain('Sauce Labs Onesie', 'Item text is not correct');
    });
});


