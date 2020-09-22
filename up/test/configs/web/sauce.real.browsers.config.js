const { config } = require('../wdio.sauce.shared.conf');
const build = `Sauce Real Device browser - ${new Date().getTime()}`;

// ============
// Capabilities
// ============
config.capabilities = [
    {
        name: 'Run on deviceID iOS',
        browserName: 'safari',
        deviceName: 'iPhone XS',
        platformName: 'iOS',
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: "Run on deviceID Android",
        browserName: 'chrome',
        deviceName: 'Samsung_Galaxy_S10_ws',
        platformName: 'Android',
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run on device description iOS',
        browserName: 'safari',
        deviceName: 'iPhone XS',
        platformName: 'iOS',
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: "Run on device description Android",
        browserName: 'chrome',
        deviceName: 'Samsung Galaxy S10',
        platformName: 'Android',
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run on deviceName regex iOS - iPhone [678]?.*',
        browserName: 'safari',
        deviceName: 'iPhone [678]?.*',
        platformName: 'iOS',
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: "Run on deviceName regex Android - Samsung Galaxy S?.*",
        browserName: 'chrome',
        deviceName: 'Samsung Galaxy S?.*',
        platformName: 'Android',
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run on major iOS version - 13',
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '13',
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run on minor iOS version - 12.1',
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '12.1',
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run on patch iOS version - 12.4.1',
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '12.4.1',
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run on major Android version - 7',
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '7',
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run on minor Android version - 7.1',
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '7.1',
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run on patch Android version - 7.1.2',
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '7.1.2',
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run iOS phone only',
        browserName: 'safari',
        platformName: 'iOS',
        phoneOnly: true,
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run Android tablet only',
        browserName: 'chrome',
        platformName: 'Android',
        tabletOnly: true,
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run iOS private devices only',
        browserName: 'safari',
        platformName: 'iOS',
        privateDevicesOnly: true,
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
    {
        name: 'Run Android private devices only',
        browserName: 'chrome',
        platformName: 'Android',
        privateDevicesOnly: true,
        //
        specs: ['./test/web/specs/demo-site/login.spec.js'],
        build
    },
];

exports.config = config;
