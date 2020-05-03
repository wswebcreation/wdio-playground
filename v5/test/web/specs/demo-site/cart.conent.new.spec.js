import LoginScreen from '../../page-objects/login';
import CartContent from '../../page-objects/cart';

describe('Cart content with sessionStorage', () => {
    beforeEach(() => {
        browser.url('');
        browser.execute('sessionStorage.clear()');

        LoginScreen.waitForIsDisplayed();

        // Speed the process up by setting the session storage
        browser.execute('sessionStorage.setItem("session-username", "standard_user"); sessionStorage.setItem("cart-contents", "[4,1,2]")');
    });

    it('should be to able to verify the cart content in the NEW flashy way with sessionStorage', () => {
        // Open the page
        browser.url('/cart.html');
        CartContent.waitForIsDisplayed();

        // Now do the expectations
        expect(CartContent.items.length).toEqual(3);
        expect(CartContent.getItemText(0)).toContain('Sauce Labs Backpack', 'Item text is not correct');
        expect(CartContent.getItemText(1)).toContain('Sauce Labs Bolt T-Shirt', 'Item text is not correct');
        expect(CartContent.getItemText(2)).toContain('Sauce Labs Onesie', 'Item text is not correct');
    });
});


