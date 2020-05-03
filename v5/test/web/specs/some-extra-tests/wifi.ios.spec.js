const DEFAULT_TIMEOUT = 15000;

describe('Appium', () => {
    it('should be able to disable the wifi on a real iOS device', () => {
        // Open a URL
        driver.url('https://www.saucelabs.com');

        // For demo purpose
        driver.pause(5000);

        // Store the current context, this is only if you want to get back to the browser again
        const currentContext = driver.getContext();

        // Put it in the background
        driver.background(-1);

        // Now launch the settings
        driver.execute('mobile: launchApp', {bundleId: 'com.apple.Preferences'});

        // Change the context to `NATIVE_APP`
        driver.switchContext('NATIVE_APP');

        // Go to the wifi
        const wifiRow = '**/XCUIElementTypeCell[`name CONTAINS "Wi-Fi"`]';
        const wifiSwitch = '**/XCUIElementTypeSwitch[`name CONTAINS "Wi-Fi"`]';
        $(`-ios class chain:${wifiRow}`).waitForDisplayed(DEFAULT_TIMEOUT);
        $(`-ios class chain:${wifiRow}`).click();
        // Disable it
        $(`-ios class chain:${wifiSwitch}`).waitForDisplayed(DEFAULT_TIMEOUT);
        // We use a touchaction because for some reason the button is not intractable by a default click
        $(`-ios class chain:${wifiSwitch}`).touchAction([
            'press',
            'release'
        ]);

        // Put it in the background
        driver.background(-1);

        // Launch the browser
        driver.execute('mobile: launchApp', {bundleId: 'com.apple.mobilesafari'});
        // Switch back to the previous context
        driver.switchContext(currentContext);
        // and load the url again
        driver.url('https://www.saucelabs.com');

        // For demo purpose
        driver.pause(5000);

        // Now reset the Wi-Fi again
        driver.switchContext('NATIVE_APP');
        driver.execute('mobile: launchApp', {bundleId: 'com.apple.Preferences'});
        // Enable it
        $(`-ios class chain:${wifiSwitch}`).waitForDisplayed(DEFAULT_TIMEOUT);
        // We use a touchaction because for some reason the button is not intractable by a default click
        $(`-ios class chain:${wifiSwitch}`).touchAction([
            'press',
            'release'
        ]);
    });
});


// //XCUIElementTypeSwitch[@name="bluetooth-button"]
// //XCUIElementTypeSwitch[@name="wifi-button"]
// //XCUIElementTypeSwitch[@name="cellular-data-button"]
// //XCUIElementTypeSwitch[@name="airplane-mode-button"]
