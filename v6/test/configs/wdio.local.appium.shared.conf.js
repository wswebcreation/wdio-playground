const {config} = require('./wdio.shared.conf');

// ======
// Appium
// ======
config.services = config.services.concat([
    [
        'appium',
        {
            command: 'appium',
        }
    ],
]);
config.port = 4723;

exports.config = config;
