import Base from './base';

const SCREEN_SELECTOR = '~Selector container';

class SortingModal extends Base{
  constructor () {
    super(SCREEN_SELECTOR);
  }

  get screen() {
    // Can only get the modal based on the second option
    return $(SCREEN_SELECTOR);
  }

  get sortingButton() {
    return $('~test-Modal Selector Button');
  }

  get cancel() {
    const selector = driver.isIOS ? '~Cancel' : '//*[@content-desc="Selector container"]/../../*[2]';

    return $(selector);
  }

  /**
   * Select an option
   *
   * @param {string} option
   *
   * @return {void}
   */
  selectOption(option){
    let selector;

    switch (option) {
      case 'Name (A to Z)':
        selector = driver.isIOS ? '~Name (A to Z)' : '//*[@content-desc="Selector container"]/*/android.view.ViewGroup[2]';
        break;
      case 'Name (Z to A)':
        selector = driver.isIOS ? '~Name (Z to A)' : '//*[@content-desc="Selector container"]/*/android.view.ViewGroup[3]';
        break;
      case 'Price (low to high)':
        selector = driver.isIOS ? '~Price (low to high)' : '//*[@content-desc="Selector container"]/*/android.view.ViewGroup[4]';
        break;
      case 'Price (high to low)':
        selector = driver.isIOS ? '~Price (high to low)' : '//*[@content-desc="Selector container"]/*/android.view.ViewGroup[5]';
        break;
      default:
        throw new Error(`The option '${option}' is not valid`);
    }

    $(selector).click();
    // There is a sorting delay, this can only be done with a hard sleep :(
    return driver.pause(750);
  }

  /**
   * Open the sorting modal
   *
   * @return {boolean}
   */
  openSortingModal() {
    this.sortingButton.click();
    return this.waitForIsShown();
  }
}

export default new SortingModal();
