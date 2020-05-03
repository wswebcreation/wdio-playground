import LoginScreen from '../../page-objects/login';
import { LOGIN_USERS, PERSONAL_INFO } from '../../../configs/e2eConstants';
import InventoryListScreen from '../../page-objects/inventoryList';
import AppHeader from '../../page-objects/appHeader';
import CartContent from '../../page-objects/cart';
import CheckoutPageOne from '../../page-objects/checkoutPageOne';
import CheckoutPageTwo from '../../page-objects/checkoutPageTwo';

describe('browser.sessionStorage', () => {
    beforeEach(() => {
        browser.url('');
        browser.execute('sessionStorage.clear()');
    });

    it('should be to able to verify the cart content in the old fashion way', () => {
        // log the time start
        if(browser.config.services.includes('sauce')) {
            browser.execute('sauce:context=Timer start');
        } else {
            console.log('\nTimer start\n')
        }
        const date1 = new Date();

        // The real test execution
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

        // End of execution

        const date2 = new Date();
        const diff = date2 - date1;
        if(browser.config.services.includes('sauce')) {
            browser.execute(`sauce:context=Timer stopped and it took ${ diff } milliseconds.`);
        } else {
            console.log(`\nTimer stopped and it took ${ diff } milliseconds.\n`)
        }
    });

    it('should be to able to verify the cart content in the NEW flashy way with sessionStorage', () => {
        // log the time start
        if(browser.config.services.includes('sauce')) {
            browser.execute('sauce:context=Timer start');
        } else {
            console.log('\nTimer start\n')
        }
        const date1 = new Date();

        // The real test execution
        LoginScreen.waitForIsDisplayed();

        // Speed the process up by setting the session storage
        // browser.setSessionStorage('cart-contents', '[4,1,2]');
        browser.execute('sessionStorage.setItem("cart-contents", "[4,1,2]")');

        // Open the page
        browser.url('/cart.html');
        CartContent.waitForIsDisplayed();

        // Now do the expectations
        expect(CartContent.items.length).toEqual(3);
        expect(CartContent.getItemText(0)).toContain('Sauce Labs Backpack', 'Item text is not correct');
        expect(CartContent.getItemText(1)).toContain('Sauce Labs Bolt T-Shirt', 'Item text is not correct');
        expect(CartContent.getItemText(2)).toContain('Sauce Labs Onesie', 'Item text is not correct');

        // End of execution

        const date2 = new Date();
        const diff = date2 - date1;
        // if(browser.config.services.includes('sauce')) {
        //     browser.execute(`sauce:context=Timer stopped and it took ${ diff } milliseconds.`);
        // } else {
        //     console.log(`\nTimer stopped and it took ${ diff } milliseconds.\n`)
        // }
    });

    it('should be to able to verify the checkout overview in the old fashion way', () => {
        // log the time start
        // if(browser.config.services.includes('sauce')) {
        //     browser.execute('sauce:context=Timer start');
        // } else {
        //     console.log('\nTimer start\n')
        // }
        const date1 = new Date();

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

        // End of execution

        const date2 = new Date();
        const diff = date2 - date1;
        // if(browser.config.services.includes('sauce')) {
        //     browser.execute(`sauce:context=Timer stopped and it took ${ diff } milliseconds.`);
        // } else {
        //     console.log(`\nTimer stopped and it took ${ diff } milliseconds.\n`)
        // }
    });

    it('should be to able to verify the checkout overview in the NEW flashy way with sessionStorage', () => {
        // log the time start
        // if(browser.config.services.includes('sauce')) {
        //     browser.execute('sauce:context=Timer start');
        // } else {
        //     console.log('\nTimer start\n')
        // }
        const date1 = new Date();

        // The real test execution
        // Speed the process up by setting the session storage
        // browser.setSessionStorage('cart-contents', '[4,1,2]');
        browser.execute('sessionStorage.setItem("cart-contents", "[4,1,2]")');

        // Open the page
        browser.url('/checkout-step-two.html');
        CheckoutPageTwo.waitForIsDisplayed();

        // Now do the expectations
        expect(CheckoutPageTwo.items.length).toEqual(3);
        expect(CheckoutPageTwo.getSwagItemText(0)).toContain('Sauce Labs Backpack', 'Item text is not correct');
        expect(CheckoutPageTwo.getSwagItemText(1)).toContain('Sauce Labs Bolt T-Shirt', 'Item text is not correct');
        expect(CheckoutPageTwo.getSwagItemText(2)).toContain('Sauce Labs Onesie', 'Item text is not correct');

        // End of execution

        const date2 = new Date();
        const diff = date2 - date1;
        // if(browser.config.services.includes('sauce')) {
        //     browser.execute(`sauce:context=Timer stopped and it took ${ diff } milliseconds.`);
        // } else {
        //     console.log(`\nTimer stopped and it took ${ diff } milliseconds.\n`)
        // }
    });
});
