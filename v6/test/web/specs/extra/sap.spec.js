describe('SAP test', function () {
    it('should be able to do something', ()=>{
        browser.url('https://www.concur.com/en-us/free-trial?bypass_captcha=671205b673cbdea9cf9add3e08fc38dad');

        $('iframe').waitForDisplayed();
        browser.switchToFrame($('iframe'))
        $('.call').click();

        browser.switchToParentFrame()

        $('input#edit-c-firstname').waitForDisplayed();
        $('input#edit-c-firstname').setValue('This is my SAP first name');
        browser.pause(5000)
    })
});
