const { config } = require('../wdio.sauce.shared.conf');
const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
    screenResolution,
    build: `WdioV6 Chrome Performance - ${new Date().getTime()}`,
    extendedDebugging: true,
    capturePerformance: true,
};
const chromeOptions = {
    'goog:chromeOptions': {
    },
};

// ==================
// Specify Test Files
// ==================
config.specs= [
    './test/web/specs/performance/*.spec.js',
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





