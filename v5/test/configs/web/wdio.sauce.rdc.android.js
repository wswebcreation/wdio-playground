const { config } = require('../wdio.shared.conf');

config.services = ['sauce'];
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY_EU;
// config.hostname = 'ondemand.eu-central-1.saucelabs.com'
config.region = 'eu';
config.capabilities = [
    {
        automationName: 'UiAutomator2',
        // browserName: 'chrome',
        deviceName: 'Samsung_Galaxy_S10_ws',
        // platformName: "Android",
        build: 'Sample',
    },
];

config.specs =[
    'test/web/specs/demo-site/parallelization/login.spec.js',
];

exports.config = config;
