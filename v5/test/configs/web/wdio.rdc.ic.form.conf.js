const { config } = require('../wdio.rdc.shared');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/some-extra-tests/ic.form.spec.js',
];

// ============
// Capabilities
// ============
config.capabilities = [
    // safari-real-iphone.x
    {
        deviceName: 'iPhone X',
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_WEB,
        testobject_test_name: 'safari-browser',
        platformName: 'iOS',
        name: 'safari-real-iphone.x',
    },
    // chrome-real-pixel.3
    {
        deviceName: 'Google Pixel 3',
        automationName: 'UiAutomator2',
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_WEB,
        testobject_test_name: 'chrome-browser',
        platformName: 'Android',
        name: 'chrome-real-pixel.3',
    },
];

exports.config = config;
