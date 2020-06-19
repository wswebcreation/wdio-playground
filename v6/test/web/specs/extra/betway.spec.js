import {readFileSync} from 'fs';
import {join} from "path";

describe('Appium', () => {
    it('should be able to upload a document', () => {
        login();

        // Switch to the native context wait for the browse button
        driver.switchContext('NATIVE_APP');

        // The allow button
        $('android=new UiSelector().textMatches("Allow")').waitForDisplayed();
        $('android=new UiSelector().textMatches("Allow")').click();

        // Wait for the native Browse button
        $('android=new UiSelector().textMatches("Browse")').waitForDisplayed();
        $('android=new UiSelector().textMatches("Browse")').click();

        // Upload the file so it will automatically be recognised when we click on the browse button.
        // REMARK: The Browse screen doesn't have a refresh, so go back
        driver.back();
        // Upload the file
        const codingBot = readFileSync(join(process.cwd(), 'assets/sauce-bot-coding.png'), 'base64');
        // Push it to the device and wait till it is uploaded
        // This is the `tricky` part, you need to know the file structure of the device and where you can download
        // the file from. I've checked this structure with the VUSB offering of Sauce Labs for private devices.
        driver.pushFile('/storage/self/primary/sauce-bot-coding.png', codingBot);

        // Now click on upload again, but that's in the webview context
        switchToWebview();
        clickOnUploadButton();
        // Switch back to native context to Browse again
        driver.switchContext('NATIVE_APP');

        // Open the Browse screen
        $('android=new UiSelector().textMatches("Browse")').click();

        // Wait for the element to be there
        $('android=new UiSelector().textMatches("sauce-bot-coding.png")').waitForDisplayed()
        $('android=new UiSelector().textMatches("sauce-bot-coding.png")').click();

        // Now get back to the webview and wait for the Complete button
        switchToWebview()
        $('#preview-confirm').waitForDisplayed();

        // Verify that the preview element is there.
        expect($('.preview__image-element').isDisplayed()).toEqual(true);
    });
});

/**
 * Simple login
 */
function login() {
    browser.url('https://account.betway.com/en/document-center/');

    // Login
    $('#LoginUsername').waitForDisplayed();
    $('#LoginUsername').setValue('foo');
    $('#LoginPassword').setValue('bar');
    $('#login-submit-button').click();

    // Go to the correct url
    browser.url('https://account.betway.com/en/document-center/')

    // Wait for the upload button
    $('.proof_of_identity').waitForDisplayed({timeout: 55000})
    try {
        $('.loader-wrapper').waitForDisplayed({timeout: 3000})
        $('.loader-wrapper').waitForDisplayed({timeout: 10000, reverse: true})
    } catch (e) {
        // do nothing
    }
    $('.proof_of_identity').click();

    // Wait for the selectbox
    $('.countrydropdown').waitForDisplayed({timeout: 55000})
    try {
        $('.loader-spinner').waitForDisplayed({timeout: 3000})
        $('.loader-spinner').waitForDisplayed({timeout: 10000, reverse: true})
    } catch (e) {
        // do nothing
    }
    $('.countrydropdown .value.ng-binding').click();

    // Wait for the list and select the first
    $('.options').waitForDisplayed();
    $('.options>div:first-child').click();

    // Wait for the passport
    $$('button.ng-binding.primary')[0].waitForDisplayed();
    $$('button.ng-binding.primary')[0].click();

    // Wait for the iframe and swtich to it
    $('iframe[allow="camera"]').waitForDisplayed();
    browser.switchToFrame($('iframe[allow="camera"]'));
    // Wait for the start button
    $('#button-start-verification').waitForDisplayed({timeout: 55000});
    $('#button-start-verification').click();

    // Wait for the upload file
    $('.btn.btn--secondary').waitForDisplayed({timeout: 55000});
    $('.btn.btn--secondary').click();

    // Wait for the upload file
    clickOnUploadButton();
}

/**
 * Click on the upload button
 */
function clickOnUploadButton() {
    $('.file-upload__button').waitForDisplayed({timeout: 55000});
    $('.file-upload__button').click();
}

/**
 * Switch to the webview
 */
function switchToWebview(){
    driver.switchContext('CHROMIUM');
}
