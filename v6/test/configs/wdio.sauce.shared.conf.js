const {config} = require('./wdio.shared.conf');

// =================
// Service Providers
// =================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = 'eu'; // For us cloud, change this to 'us'

// ========
// Services
// ========
config.services = config.services.concat(
    [['sauce',
        // {
        //     sauceConnect: true,
        //     sauceConnectOpts: {
        //         logfile: './sc-test.log',
        //     }
        // },
    ]]);

exports.config = config;
