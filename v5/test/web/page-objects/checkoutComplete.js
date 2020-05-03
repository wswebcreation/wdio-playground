import Base from './base';

const SCREEN_SELECTOR = '#checkout_complete_container';

class CheckoutComplete extends Base{
  constructor(){
    super(SCREEN_SELECTOR);
  }

  get screen() {
    return $(SCREEN_SELECTOR);
  }
}

export default new CheckoutComplete();
