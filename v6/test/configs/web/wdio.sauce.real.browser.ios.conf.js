const { config } = require('../wdio.sauce.shared.conf');
const build = `Sauce Real Device browser iOS - ${new Date().getTime()}`;

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
        // automationName: 'XCUITest',
        browserName: 'safari',
        deviceName: 'iPhone [6789X]?.*',
        // deviceName: 'iPhone_XS_ws',
        platformName: 'iOS',
        build,
    },
];

exports.config = config;





