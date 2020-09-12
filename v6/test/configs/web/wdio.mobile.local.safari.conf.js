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
        deviceName: 'iPhone 11',
        platformName: 'iOS',
        platformVersion: '13.7',
        orientation: 'PORTRAIT',
        browserName: 'safari',
        noReset: true,
        maxInstances: 1,
        // fullContextList: true,
        // includeSafariInWebviews: true,
    },
];

exports.config = config;
