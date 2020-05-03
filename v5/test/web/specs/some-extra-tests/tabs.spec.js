describe('Window tabs', () => {
    it('should be able to switch between tabs and interact with them', () => {
        // Go to the sauce labs website
        browser.url('https://www.saucelabs.com/')

        // Get the current window handle
        const mainWindow = browser.getWindowHandle();

        // Open the sign in form
        $('=Sign in').click();

        // Switch to the tab
        const newWindow = browser.getWindowHandles().find(window => window !== mainWindow)
        browser.switchToWindow(newWindow)

        // Submit no data
        expect($('.tooltip').isDisplayed()).toEqual(false);

        $('#submit').waitForDisplayed(15000);
        $('#submit').click();

        // Check the error message
        expect($('.tooltip').isDisplayed()).toEqual(true);

        // Close the Tab
        browser.closeWindow();

        // Verify you are on the main
        browser.switchToWindow(mainWindow)
        expect(browser.getWindowHandles().length).toEqual(1);
    });
});
