const { config } = require('../wdio.sauce.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs= [
    './test/web/specs/**/*.js',
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        automationName: 'XCUITest',
        browserName: 'safari',
        deviceName: 'iPhone XS Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        build: `Sauce Simulator browser iOS - ${new Date().getTime()}`,
    },
];

exports.config = config;





