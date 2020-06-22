const {config} = require('../wdio.sauce.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/app/specs/extra/test.spec.js',
];

config.region = 'us'
// ============
// Capabilities
// ============
config.capabilities = [
    {
        deviceName: 'Samsung Galaxy S9 WQHD GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '9.0',
        autoWebview: true,
        app: 'sauce-storage:provide-app-here',
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
