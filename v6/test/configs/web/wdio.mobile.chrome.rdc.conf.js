const { config } = require('../wdio.rdc.shared');

// ==================
// Specify Test Files
// ==================
config.specs= [
    './test/app/specs/**/*.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    deviceName: 'Samsung_Galaxy_S10_ws',
    automationName: 'UiAutomator2',
    // The reference to the app
    // testobject_app_id: '1',
    // The api key that has a reference to the app-project in the TO cloud
    testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_WEB,
    // The name of the test for in the cloud
    testobject_test_name: 'bestway-upload',
    // The Appium version in the cloud
    // appiumVersion: '1.10.0',
    // Some default settings
    // You can find more info in the TO Appium Basic Setup section
    platformName: 'Android',
    idleTimeout: 180,
    maxInstances: 1,
    noReset: true,
    orientation: 'PORTRAIT',
    newCommandTimeout: 180,
    phoneOnly: true,
    tabletOnly: false,
  },
];

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
