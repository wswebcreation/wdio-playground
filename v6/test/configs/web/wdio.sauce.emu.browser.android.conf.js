const { config } = require('../wdio.sauce.shared.conf');
const build = `Sauce Emulator browser Android - ${new Date().getTime()}`;

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
        deviceName: 'Samsung Galaxy S9 WQHD GoogleAPI Emulator',
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '9.0',
        appiumVersion: '1.17.1',
        build,
    },
];

exports.config = config;





