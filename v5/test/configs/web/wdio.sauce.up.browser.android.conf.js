const { config } = require('../wdio.sauce.shared.conf');
const chromeOptions = {
    'goog:chromeOptions': {
        'w3c': true,
    },
};

// ==================
// Specify Test Files
// ==================
config.specs= [
    './test/web/specs/**/*.js',
];

config.region = 'us'

// ============
// Capabilities
// ============
config.capabilities = [
    // {
    //     browserName: 'chrome',
    //     platformName: 'Android',
    //     deviceName: 'Samsung_Galaxy_S10_ws',
    //     ...chromeOptions,
    // },
    {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Samsung_Galaxy_S6_POC119',
        ...chromeOptions,
    },
    // {
    //     "platformName": "Android",
    //     "platformVersion": "8.1",
    //     appium: {
    //         deviceName: "Google Pixel GoogleAPI Emulator",
    //         app:'sauce-storage:draw.apk',
    //         appActivity: '.graphics.FingerPaint',
    //     }
    // },
];

exports.config = config;





