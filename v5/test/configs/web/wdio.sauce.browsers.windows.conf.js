const {config} = require('../wdio.sauce.shared.conf');
const build = 'Authentication';
const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
    build,
    screenResolution,
    seleniumVersion: '3.141.59',
};
const chromeOptions = {
    'goog:chromeOptions': {
        args: ['--no-sandbox', 'disable-infobars'],
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
        browserName: 'MicrosoftEdge',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
            prerun: {
                executable: 'sauce-storage:auth-edge.exe',
                args: ['--silent', '-a', '-q'],
                background: true,
            },
        },
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
        browserName: 'firefox',
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
    './test/web/specs/some-extra-tests/authentication.spec.js',
];

exports.config = config;





