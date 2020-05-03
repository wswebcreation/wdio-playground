const { config } = require('../wdio.sauce.shared.conf');
const build = argv.build || 'Demo - compare';
const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
    build,
    screenResolution,
    seleniumVersion: '3.141.59',
};
const chromeOptions = {
    'goog:chromeOptions': {
        'w3c': true,
    },
};

// ============
// Capabilities
// ============
config.maxInstances = 100;
config.capabilities = [
    {
        browserName: 'googlechrome',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
        ...chromeOptions,
    },
];

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/some-extra-tests/angular.spec.js',
];

exports.config = config;





