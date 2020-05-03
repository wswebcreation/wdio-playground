import Base from './base';
import { DEFAULT_TIMEOUT } from '../../configs/e2eConstants';

const SCREEN_SELECTOR = '#checkout_info_container';

class CheckoutPageOne extends Base {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    get screen() {
        return $(SCREEN_SELECTOR);
    }

    get cancelButton() {
        return $('.cart_cancel_link');
    }

    get continueCheckoutButton() {
        return $('.cart_button');
    }

    get firstName() {
        return $('[data-test="firstName"]');
    }

    get lastName() {
        return $('[data-test="lastName"]');
    }

    get postalCode() {
        return $('[data-test="postalCode"]');
    }

    get errorMessage() {
        return $('[data-test="error"]');
    }

    /**
     * Submit personal info
     *
     * @param {object} personalInfo
     * @param {string} personalInfo.firstName
     * @param {string} personalInfo.lastName
     * @param {string} personalInfo.postalCode
     */
    submitPersonalInfo(personalInfo) {
        const { firstName, lastName, zip } = personalInfo;

        this.waitForIsDisplayed();
        this.firstName.addValue(firstName);
        this.triggerOnChange('[data-test="firstName"]');
        this.lastName.addValue(lastName);
        this.triggerOnChange('[data-test="lastName"]');
        this.postalCode.addValue(zip);
        this.triggerOnChange('[data-test="postalCode"]');
        this.continueCheckoutButton.click();
    }

    /**
     * Get the text or the error message container
     *
     * @return {string}
     */
    getErrorMessage() {
        this.errorMessage.waitForVisible(DEFAULT_TIMEOUT);

        return this.errorMessage.getText();
    }

    /**
     * Check if the error message is displayed
     *
     * @return {boolean}
     */
    isErrorMessageDisplayed() {
        return this.errorMessage.isVisible();
    }

    /**
     * Cancel checkout
     *
     * @return {void}
     */
    cancelCheckout() {
        return this.cancelButton.click();
    }

    /**
     * Trigger the onChange on an element
     *
     * @param {string} selector the selector
     */
    triggerOnChange(selector) {
        if (browser.isIOS) {
            browser.execute((elementSelector) => {
                let input = document.querySelector(elementSelector);
                let lastValue = '';
                let event = new Event('input', { bubbles: true });
                let tracker = input._valueTracker;
                if (tracker) {
                    tracker.setValue(lastValue);
                }
                input.dispatchEvent(event);
            }, selector);
        }
    }
}

export default new CheckoutPageOne();
