const DEFAULT_TIMEOUT = 15000;

describe('PWA key feature', () => {
    beforeEach(() => {
        // Load the PWA in chrome / safari
        driver.url('https://deanhume.github.io/beer/index.html');

        // This is an anti pattern, but wait for all content to be loaded and cached, just for demoing purpose
        driver.pause(3000);
    });

    it('should be able to navigate in online mode', () => {
        openAboutPage();

        // just for demoing purpose
        driver.pause(3000);
    });

    it('should be able to navigate in offline mode', () => {
        // Disable Wifi
        toggleWiFi();

        // Load the PWA in chrome / safari
        driver.url('https://deanhume.github.io/beer/index.html');

        // just for demoing purpose
        driver.pause(3000);

        openAboutPage();

        // Now verify that the page is loaded
        expect($('.about_text').isDisplayed()).toEqual(true);

        // Enable Wifi
        toggleWiFi();

        // just for demoing purpose
        driver.pause(3000);


        const el = $('#id');

        // Default timeout for all waitForXXX commands.
        // waitforTimeout: 1000,
        el.waitForDisplayed(5000)

    });
});


function toggleWiFi() {
    // Do the Android magic
    if (driver.isAndroid) {
        driver.toggleWiFi();

        // Just for demoing purpose
        return driver.pause(3000);
    }

    // Store the current context, this is only if you want to get back to the browser again
    const currentContext = driver.getContext();

    // 1. Put Safari in the background
    driver.background(-1);

    // 2. Go the settings
    driver.execute('mobile: launchApp', {"bundleId": "com.apple.Preferences"});

    // Do some Appium magic here
    driver.switchContext('NATIVE_APP');

    // 3. Go to the WiFi
    const wifiRow = '**/XCUIElementTypeCell[`name CONTAINS "Wi-Fi"`]';
    const wifiSwitch = '**/XCUIElementTypeSwitch[`name CONTAINS "Wi-Fi"`]';
    $(`-ios class chain:${wifiRow}`).waitForExist(DEFAULT_TIMEOUT);
    $(`-ios class chain:${wifiRow}`).click();
    // 4. Disable the WiFi
    $(`-ios class chain:${wifiSwitch}`).waitForDisplayed(DEFAULT_TIMEOUT);
    // We use a touchaction because for some reason the button is not intractable by a default click
    $(`-ios class chain:${wifiSwitch}`).touchAction([
        'press',
        'release'
    ]);

    // Just for demo purposes
    driver.pause(3000);

    // 5. Kill the settings
    driver.execute('mobile: terminateApp', {"bundleId": "com.apple.Preferences"});

    // 6. Launch the browser
    driver.execute('mobile: launchApp', {"bundleId": "com.apple.mobilesafari"});
    // Switch back to the previous context
    driver.switchContext(currentContext);
}

function openAboutPage(){
    $('.mdl-mega-footer__heading-checkbox').click();
    $('=About').waitForExist(15000);
    $('=About').click();

    // Now verify that the page is loaded
    expect($('.about_text').isDisplayed()).toEqual(true);

}
