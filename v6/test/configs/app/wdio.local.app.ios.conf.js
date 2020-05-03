const { config } = require('../wdio.local.appium.shared.conf');
const {nativeAppComparison} = require('../comparison.conf')
const { join } = require('path');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/app/specs/**/*.js',
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone 11',
        platformName: 'iOS',
        platformVersion: '13.4',
        orientation: 'PORTRAIT',
        app: join(process.cwd(), '../apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.app.zip'),
        maxInstances: 1,
        // Return an array of Webview-objects containing the id, the title and the url
        fullContextList: true,
        // Add Safari as a Webview
        includeSafariInWebviews: true,
    },
];

// ========
// Services
// ========
config.services = config.services.concat(nativeAppComparison);

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
