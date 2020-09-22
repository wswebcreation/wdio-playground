import Base from './base';
import {DEFAULT_TIMEOUT} from '../../configs/e2eConstants';

const SCREEN_SELECTOR = '~test-ALL ITEMS';

class Menu extends Base {
    constructor() {
        // The `all items` is used for that because there is no other way to determine that
        // the menu container
        super(SCREEN_SELECTOR);
    }

    get button() {
        return $('~test-Menu');
    }

    get allItems() {
        return $(SCREEN_SELECTOR);
    }

    get webview() {
        return $('~test-WEBVIEW');
    }

    get about() {
        return $('~test-ABOUT');
    }

    get logout() {
        return $('~test-LOGOUT');
    }

    get resetAppState() {
        return $('~test-RESET APP STATE');
    }

    /**
     * Open the menu
     *
     * @return {void}
     */
    open() {
        // Open the menu
        this.button.click();

        return this.waitUntilOpened();
    }

    /**
     * Check if the menu is open
     *
     * @return {boolean}
     */
    isOpen() {
        return this.isShown();
    }

    /**
     * Wait until the menu is closed
     *
     * @return {void}
     */
    waitUntilClosed() {
        return driver.waitUntil(
            () => !this.isShown(),
            {
                timeout: DEFAULT_TIMEOUT,
            },
        );
    }

    /**
     * Wait until the menu is opened
     *
     * @return {void}
     */
    waitUntilOpened() {
        return driver.waitUntil(
            () => this.isShown(),
            {
                timeout: DEFAULT_TIMEOUT,
            },
        );
    }

    /**
     * Close the menu
     *
     * @return {void}
     */
    close() {
        this.button.click();

        return this.waitUntilClosed();
    }

    /**
     * Click on the all items menu item
     *
     * @return {void}
     */
    openAllItems() {
        this.allItems.click();

        return this.waitUntilClosed();
    }

    /**
     * Click on the webview menu item
     *
     * @return {void}
     */
    openWebview() {
        this.webview.click();

        return this.waitUntilClosed();
    }

    /**
     * Click on the about menu item
     *
     * @return {void}
     */
    openAbout() {
        return this.about.click();
    }

    /**
     * Click on the logout menu item
     *
     * @return {void}
     */
    clickOnLogout() {
        this.logout.click();

        return this.waitUntilClosed();
    }

    /**
     * Click on the reset menu item
     *
     * @return {void}
     */
    clickOnReset() {
        this.resetAppState.click();

        return this.waitUntilClosed();
    }

}

export default new Menu();
