import { getTextOfElement } from '../helpers/utils';

class AppHeader {
  get cart() {
    return $('~test-Cart');
  }

  /**
   * Get the cart amount
   *
   * @return {string}
   */
  getCartAmount(){
    // There is a little delay in adding / removing data from the cart
    driver.pause(100);

    return getTextOfElement(this.cart);
  }

  /**
   * Open the cart
   *
   * @return {void}
   */
  openCart(){
    return this.cart.click();
  }
}

export default new AppHeader();
