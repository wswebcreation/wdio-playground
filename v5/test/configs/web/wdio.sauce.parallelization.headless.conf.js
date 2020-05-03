const { config } = require('../wdio.sauce.shared.conf');
const { argv } = require('yargs');

// =================
// Service Providers
// =================
config.user = 'admin';
config.key = process.env.SAUCE_ACCESS_KEY_HEADLESS;
config.headless = true;

// ============
// Capabilities
// ============
config.maxInstances = 100;
config.capabilities = [
    {
        browserName: 'chrome',
        ...(argv.build ? { build: argv.build } : {}),
    },
    {
        browserName: 'firefox',
        ...(argv.build ? { build: argv.build } : {}),
    },
];

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/demo-site/parallelization/*.spec.js',
];

exports.config = config;
