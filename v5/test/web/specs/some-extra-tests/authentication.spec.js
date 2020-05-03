describe('Authentication', () => {
    it('should be able to open a website with local authentication', () => {
        const browserName = browser.capabilities.browserName.toLowerCase();

        if (browserName === 'chrome' || browserName === 'firefox') {
            browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        } else {
            browser.url('https://the-internet.herokuapp.com/basic_auth');
        }

        expect($('.example').getText()).toContain('Congratulations');
    });
});
