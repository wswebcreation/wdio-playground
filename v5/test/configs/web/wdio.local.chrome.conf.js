const { join } = require('path');
const { config } = require('../wdio.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/demo-site/*.js',
];

// ============
// Capabilities
// ============
config.capabilities = [
    // Chrome example
    {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [ '--no-sandbox', 'disable-infobars' ],
        },

    },
];

// ========
// Services
// ========
config.services = [
    'selenium-standalone',
    [
        'image-comparison',
        {
            baselineFolder: join(process.cwd(), '.tmp/baseline/'),
            formatImageName: '{tag}-{browserName}-{width}x{height}',
            screenshotPath: join(process.cwd(), '.tmp/'),
            savePerInstance: true,
            autoSaveBaseline: true,
            clearRuntimeFolder: true,
        },
    ],
];

exports.config = config;





