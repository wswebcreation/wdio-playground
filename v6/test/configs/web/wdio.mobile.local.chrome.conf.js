const { config } = require('../wdio.local.appium.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/demo-site/best-practices/*.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        automationName: 'UIAutomator2',
        deviceName: 'Pixel_3_10.0',
        platformName: 'Android',
        platformVersion: '10.0',
        orientation: 'PORTRAIT',
        browserName: 'chrome',
        maxInstances: 1,
        chromedriverChromeMappingFile: '/Users/wimselles/AndroidAutomation/chromedriver-mapping.json',
        chromedriverExecutableDir: '/Users/wimselles/AndroidAutomation/chromedriver/',
        chromedriverUseSystemExecutable: false,
    },
];

exports.config = config;
