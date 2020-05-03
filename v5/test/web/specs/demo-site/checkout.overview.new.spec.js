import CheckoutPageTwo from '../../page-objects/checkoutPageTwo';

describe('Checkout overview with session storage', () => {
    it('should be to able to verify the checkout overview in the NEW flashy way with sessionStorage', () => {
        browser.url('');
        browser.execute('sessionStorage.clear()');

        // The real test execution
        // Speed the process up by setting the session storage
        browser.execute('sessionStorage.setItem("session-username", "standard_user"); sessionStorage.setItem("cart-contents", "[4,1,2]")');

        // Open the page
        browser.url('/checkout-step-two.html');
        CheckoutPageTwo.waitForIsDisplayed();

        // Now do the expectations
        expect(CheckoutPageTwo.items.length).toEqual(3);
        expect(CheckoutPageTwo.getSwagItemText(0)).toContain('Sauce Labs Backpack', 'Item text is not correct');
        expect(CheckoutPageTwo.getSwagItemText(1)).toContain('Sauce Labs Bolt T-Shirt', 'Item text is not correct');
        expect(CheckoutPageTwo.getSwagItemText(2)).toContain('Sauce Labs Onesie', 'Item text is not correct');
    });
});
