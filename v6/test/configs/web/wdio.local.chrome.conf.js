const {config} = require('../wdio.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/demo-site/best-practices/*.js',
];

// ============
// Capabilities
// ============
config.capabilities = [
    // Chrome example
    {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                'disable-infobars',
                '--headless',
            ],
        },

    },
];

// ========
// Services
// ========
config.services = config.services.concat('selenium-standalone');

exports.config = config;





