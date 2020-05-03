const { config } = require('./wdio.shared.conf');

// =================
// Service Providers
// =================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = 'eu';
// config.sauceConnect = true;

// ========
// Services
// ========
config.services = config.services.concat('sauce');

exports.config = config;
