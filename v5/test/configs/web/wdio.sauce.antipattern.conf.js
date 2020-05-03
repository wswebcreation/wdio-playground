const {config} = require('../wdio.sauce.shared.conf');
const {argv} = require('yargs');
const build = argv.build || 'Antipattern';
const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
    build,
    screenResolution,
    seleniumVersion: '3.141.59',
    // extendedDebugging: true,
};
const chromeOptions = {
    'goog:chromeOptions': {
        args: ['--no-sandbox', 'disable-infobars'],
    },
};

// ============
// Capabilities
// ============
config.maxInstances = 1;
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
        browserName: 'MicrosoftEdge',
        browserVersion: '18.17763',
        platformName: 'Windows 10',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
            iedriverVersion: '3.141.59',
        },
    },
    {
        browserName: 'internet explorer',
        version: 'latest',
        platform: 'Windows 10',
        build,
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
        platformName: 'macOS 10.13',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    {
        browserName: 'safari',
        version: '11.1',
        platform: 'macOS 10.13',
        build,
    },
    // {
    //     automationName: 'XCUITest',
    //     browserName: 'safari',
    //     deviceName: 'iPhone XS Simulator',
    //     platformName: 'iOS',
    //     platformVersion: '12.2',
    //     build,
    // },
    // {
    //     automationName: 'XCUITest',
    //     browserName: 'safari',
    //     deviceName: 'iPhone XS Simulator',
    //     platformName: 'iOS',
    //     platformVersion: '13.2',
    //     build,
    // },
    // {
    //     automationName: 'UiAutomator2',
    //     browserName: 'chrome',
    //     deviceName: 'Google Pixel GoogleAPI Emulator',
    //     platformName: 'Android',
    //     platformVersion: '8.0',
    //     appiumVersion: '1.15.0',
    //     build,
    // },
];

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/demo-site/antipattern/*.spec.js',
];

exports.config = config;





