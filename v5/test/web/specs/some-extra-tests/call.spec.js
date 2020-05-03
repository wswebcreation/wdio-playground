import LoginScreen from '../../page-objects/login';
import { SAUCE_DEMO_URL } from '../../../configs/e2eConstants';

describe('browser.call', () => {
    beforeAll(() => {
        if (browser.config.services.includes('sauce')) {
            browser.execute('sauce:job-name=browser.call');
        }
    });

    beforeEach(() => {
        browser.url(SAUCE_DEMO_URL);
        LoginScreen.waitForIsDisplayed();
    });

    it('should be to run a script with a promise chain', () => {
        // log the time start
        if (browser.config.services.includes('sauce')) {
            browser.execute('sauce:context=Timer start');
        }
        const date1 = new Date();

        return timout().then(() => {
            const date2 = new Date();
            const diff = date2 - date1;

            // log the time end
            if (browser.config.services.includes('sauce')) {
                return browser.execute(`sauce:context=Timer stoped and it took ${ diff } milliseconds.`);
            }

            console.log(`Timer stoped and it took ${ diff } milliseconds.`)
        });
    });

    it('should be to run a script with browser.call', () => {
        // log the time start
        if (browser.config.services.includes('sauce')) {
            browser.execute('sauce:context=Timer start');
        }
        const date1 = new Date();

        browser.call(timout);

        const date2 = new Date();
        const diff = date2 - date1;

        // log the time end
        if (browser.config.services.includes('sauce')) {
            browser.execute(`sauce:context=Timer stoped and it took ${ diff } milliseconds.`);
        }

        console.log(`Timer stoped and it took ${ diff } milliseconds.`)
    });
});

/**
 * A simple function to mimic a promis
 *
 * @return {Promise<void>}
 */
function timout() {
    return new Promise(resolve => setTimeout(() => resolve(), 5000));
}
