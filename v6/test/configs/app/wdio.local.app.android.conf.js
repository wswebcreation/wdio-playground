const {config} = require('../wdio.local.appium.shared.conf');
const {nativeAppComparison} = require('../comparison.conf')
const {join} = require('path');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/app/specs/**/*.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        automationName: 'UiAutomator2',
        deviceName: 'Pixel_3_10.0',
        platformName: 'Android',
        platformVersion: '10.0',
        orientation: 'PORTRAIT',
        app: join(process.cwd(), '../apps/Android.SauceLabs.Mobile.Sample.app.2.1.0.apk'),
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        recreateChromeDriverSessions: true,
        // browserName: 'internet',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        maxInstances: 1,
        chromedriverChromeMappingFile: '/Users/wimselles/AndroidAutomation/chromedriver-mapping.json',
        chromedriverExecutableDir: '/Users/wimselles/AndroidAutomation/chromedriver/',
        chromedriverUseSystemExecutable: false,
    },
    // {
    //     // The defaults you need to have in your config
    //     automationName: 'UiAutomator2',
    //     deviceName: 'Pixel_8.1',
    //     platformName: 'Android',
    //     platformVersion: '8.1',
    //     orientation: 'PORTRAIT',
    //     // app: join(process.cwd(), '../apps/draw.apk'),
    //     // appActivity: '.graphics.FingerPaint',
    //     app: join(process.cwd(), '../apps/Android.SauceLabs.Mobile.Sample.app.2.1.0.apk'),
    //     appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    //     // recreateChromeDriverSessions: true,
    //     // browserName: 'internet',
    //     // Read the reset strategies very well, they differ per platform, see
    //     // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    //     noReset: true,
    //     newCommandTimeout: 240,
    //     maxInstances: 1,
    //     chromedriverChromeMappingFile: '/Users/wimselles/AndroidAutomation/chromedriver-mapping.json',
    //     chromedriverExecutableDir: '/Users/wimselles/AndroidAutomation/chromedriver/',
    //     chromedriverUseSystemExecutable: false,
    // },
];

// ========
// Services
// ========
config.services = config.services.concat(nativeAppComparison);

// =====
// Hooks
// =====
config.before = () => {
    /**
     * Custom property that is used to determine if the app is already launched for the first time
     * This property is needed because the first time the app is automatically started, so a double
     * restart is not needed.
     */
    driver.firstAppStart = true;
};

exports.config = config;
