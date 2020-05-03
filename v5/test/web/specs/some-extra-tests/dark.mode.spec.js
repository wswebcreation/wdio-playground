describe('Appium', () => {
    it('should be able to enable dark mode on a iOS Simulator',()=>{
        // Go to Twitter
        browser.url('https://mobile.twitter.com');

        // FOR DEMO PURPOSE, NEVER USE IT!!
        browser.pause(4000);

        // Change to dark appearance with Siri!!!!
        driver.execute('mobile:siriCommand', {text: "Enable Dark Appearance"});

        // Wait until Siri is there, THIS IS ONLY FOR DEMO PURPOSE, NEVER USE IT!!
        browser.pause(2000);

        // Launch Safari, just for demo purpose
        driver.execute('mobile: launchApp', { bundleId: 'com.apple.mobilesafari' });

        // FOR DEMO PURPOSE, NEVER USE IT!!
        browser.pause(2000);
    });
});
