const { config } = require('./wdio.shared.conf');

// ======
// Appium
// ======
config.services = config.services.concat('appium');
config.appium = {
    command: 'appium',
};
config.port = 4723;

exports.config = config;
