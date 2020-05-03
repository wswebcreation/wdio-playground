import AppHeaderPage from '../../../page-objects/AppHeaderPage';
import SwagOverviewPage from '../../../page-objects/SwagOverviewPage';
import LoginPage from "../../../page-objects/LoginPage";
import CartSummaryPage from "../../../page-objects/CartSummaryPage";
import MenuPage from "../../../page-objects/MenuPage";
import {setTestContext} from '../../../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../../../../configs/e2eConstants";

describe('Menu', () => {
    beforeEach(() => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
            products: [PRODUCTS.BACKPACK],
        });
        CartSummaryPage.waitForIsDisplayed();
        MenuPage.open();
    });

    it('should be able to the swag items overview page', () => {
        MenuPage.openInventoryList();

        expect(SwagOverviewPage.waitForIsDisplayed()).toEqual(
            true,
            'Swag Items overview page was not shown',
        );
    });

    it('should be able to open the about page', () => {
        MenuPage.openAboutPage();

        expect(CartSummaryPage.isDisplayed()).toEqual(
            false,
            'Swag Cart should not be shown anymore',
        );
    });

    it('should be able to log out', () => {
        MenuPage.logout();

        expect(LoginPage.waitForIsDisplayed()).toEqual(
            true,
            'Login is not shown',
        );
    });

    it('should be able to clear the cart', () => {
        expect(AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to nothing',
        );

        MenuPage.restAppState();

        expect(AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );
    });
});
