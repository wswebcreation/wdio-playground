const {config} = require('../wdio.sauce.shared.conf');
const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
    screenResolution,
    build: `WdioV6 all browsers - ${new Date().getTime()}`,
    seleniumVersion: '3.141.59',
    // extendedDebugging: true,
    // tunnelIdentifier: 'sample-app-web'
};
const chromeOptions = {
    'goog:chromeOptions': {
    },
};

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
    /**
     * Desktop browsers
     */
    {
        browserName: 'googlechrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
        ...chromeOptions,
    },
    {
        browserName: 'firefox',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    {
        browserName: 'internet explorer',
        platformName: 'Windows 8.1',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
            iedriverVersion: '3.141.59',
        },
    },
    {
        browserName: 'MicrosoftEdge',
        platformName: 'Windows 10',
        browserVersion: '18.17763',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    {
        browserName: 'MicrosoftEdge',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    // Safari 11 is not W3C compliant,
    // see https://developer.apple.com/documentation/webkit/macos_webdriver_commands_for_safari_11_1_and_earlier
    {
        browserName: 'safari',
        platform: 'macOS 10.13',
        version: '11.1',
        ...defaultBrowserSauceOptions,
    },
    // Safari 13
    {
        browserName: 'safari',
        platformName: 'macOS 10.15',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    // Safari 12
    {
        browserName: 'safari',
        platformName: 'macOS 10.14',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    }
];

exports.config = config;





