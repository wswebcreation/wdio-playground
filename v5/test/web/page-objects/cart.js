import Base from './base';

const SCREEN_SELECTOR = '#cart_contents_container';

class CartContent extends Base{
  constructor(){
    super(SCREEN_SELECTOR);
  }

  get screen() {
    return $(SCREEN_SELECTOR);
  }

  get checkoutButton(){
    return $('.checkout_button');
  }

  get continueShoppingButton(){
      return $('.checkout_button');
  }

  get items() {
    return $$('.cart_item');
  }

  /**
   * Get a cart Item based on a search string or a number of the visible items
   *
   * @param {number|string} needle
   *
   * @return the selected cart item
   */
  item(needle) {
    if (typeof needle === 'string') {
      return this.items.find(cartItem => cartItem.getText().includes(needle));
    }

    return this.items[ needle ];
  }

  /**
   * Get the text of the cart item text
   *
   * @param {number|string} needle
   *
   * @return {string}
   */
  getItemText(needle){
    return this.item(needle).getText();
  }

  /**
   * Remove an item from the cart
   *
   * @param {number|string} needle
   *
   * @return {void}
   */
  removeItem(needle){
    return this.item(needle).$('.remove-from-cart-button').click();
  }

  /**
   * Continue shopping
   *
   * @return {void}
   */
  continueShopping(){
    return this.continueShoppingButton.click();
  }

  /**
   * Go to the checkout process
   *
   * @return {void}
   */
  goToCheckout(){
    return this.checkoutButton.click();
  }
}

export default new CartContent();
