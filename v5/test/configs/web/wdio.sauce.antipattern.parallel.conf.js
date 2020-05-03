const { config } = require('./wdio.sauce.antipattern.conf');

// ============
// Capabilities
// ============
config.maxInstances = 100;

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/demo-site/antipattern/*.spec.js',
];

exports.config = config;





