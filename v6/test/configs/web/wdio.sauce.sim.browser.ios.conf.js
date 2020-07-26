const { config } = require('../wdio.sauce.shared.conf');
const build = `Sauce Simulator browser iOS - ${new Date().getTime()}`;

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
    // JSONWP
    {
        automationName: 'XCUITest',
        browserName: 'safari',
        deviceName: 'iPhone XS Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        build,
    },
    // W3C
    {
        platformName: 'iOS',
        browserName: 'safari',
        'appium:deviceName': 'iPhone Simulator',
        'appium:platformVersion': '13.2',
        'appium:deviceOrientation': 'portrait',
        'sauce:options': {
            'appiumVersion': '1.16.0',
            build,
        }
    },
];

exports.config = config;





