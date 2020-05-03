import InventoryListScreen from '../../../page-objects/inventoryList';
import AppHeader from '../../../page-objects/appHeader';
import { argv } from 'yargs';
import LoginScreen from '../../../page-objects/login'
import { LOGIN_USERS } from '../../../../configs/e2eConstants'

describe(`Performance - Inventory page${ argv.perf ? ' - perf' : '' }`, () => {

    it(`should be to able to verify the cart content in the old fashion way${ argv.perf ? ' - perf' : '' }`, () => {
        browser.url('');
        // if (argv.perf) {
        //     browser.execute(
        //         'sauce:intercept', {
        //             'url': 'https://www.saucedemo.com/img/sauce-backpack-1200x1500.jpg',
        //             'redirect': 'https://inkagency.com/wp-content/uploads/2017/08/INK_2017_Case-Study_04_Sauce-Labs_02.jpg'
        //         }
        //     );
        //     browser.execute(
        //         'sauce:intercept', {
        //             'url': 'https://www.saucedemo.com/img/bolt-shirt-1200x1500.jpg',
        //             'redirect': 'https://inkagency.com/wp-content/uploads/2017/08/INK_2017_Case-Study_04_Sauce-Labs_03.jpg'
        //         }
        //     );
        //     browser.execute(
        //         'sauce:intercept', {
        //             'url': 'https://www.saucedemo.com/img/red-onesie-1200x1500.jpg',
        //             'redirect': 'https://inkagency.com/wp-content/uploads/2017/08/INK_2017_Case-Study_04_Sauce-Labs_06.jpg'
        //         }
        //     );
        //     browser.execute(
        //         'sauce:intercept', {
        //             'url': 'https://www.saucedemo.com/img/bike-light-1200x1500.jpg',
        //             'redirect': 'https://inkagency.com/wp-content/uploads/2017/08/INK_2017_Case-Study_04_Sauce-Labs_07.jpg'
        //         }
        //     );
        //     browser.execute(
        //         'sauce:intercept', {
        //             'url': 'https://www.saucedemo.com/img/sauce-pullover-1200x1500.jpg"',
        //             'redirect': 'https://inkagency.com/wp-content/uploads/2017/08/INK_2017_Case-Study_04_Sauce-Labs_08.jpg'
        //         }
        //     );
        //     browser.execute(
        //         'sauce:intercept', {
        //             'url': 'https://www.saucedemo.com/img/red-tatt-1200x1500.jpg',
        //             'redirect': 'https://inkagency.com/wp-content/uploads/2017/08/INK_2017_Case-Study_04_Sauce-Labs_09.jpg'
        //         }
        //     );
        // }
        LoginScreen.signInAddValue(argv.perf ? LOGIN_USERS.PERFORMANCE : LOGIN_USERS.STANDARD);
        InventoryListScreen.waitForIsDisplayed();
        InventoryListScreen.addSwagItemToCart(0);
        InventoryListScreen.addSwagItemToCart(2);
        InventoryListScreen.addSwagItemToCart(4);

        expect(AppHeader.getCartAmount()).toEqual('3');
    });
});


