const {config} = require('../wdio.sauce.shared.conf');
const build = `Sauce Simulator browser iOS - ${new Date().getTime()}`;

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/demo-site/best-practices/login.spec.js',
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
    // W3C working
    {
        platformName: 'iOS',
        browserName: 'safari',
        'appium:deviceName': 'iPhone Simulator',
        'appium:platformVersion': '13.2',
        'appium:orientation': 'portrait',
        'sauce:options': {
            'appiumVersion': '1.16.0',
            build,
        }
    },
    // W3C according to docs, https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
    // NOT WORKING!!
    {
        'appium:platformName': 'iOS',
        'appium:browserName': 'safari',
        'appium:deviceName': 'iPhone Simulator',
        'appium:platformVersion': '13.2',
        'appium:orientation': 'portrait',
        'sauce:options': {
            'appiumVersion': '1.16.0',
            build,
        }
    },
    // W3C, NOT WORKING for EMUSIM and OPENS A UP INSTANCE ON A REAL DEVICE
    {
        platformName: 'iOS',
        browserName: 'safari',
        appium: {
            deviceName: 'iPhone Simulator',
            platformVersion: '13.2',
            orientation: 'portrait',
        },
        'sauce:options': {
            'appiumVersion': '1.16.0',
            build,
        }
    }
];

exports.config = config;





