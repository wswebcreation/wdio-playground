const {config} = require('../wdio.sauce.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/app/specs/sample-app/*.js',
];

config.region = 'us'
// ============
// Capabilities
// ============
config.capabilities = [
    {
        deviceName: 'iPhone 11 Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        app: 'sauce-storage:sample-app-ios.zip',
        appiumVersion: '1.16.0',
        build: 'us-appium-server-execution'
    },
    {
        deviceName: 'iPhone 11 Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        app: 'sauce-storage:sample-app-ios.zip',
        appiumVersion: '1.16.0',
        build: 'us-appium-server-execution'
    },
    {
        deviceName: 'iPhone 11 Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        app: 'sauce-storage:sample-app-ios.zip',
        appiumVersion: '1.16.0',
        build: 'us-appium-server-execution'
    },
    {
        deviceName: 'iPhone 11 Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        app: 'sauce-storage:sample-app-ios.zip',
        appiumVersion: '1.16.0',
        build: 'us-appium-server-execution'
    },
    {
        deviceName: 'iPhone 11 Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        app: 'sauce-storage:sample-app-ios.zip',
        appiumVersion: '1.16.0',
        build: 'us-appium-server-execution'
    },
    {
        deviceName: 'iPhone 11 Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        app: 'sauce-storage:sample-app-ios.zip',
        appiumVersion: '1.16.0',
        build: 'us-appium-server-execution'
    },
    {
        deviceName: 'iPhone 11 Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        app: 'sauce-storage:sample-app-ios.zip',
        appiumVersion: '1.16.0',
        build: 'us-appium-server-execution'
    },
    {
        deviceName: 'iPhone 11 Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        app: 'sauce-storage:sample-app-ios.zip',
        appiumVersion: '1.16.0',
        build: 'us-appium-server-execution'
    },
    {
        deviceName: 'iPhone 11 Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        app: 'sauce-storage:sample-app-ios.zip',
        appiumVersion: '1.16.0',
        build: 'us-appium-server-execution'
    },
    {
        deviceName: 'iPhone 11 Simulator',
        platformName: 'iOS',
        platformVersion: '13.2',
        app: 'sauce-storage:sample-app-ios.zip',
        appiumVersion: '1.16.0',
        build: 'us-appium-server-execution'
    },
];

// =====
// Hooks
// =====
config.before = () => {
    /**
     * Custom property that is used to determine if the app is already launched for the first time
     * This property is needed because the first time the app is automatically started, so a double
     * restart is not needed.
     */
    driver.firstAppStart = true;
};

exports.config = config;
