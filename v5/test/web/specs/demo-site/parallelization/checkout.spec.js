import { PERSONAL_INFO } from '../../../../configs/e2eConstants';
import CartContent from '../../../page-objects/cart';
import CheckoutComplete from '../../../page-objects/checkoutComplete';
import CheckoutPageOne from '../../../page-objects/checkoutPageOne';
import CheckoutPageTwo from '../../../page-objects/checkoutPageTwo';

describe('Parallelization - Checkout', () => {
    // afterAll(() => browser.execute('sauce:job-name=Parallelization - Checkout 2-2'));
    beforeEach(() => {
        // Load the url
        browser.url('');

        // Set the storage
        // For some reason Firefox and internet explorer
        // don't accept the `browser.sessionStorage('DELETE');
        browser.execute('sessionStorage.setItem("session-username", "standard_user"); sessionStorage.setItem("cart-contents", "[0]")');
        browser.execute('sauce:context=Test Start')

        // Now got to the inventory page
        browser.url('/cart.html');
    });

    it('should validate that user can checkout', () => {
        CartContent.waitForIsDisplayed();
        CartContent.goToCheckout();

        // Submit personal info
        CheckoutPageOne.waitForIsDisplayed();
        CheckoutPageOne.submitPersonalInfo(PERSONAL_INFO.STANDARD);
        CheckoutPageTwo.waitForIsDisplayed();

        expect(CheckoutPageTwo.items.length).toEqual(1);

        // Finish it
        CheckoutPageTwo.finishCheckout();

        // Validate that the checkout was successful
        expect(CheckoutComplete.waitForIsDisplayed()).toEqual(
            true,
            'The amount of cart items is not equal to 1',
        );
    });

    afterEach(() => {
        browser.execute('sauce:context=Test Complete')
    });
});
