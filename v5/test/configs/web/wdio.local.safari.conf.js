const { config } = require('../wdio.shared.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/demo-site/parallelization/*.spec.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
config.capabilities = [
    {
        browserName: 'safari',
        maxInstances: 1,
    },
];

// ========
// Services
// ========
config.services = [ 'selenium-standalone' ];


// ========
// Hooks
// ========
config.before = ()=>{
    // browser.setWindowSize(504, 989);
    browser.setViewportSize({
        width: 504,
        height: 800
    });
}

exports.config = config;
