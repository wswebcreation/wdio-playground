const { config } = require('../wdio.sauce.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs= [
    './test/web/specs/**/*.js',
];

config.region= 'us';

// ============
// Capabilities
// ============
config.capabilities = [
    // // EU
    // {
    //     browserName: 'safari',
    //     deviceName: 'iPhone_XS_ws',
    //     platformName: 'ios',
    // },
    // US
    {
        browserName: 'safari',
        deviceName: 'iPhone.*',
        platformName: 'ios',
    },
];

exports.config = config;





