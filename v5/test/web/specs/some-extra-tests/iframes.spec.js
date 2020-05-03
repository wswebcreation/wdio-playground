describe('Iframes', () => {
    it('should be able to search items in the agenda', () => {
        browser.url('https://theme.manuelmoreale.com/one/');

        // expect($('.text-title').getText()).toEqual('Setups');

        // Then wait for the iframe to be visible and switch to it
        const iframe = $('iframe');

        iframe.waitForDisplayed(15000);
        browser.switchToFrame(iframe);

        // Get the title
        expect($('.text-title').getText()).toEqual('Setups');

        // Scroll the element into view
        $('=About').scrollIntoView();

        // Click on it
        $('=About').click();

        // This is just there for demo purpose
        browser.pause(5000);
        expect($('.text-title').getText()).toEqual('So you want to know who I am');

        // Switch back to the parent
        browser.switchToParentFrame();

        // Interact with the button
        $('.button').click();

        // Verify that a new frame has been opened
        browser.waitUntil(()=> browser.getWindowHandles().length > 1);
    });
});
