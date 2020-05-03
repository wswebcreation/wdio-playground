import Base from './base';

const SCREEN_SELECTOR = '#checkout_summary_container';

class CheckoutPageTwo extends Base{
  constructor(){
    super(SCREEN_SELECTOR);
  }

  get screen() {
    return $(SCREEN_SELECTOR);
  }

  title(needle){
    return this.item(needle).$('.inventory_item_name');
  }

  description(needle){
    return this.item(needle).$('.inventory_item_desc');
  }

  price(needle){
    return this.item(needle).$('.inventory_item_price');
  }

  get cancelButton(){
    return $('.cart_cancel_link');
  }

  get finishButton(){
    return $('.cart_button');
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
   * Get the text of the cart
   *
   * @param {number|string} needle
   *
   * @return {string}
   */
  getSwagItemText(needle){
    return `${this.title(needle).getText()} ${this.description(needle).getText()} ${this.price(needle).getText()}`;
  }

  /**
   * Cancel checkout
   *
   * @return {void}
   */
  cancelCheckout(){
    return this.cancelButton.click();
  }

  /**
   * Finsh checkout
   *
   * @return {void}
   */
  finishCheckout(){
    return this.finishButton.click();
  }
}

export default new CheckoutPageTwo();
