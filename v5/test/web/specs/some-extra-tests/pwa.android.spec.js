import {DEFAULT_TIMEOUT} from "../../../configs/e2eConstants";
import Context from "../../../app/helpers/Context";

describe('An Android PWA', () => {
    it('should be able to download the PWA', () => {
        browser.url('https://www.smashingmagazine.com');

        // Switch to native context
        driver.switchContext('NATIVE_APP');

        // driver.pause(10000);

        // //*//*[@resource-id="com.android.chrome:id/search_box_text"]
        // $('*//*[@resource-id="com.android.chrome:id/search_box_text"]').waitForDisplayed(DEFAULT_TIMEOUT);
        // $('*//*[@resource-id="com.android.chrome:id/search_box_text"]').click();
        // $('*//*[@resource-id="com.android.chrome:id/url_bar"]').waitForDisplayed(DEFAULT_TIMEOUT);
        // $('*//*[@resource-id="com.android.chrome:id/url_bar"]').setValue('https://www.smashingmagazine.com\uE007');

        // driver.pause(10000);

        //*//*[@resource-id="com.android.chrome:id/url_bar"]

        // Open the menu
        $('~More options').click();

        // Click on add to home
        $('*//*[@resource-id=\'com.android.chrome:id/app_menu_list\']').waitForDisplayed(DEFAULT_TIMEOUT);
        $('~Add to Home screen').click();

        // Wait for the pop-up
        $('//*[contains(@text, "ADD")]').waitForDisplayed(DEFAULT_TIMEOUT);
        $('//*[contains(@text, "ADD")]').click();
        $('//*[contains(@text, "ADD AUTOMATICALLY")]').waitForDisplayed(DEFAULT_TIMEOUT);
        $('//*[contains(@text, "ADD AUTOMATICALLY")]').click();

        $('~1 open tab').waitForDisplayed(DEFAULT_TIMEOUT);
        $('~1 open tab').click();

        $('~More options').click()
        $('~Close all tabs').click()
        // // Terminating the app will remove it from the emulator, because it's the same appid
        // driver.terminateApp('com.android.chrome');

        // driver.pause(5000);

        driver.background(-1);

        console.log('before currentContexts = ', Context.getCurrentContexts());

        // Wait for the icon on the home screen
        $('~Smashing').waitForDisplayed(DEFAULT_TIMEOUT);
        $('~Smashing').click();
        //
        // driver.waitUntil(()=>{
        //     const currentContexts = Context.getCurrentContexts();
        //     console.log('currentContexts = ', currentContexts);
        //
        //     return false
        // }, DEFAULT_TIMEOUT);

        driver.switchContext('CHROMIUM');

        driver.pause(3000)
        // console.log('driver.getPageSource() =', driver.getPageSource())
        // Accept the cookie
        $('#cookiebanner').waitForDisplayed(DEFAULT_TIMEOUT);
        $('.cookies--btn.btn--green').click();
        $('#cookiebanner').waitForDisplayed(DEFAULT_TIMEOUT, true);

    });
});
