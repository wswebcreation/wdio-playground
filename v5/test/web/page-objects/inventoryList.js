import Base from './base';

const SCREEN_SELECTOR = '.inventory_list';

class InventoryListScreen extends Base{
    constructor () {
        super(SCREEN_SELECTOR);
    }

    get screen() {
        return $(SCREEN_SELECTOR);
    }

    get swagItems() {
        return $$('.inventory_item');
    }

    /**
     * Get a swag Item based on a search string or a number of the visible items
     *
     * @param {number|string} needle
     *
     * @return {Element} the selected swagItem
     */
    swagItem(needle) {
        if (typeof needle === 'string') {
            return this.swagItems.find(swagItem => swagItem.getText().includes(needle));
        }

        return this.swagItems[ needle ];
    }

    /**
     * Get the text of the swag item text
     *
     * @param {number|string} needle
     *
     * @return {string}
     */
    getSwagItemText(needle){
        return this.swagItem(needle).getText();
    }

    /**
     * Add a swag items to the cart
     *
     * @param {number|string} needle
     *
     * @return {void}
     */
    addSwagItemToCart(needle){
        return this.swagItem(needle).$('.btn_primary.btn_inventory').click();
    }

    /**
     * Remove a swag items from the cart
     *
     * @param {number|string} needle
     *
     * @return {void}
     */
    removeSwagItemFromCart(needle){
        return this.swagItem(needle).$('.btn_secondary.btn_inventory').click();
    }

    /**
     * Open the details of a swag item
     *
     * @param needle
     *
     * @return {void}
     */
    openSwagItemDetails(needle){
        return this.swagItem(needle).click();
    }
}

export default new InventoryListScreen();
