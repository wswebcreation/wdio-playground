const {config} = require('../wdio.sauce.shared.conf');
const build = `Sauce Real Device browser - ${new Date().getTime()}`;

// ============
// Capabilities
// ============
config.capabilities = [
    // {
    //     name: 'Run on iOS with remote app',
    //     app: 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.3.0/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.3.0.ipa',
    //     deviceName: 'iPhone [XS|11]?.*',
    //     platformName: 'iOS',
    //     //
    //     specs: ['./test/app/specs/sample-app/login.spec.js'],
    //     build
    // },
    // {
    //     name: 'Run on Android with remote app',
    //     app: 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.3.0/Android.SauceLabs.Mobile.Sample.app.2.3.0.apk',
    //     deviceName: 'Samsung Galaxy S[8|9|10|20]?.*',
    //     platformName: 'Android',
    //     appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    //     //
    //     specs: ['./test/app/specs/sample-app/login.spec.js'],
    //     build
    // },
    // {
    //     name: 'Run on iOS Sim with remote app',
    //     app: 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.3.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.3.0.zip',
    //     deviceName: 'iPhone XS Simulator',
    //     platformName: 'iOS',
    //     platformVersion: '13.4',
    //     //
    //     specs: ['./test/app/specs/sample-app/login.spec.js'],
    //     build
    // },
    // {
    //     name: 'Run on Android Emu with remote app',
    //     app: 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.3.0/Android.SauceLabs.Mobile.Sample.app.2.3.0.apk',
    //     deviceName: 'Google Pixel 3a XL GoogleAPI Emulator',
    //     platformName: 'Android',
    //     platformVersion: '10.0',
    //     appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    //     appiumVersion: '1.17.1',
    //     //
    //     specs: ['./test/app/specs/sample-app/login.spec.js'],
    //     build
    // },
    {
        deviceName: 'Google Pixel XL',
        platformName: 'Android',
        app:'storage:4af973e4-fff0-4683-93a6-d817fafccb26',
        specs:['./test/app/specs/xcloud.spec.js']
    }
];

exports.config = config;
