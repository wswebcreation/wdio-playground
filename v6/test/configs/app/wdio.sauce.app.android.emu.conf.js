const {config} = require('../wdio.sauce.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/app/specs/extra/test.spec.js',
];
config.hostname= 'ondemand.us-west-1.saucelabs.com';

config.region = 'us'
// ============
// Capabilities
// ============
config.capabilities = [
    {
        deviceName: 'Android GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '10',
        // appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        // app: 'storage:d8aa725e-370d-44ed-8ff5-b36efc52a3fb',
        app:'storage:d8aa725e-370d-44ed-8ff5-b36efc52a3fb',
        appiumVersion: '1.17.1',
    },
    {
        deviceName: 'Android GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '9.0',
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        app: 'storage:d8aa725e-370d-44ed-8ff5-b36efc52a3fb',
        appiumVersion: '1.17.1',
    },
    {
        deviceName: 'Android GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '8.1',
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        app: 'storage:d8aa725e-370d-44ed-8ff5-b36efc52a3fb',
        appiumVersion: '1.17.1',
    },
    {
        deviceName: 'Android GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '7.1',
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        app: 'storage:d8aa725e-370d-44ed-8ff5-b36efc52a3fb',
        appiumVersion: '1.17.1',
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
