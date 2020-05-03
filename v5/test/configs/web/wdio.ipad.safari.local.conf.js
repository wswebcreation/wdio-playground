const { config } = require('../wdio.local.appium.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/**/*.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        deviceName: 'iPad Pro (9.7-inch)',
        platformName: 'iOS',
        platformVersion: '13.1',
        orientation: 'PORTRAIT',
        // orientation: 'LANDSCAPE',
        browserName: 'safari',
        maxInstances: 1,
    },
];

exports.config = config;
