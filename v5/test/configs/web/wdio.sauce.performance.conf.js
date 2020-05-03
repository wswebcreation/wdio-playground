const { config } = require('../wdio.sauce.shared.conf');
const { argv } = require('yargs');
const build = argv.build || 'Performance';
const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
    build,
    screenResolution,
    seleniumVersion: '3.141.59',
    capturePerformance: true,
    extendedDebugging: true,
    crmuxdriverVersion: 'beta',
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
if (argv.perf) {
    config.capabilities = [
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
    ];
} else {
    config.capabilities = [
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
    ];
}

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/demo-site/performance/*.spec.js',
];

exports.config = config;





