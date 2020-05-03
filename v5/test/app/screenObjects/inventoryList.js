import { getTextOfElement } from '../helpers/utils';
import Base from './base';
import Gestures from '../helpers/Gestures';

const SCREEN_SELECTOR = 'test-PRODUCTS';
const SWAG_ITEM_SELECTOR = 'test-Item';
const TOGGLE_SELECTOR = 'test-Toggle';
const DESCRIPTION_SELECTOR = 'test-Item description';

class InventoryListScreen extends Base {
  constructor() {
    super(`~${ SCREEN_SELECTOR }`);
  }

  get screen() {
    return $(`~${ SCREEN_SELECTOR }`);
  }

  get swagItems() {
    return $$(`~${ SWAG_ITEM_SELECTOR }`);
  }

  get toggle() {
    return $(`~${ TOGGLE_SELECTOR }`);
  }

  /**
   * Get a swag Item based on a search string
   * By default the scroll is down, but can also be up
   *
   * @param {string} needle
   * @param {boolean} scrollUp
   *
   * @return the selected swagItem
   */
  swagItem(needle, scrollUp = false) {
    return this.findParentElementByText(SWAG_ITEM_SELECTOR, needle, scrollUp);
  }

  /**
   * Get the label text of the swag item, the needle needs to be of the shown swag item in the screen
   *
   * @param {number} needle
   *
   * @return {string}
   */
  getSwagItemLabelText(needle) {
    const elm = this.swagItems[ needle ].$('~test-Item title');
    Gestures.scrollDownToElement(elm);

    return getTextOfElement(elm);
  }

  /**
   * Add a swag items to the cart
   *
   * @param {string} needle
   *
   * @return {void}
   */
  addSwagItemToCart(needle) {
    const swagItem = this.swagItem(needle);
    Gestures.scrollDownToElement(swagItem.$('~test-ADD TO CART'), 10);

    return swagItem.$('~test-ADD TO CART').click();
  }

  /**
   * Remove a swag items from the cart
   *
   * @param {string} needle
   *
   * @return {void}
   */
  removeSwagItemFromCart(needle) {
    const swagItem = this.swagItem(needle);
    Gestures.scrollDownToElement(swagItem.$('~test-REMOVE'), 10);

    return swagItem.$('~test-REMOVE').click();
  }

  /**
   * Open the details of a swag item.
   * By default the scroll is down, but can also be up
   *
   * @param {string} needle
   * @param {boolean} scrollUp
   *
   * @return {void}
   */
  openSwagItemDetails(needle, scrollUp = false) {
    return this.swagItem(needle, scrollUp).click();
  }

  /**
   * Toggle the layout
   *
   * @return {void}
   */
  toggleLayout() {
    this.toggle.click();
    return driver.pause(500);
  }

  /**
   * Check if the the layout is a row layout
   *
   * @return {boolean}
   */
  isRowLayout() {
    try {
      return this.swagItems[ 0 ].$(`~${ DESCRIPTION_SELECTOR }`).isDisplayed();
    } catch (e) {
      return false;
    }
  }

  /**
   * Check if the the layout is a grid layout
   *
   * @return {boolean}
   */
  isGridLayout() {
    return !this.isRowLayout();
  }

  /**
   * Find a swag item container element based on text.
   * This is a very heavy methods because it uses XPATH
   * By default the scroll is down, but can also be up
   *
   * @param {string} selector
   * @param {string} needle
   * @param {boolean} scrollUp
   * @param {number} maxScrolls
   *
   * @return {Element}
   */
  findParentElementByText(selector, needle, scrollUp = false, maxScrolls = 10) {
    for (let i = 0; i < maxScrolls; i++) {
      const xpathSelector = driver.isIOS ?
        `//XCUIElementTypeStaticText[contains(@value,'${ needle }')]//ancestor::*[@name="${ selector }"]` :
        `//android.widget.TextView[contains(@text,'${ needle }')]//ancestor::*[@content-desc='${ selector }']`;
      const elm = $(xpathSelector);

      if (driver.isIOS ? elm.isDisplayed() : elm.isExisting()) {
        return elm;
      }

      if (scrollUp) {
        Gestures.swipeDown(0.50);
      } else {
        Gestures.swipeUp(0.50);
      }
    }
  }
}

export default new InventoryListScreen();
