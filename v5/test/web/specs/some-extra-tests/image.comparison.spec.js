// import fileExists from '../../../helpers'
//
// describe('wdio-image-comparison-service', () => {
//     const browserName = 'googlechrome';
//     const resolution = '1366x768';
//
//     beforeEach(() => {
//         browser.url('https://wswebcreation.github.io/protractor-image-comparison/');
//         browser.pause(500);
//     });
//
//     // Chrome remembers the last postion when the url is loaded again, this will reset it.
//     afterEach(() => browser.execute('window.scrollTo(0, 0);', []));
//
//     describe('save methods', () => {
//         it('should do a save screen', () => {
//             const tag = 'examplePage';
//             const imageData = browser.saveScreen('examplePage', { empty: null });
//             const filePath = `${ imageData.path }/${ tag }-${ browserName }-${ resolution }.png`;
//
//             expect(fileExists(filePath)).toBe(true, `File : "${ filePath }" could not be found`);
//         });
//
//         it('should do a save element', () => {
//             const tag = 'firstButtonElement';
//             const imageData = browser.saveElement($('.uk-button:nth-child(1)'), tag, { empty: null });
//             const filePath = `${ imageData.path }/${ tag }-${ browserName }-${ resolution }.png`;
//
//             expect(fileExists(filePath)).toBe(true, `File : "${ filePath }" could not be found`);
//         });
//
//         it('should save a fullpage screenshot', () => {
//             const tag = 'fullPage';
//             const imageData = browser.saveFullPageScreen(tag, { fullPageScrollTimeout: '1500' });
//             const filePath = `${ imageData.path }/${ tag }-${ browserName }-${ resolution }.png`;
//
//             expect(fileExists(filePath)).toBe(true, `File : "${ filePath }" could not be found`);
//         });
//     });
//
//     describe('check methods', () => {
//         it('should fail comparing with a baseline', () => {
//             const tag = 'examplePageFail';
//
//             browser.execute('arguments[0].innerHTML = "Test Demo Page";', $('h1.uk-heading-large'));
//             expect(browser.checkScreen(tag)).toBeGreaterThan(0);
//         });
//
//         it('should compare successful with a baseline', () => {
//             expect(browser.checkScreen('check-screen')).toEqual(0);
//         });
//
//         it('should compare an element successful with a baseline', () => {
//             expect(browser.checkElement($('.uk-button:nth-child(1)'), 'check-element')).toEqual(0);
//         });
//
//         it('should compare a fullscreen successful with a baseline', () => {
//             expect(browser.checkFullPageScreen('check-fullPage', {
//                 fullPageScrollTimeout: '1500',
//                 hideElements: [
//                     $('.evidon-banner-acceptbutton'),
//                     $('.element-2'),
//                     // or if there are multiple of the same elements
//                     $$('.multiple-elements')
//                 ],
//                 // Same as for hideElements
//                 removeElements: [$('.evidon-banner-acceptbutton')],
//             })).toEqual(0);
//         });
//     });
// });


import {openDeepLinkUrl} from "../../../app/helpers/utils";
import Webview, {CONTEXT_REF} from "../../../app/screenObjects/webview";

describe('checkscreen hybrid app', () => {
    it('should be able to do checkscreen', () => {
        openDeepLinkUrl('webview');
        Webview.submitURL('https://www.saucelabs.com');
        Webview.waitForWebsiteLoaded();
        // Change the context ton Webview to get the url of the browser
        Webview.switchToContext(CONTEXT_REF.WEBVIEW);

        expect(driver.getUrl()).toContain('https://saucelabs.com', 'Url not as expected');

        // expect(driver.checkScreen('hybrid')).toEqual(0);
        // expect(driver.checkElement($('.cc-dismiss'),'hybrid-element')).toEqual(0);

        // driver.pause(5000)
        expect(driver.checkFullPageScreen('hybrid-fullpage')).toEqual(0);
    });
});
