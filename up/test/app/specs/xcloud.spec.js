describe('xCloud', () => {
    it('should not experience long webdriver calls', () => {
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        driver.takeScreenshot();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.stopRecordingScreen();

        driver.getCurrentPackage();
        driver.getCurrentActivity();
        driver.getPageSource();
        // browser.getLogs('logcat');


        driver.startRecordingScreen();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        // browser.getLogs('logcat');
        // NO STOPPING!!!!

        driver.startRecordingScreen();
        driver.takeScreenshot();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.stopRecordingScreen();

        driver.takeScreenshot();
        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        for(let i=0; i < 100; i++) {
            driver.pressKeyCode(69);
        }
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.takeScreenshot();
        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        for(let i=0; i < 100; i++) {
            driver.pressKeyCode(69);
        }
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.takeScreenshot();
        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        // VERY STRANGE, NOW THERE IS A STOP
        driver.stopRecordingScreen();

        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        for(let i=0; i < 100; i++) {
            driver.pressKeyCode(69);
        }
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.getPageSource();
        // browser.getLogs('logcat');

        driver.startRecordingScreen();
        for(let i=0; i < 100; i++) {
            driver.pressKeyCode(69);
        }
        driver.takeScreenshot();
        driver.getPageSource();
        driver.stopRecordingScreen();

        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.getPageSource();
        driver.takeScreenshot();
        driver.getPageSource();
        driver.getPageSource();
        // browser.getLogs('logcat');
    });
});
