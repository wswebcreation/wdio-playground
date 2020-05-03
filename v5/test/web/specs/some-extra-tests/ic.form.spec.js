describe('Visual regression', () => {
    it('should be able to create a screenshot', () => {
        // open the url
        browser.url('https://www.quackit.com/html/html_editors/scratchpad/preview.cfm?example=/html/codes/html_form_code');

        // Take a screenshot
        const fileName = browser.config.capabilities["sauce:options"]
            ? browser.config.capabilities["sauce:options"].name
            : browser.config.capabilities.name;
        browser.saveScreenshot(`./.tmp/ic-form/${fileName}.png`);
    });
});
