import AppHeader from '../../../page-objects/appHeader';
import InventoryListScreen from '../../../page-objects/inventoryList';

describe('Parallelization - Inventory list', () => {
    // afterAll(() => browser.execute('sauce:job-name=Parallelization - Inventory list 2-2'));
    beforeEach(() => {
        // Load the url
        browser.url('');

        // Set the storage
        // For some reason Firefox and internet explorer
        // don't accept the `browser.sessionStorage('DELETE');
        browser.execute('sessionStorage.setItem("session-username", "standard_user")');

        // Now got to the inventory page
        browser.url('/inventory.html');
    });

    it('should validate that all products are present', () => {
        // Wait for the inventory screen and check it
        expect(InventoryListScreen.waitForIsDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
        expect(InventoryListScreen.swagItems.length).toEqual(
            6,
            'Amount of items was not equal to 6',
        );
    });

    it('should validate that a product can be added to a cart', () => {
        // Wait for the inventory screen and check it
        expect(InventoryListScreen.waitForIsDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
        expect(AppHeader.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        // Add an item to the cart
        InventoryListScreen.addSwagItemToCart(0);
        expect(AppHeader.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
    });
});
