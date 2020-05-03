const {config} = require('../wdio.sauce.shared.conf');
const build = 'ic-form';
const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
    build,
    screenResolution,
    seleniumVersion: '3.141.59',
    // extendedDebugging: true,
};

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/some-extra-tests/ic.form.spec.js',
];

// ============
// Capabilities
// ============
config.maxInstances = 100;
config.capabilities = [
    // chrome-windows-iphone.x
    {
        browserName: 'googlechrome',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
            name: 'chrome-windows-iphone.x'
        },
        'goog:chromeOptions': {
            mobileEmulation: {
                deviceName: 'iPhone X',
            },
            args: [
                '--no-sandbox',
                '--disable-gpu',
                '--start-fullscreen',
                '--disable-notifications',
            ],
        },
    },
    // chrome-mac-iphone.x
    {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'macOS 10.14',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
            name: 'chrome-mac-iphone.x'
        },
        'goog:chromeOptions': {
            mobileEmulation: {
                deviceName: 'iPhone X',
            },
            args: [
                '--no-sandbox',
                '--disable-gpu',
                '--start-fullscreen',
                '--disable-notifications',
            ],
        },
    },
    // chrome-windows-pixel.2
    {
        browserName: 'googlechrome',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
            name: 'chrome-windows-pixel.2'
        },
        'goog:chromeOptions': {
            mobileEmulation: {
                deviceName: 'Pixel 2',
            },
            args: [
                '--no-sandbox',
                '--disable-gpu',
                '--start-fullscreen',
                '--disable-notifications',
            ],
        },
    },
    // chrome-mac-pixel.2
    {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'macOS 10.14',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
            name: 'chrome-mac-pixel.2'
        },
        'goog:chromeOptions': {
            mobileEmulation: {
                deviceName: 'Pixel 2',
            },
            args: [
                '--no-sandbox',
                '--disable-gpu',
                '--start-fullscreen',
                '--disable-notifications',
            ],
        },
    },
    // safari-sim-iphone.x
    {
        automationName: 'XCUITest',
        browserName: 'safari',
        deviceName: 'iPhone X Simulator',
        platformName: 'iOS',
        platformVersion: '12.2',
        build,
        name: 'safari-sim-iphone.x'
    },
    // chrome-emu-pixel.3
    {
        automationName: 'UiAutomator2',
        browserName: 'chrome',
        deviceName: 'Google Pixel 3 GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '9.0',
        build,
        name: 'chrome-emu-pixel.3'
    },
];

exports.config = config;





