import Base from './base';
import { getTextOfElement } from '../helpers/utils';
import Gestures from '../helpers/Gestures';

const SCREEN_SELECTOR = '~test-CHECKOUT: OVERVIEW';

class CheckoutPageTwo extends Base{
  constructor(){
    super(SCREEN_SELECTOR);
  }

  get screen() {
    return $(SCREEN_SELECTOR);
  }

  get cancelButton(){
    return $('~test-CANCEL');
  }

  get finishButton(){
    return $('~test-FINISH');
  }

  get swagItems() {
    return $$('~test-Item');
  }

  /**
   * Get a cart Item based on a search string or a number of the visible items
   *
   * @param {number|string} needle
   *
   * @return the selected cart item
   */
  swagItem(needle) {
    if (typeof needle === 'string') {
      return this.swagItems.find(cartItem => getTextOfElement(cartItem).includes(needle));
    }

    return this.swagItems[ needle ];
  }

  /**
   * Get the text of the cart
   *
   * @param {number} needle
   *
   * @return {string}
   */
  getSwagItemText(needle){
    const elm = this.swagItems[ needle ].$('~test-Description');
    Gestures.scrollDownToElement(elm);

    return getTextOfElement(elm);
  }

  /**
   * Cancel checkout
   *
   * @return {void}
   */
  cancelCheckout(){
    Gestures.scrollDownToElement(this.cancelButton, 2);

    return this.cancelButton.click();
  }

  /**
   * Finsh checkout
   *
   * @return {void}
   */
  finishCheckout(){
    Gestures.scrollDownToElement(this.finishButton, 2);

    return this.finishButton.click();
  }
}

export default new CheckoutPageTwo();
