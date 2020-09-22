import Base from './base';
import Gestures from '../helpers/Gestures';

const SCREEN_SELECTOR = '~test-CHECKOUT: COMPLETE!';

class CheckoutComplete extends Base{
  constructor(){
    super(SCREEN_SELECTOR);
  }

  get screen() {
    return $(SCREEN_SELECTOR);
  }

  get continuesShoppingButton(){
    return $('~test-BACK HOME');
  }

  /**
   * Continue shopping by scrolling to the button and click on it.
   * The button is not visible on all screens
   */
  continueShopping(){
    Gestures.scrollDownToElement(this.continuesShoppingButton, 4);

    return this.continuesShoppingButton.click();
  }
}

export default new CheckoutComplete();
