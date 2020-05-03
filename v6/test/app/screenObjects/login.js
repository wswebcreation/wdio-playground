import { getTextOfElement } from '../helpers/utils';
import Base from './base';
import { DEFAULT_TIMEOUT } from '../../configs/e2eConstants';

const SCREEN_SELECTOR = '~test-Login';

class LoginScreen extends Base {
  constructor() {
    super(SCREEN_SELECTOR);
  }

  get screen() {
    return $(SCREEN_SELECTOR);
  }

  get username() {
    return $('~test-Username');
  }

  get password() {
    return $('~test-Password');
  }

  get loginButton() {
    return $('~test-LOGIN');
  }

  get errorMessage() {
    return $('~test-Error message');
  }

  /**
   * Sign in
   *
   * @param {object} userDetails
   * @param {string} userDetails.username
   * @param {string} userDetails.password
   */
  signIn(userDetails) {
    const { password, username } = userDetails;

    if (username !== '') {
      this.username.addValue(username);
    }
    if (password !== '') {
      this.password.addValue(password);
    }

    this.loginButton.click();
  }

  /**
   * Get the text or the error message container
   *
   * @return {string}
   */
  getErrorMessage() {
    this.errorMessage.waitForDisplayed(DEFAULT_TIMEOUT);

    return getTextOfElement(this.errorMessage);
  }

  /**
   * Check if the error message is displayed
   *
   * @return {boolean}
   */
  isErrorMessageIsShown() {
    return this.isShown(this.errorMessage);
  }
}

export default new LoginScreen();
