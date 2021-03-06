const { config } = require('../wdio.rdc.shared');

// ==================
// Specify Test Files
// ==================
config.specs= [
    './test/web/specs/**/*.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    deviceName: 'Samsung Galaxy S10*',
    automationName: 'UiAutomator2',
    // The reference to the app
    // The api key that has a reference to the app-project in the TO cloud
    testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_WEB,
    // The name of the test for in the cloud
    testobject_test_name: 'chrome-browser',
    // The Appium version in the cloud
    // Some default settings
    // You can find more info in the TO Appium Basic Setup section
    platformName: 'Android',
    idleTimeout: 180,
    maxInstances: 4,
    testobject_cache_device: true,
    noReset: true,
    orientation: 'PORTRAIT',
    newCommandTimeout: 180,
    phoneOnly: true,
    tabletOnly: false,
  },
];

exports.config = config;
