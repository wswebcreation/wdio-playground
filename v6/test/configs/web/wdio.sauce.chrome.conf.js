const { config } = require('../wdio.sauce.shared.conf');
const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
    screenResolution,
    build: `WdioV6 Chrome - ${new Date().getTime()}`,
    seleniumVersion: '3.141.59',
    extendedDebugging: true,
};
const chromeOptions = {
    'goog:chromeOptions': {
    },
};

// ==================
// Specify Test Files
// ==================
config.specs= [
    './test/web/specs/demo-site/best-practices/*.js',
];

// ============
// Capabilities
// ============
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

exports.config = config;





