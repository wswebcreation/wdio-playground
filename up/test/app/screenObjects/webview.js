import Base from './base';
import {getTextOfElement} from '../helpers/utils';
import {DEFAULT_TIMEOUT} from '../../configs/e2eConstants';

export const CONTEXT_REF = {
    NATIVE: 'native',
    WEBVIEW: 'webview',
};
const DOCUMENT_READY_STATE = {
    COMPLETE: 'complete',
    INTERACTIVE: 'interactive',
    LOADING: 'loading',
};
const SCREEN_SELECTOR = '~test-WEBVIEW';

class Webview extends Base {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    get input() {
        return $('~test-enter a https url here...');
    }

    get go() {
        return $('~test-GO TO SITE');
    }

    get errorMessage() {
        return $('~test-Error message');
    }

    /**
     * Wait for the webview context to be loaded
     *
     * By default you have `NATIVE_APP` as the current context. If a webview is loaded it will be
     * added to the current contexts and will looks something like this
     * `["NATIVE_APP","WEBVIEW_28158.2"]`
     * The number behind `WEBVIEW` can be any string
     */
    waitForWebViewContextLoaded() {
        driver.waitUntil(
            () => {
                const currentContexts = this.getCurrentContexts();

                return currentContexts.length > 1 &&
                    currentContexts.find(context => context.toLowerCase().includes(CONTEXT_REF.WEBVIEW));
            },
            {
                timeout: 15000,
                timeoutMsg: 'Webview context not loaded',
                interval: 100,
            }
        );
    }

    /**
     * Switch to native or webview context
     *
     * @param {string} context should be native of webview
     */
    switchToContext(context) {
        driver.switchContext(this.getCurrentContexts()[context === CONTEXT_REF.WEBVIEW ? 1 : 0]);
    }

    /**
     * Returns an object with the list of all available contexts
     *
     * @return {object} An object containing the list of all available contexts
     */
    getCurrentContexts() {
        return driver.getContexts();
    }

    /**
     * Wait for the document to be full loaded
     */
    waitForDocumentFullyLoaded() {
        driver.waitUntil(
            () => driver.execute(() => document.readyState) === DOCUMENT_READY_STATE.COMPLETE,
            {
                timeout: 15000,
                timeoutMsg: 'Website not loaded',
                interval: 100,
            }
        );
    }

    /**
     * Wait for the website in the webview to be loaded
     */
    waitForWebsiteLoaded() {
        this.waitForWebViewContextLoaded();
        this.switchToContext(CONTEXT_REF.WEBVIEW);
        this.waitForDocumentFullyLoaded();
        this.switchToContext(CONTEXT_REF.NATIVE);
    }

    /**
     * Submit the url
     *
     * @param {string} url
     */
    submitURL(url) {
        this.input.addValue(url);

        return this.go.click();
    }

    /**
     * Get the text or the error message container
     *
     * @return {string}
     */
    getErrorMessage() {
        this.errorMessage.waitForDisplayed({timeout: DEFAULT_TIMEOUT});

        return getTextOfElement(this.errorMessage);
    }
}

export default new Webview();
