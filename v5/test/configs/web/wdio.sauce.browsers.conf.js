const { config } = require('../wdio.sauce.shared.conf');
const { argv } = require('yargs');
const build = argv.build || 'Sauce Browsers';
const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
    build,
    screenResolution,
    seleniumVersion: '3.141.59',
};
const chromeOptions = {
    'goog:chromeOptions': {
        args: [ '--no-sandbox', 'disable-infobars' ],
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
    {
        browserName: 'firefox',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    {
        browserName: 'internet explorer',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
            iedriverVersion: '3.141.59',
        },
    },
    {
        browserName: 'MicrosoftEdge',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
            iedriverVersion: '3.141.59',
        },
    },
    {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'macOS 10.14',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
        ...chromeOptions,
    },
    {
        browserName: 'firefox',
        browserVersion: 'latest',
        platformName: 'macOS 10.14',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    {
        browserName: 'safari',
        browserVersion: 'latest',
        platformName: 'macOS 10.14',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
];

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/demo-site/parallelization/*.spec.js',
];

exports.config = config;





