const {argv} = require('yargs');

exports.nativeAppComparison = [
    [
        'native-app-compare',
        {
            // Mandatory
            baselineFolder: 'test/image-baseline',
            screenshotPath: '.tmp/image-compare',
            // Optional
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutNavigationBar: true,
            blockOutIphoneXBottomBar: true,
            //     ignoreAntialiasing: true,
            imageNameFormat: '{tag}-{deviceName}-{platformName}-{platformVersion}',
            savePerDevice: true,
            returnAllCompareData: true,
            debug: argv.debug || false,
        },
    ],
];
