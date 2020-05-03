exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    // ============
    // Capabilities
    // ============
    maxInstances: 100,
    // For the rest see the specific configs

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'silent',
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 15000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 180000,
    },

    // Define specific suites
    suites:{
        demoSite:[
            './test/web/specs/demo-site/parallelization/checkout.spec.js',
            './test/web/specs/demo-site/parallelization/itemlist.spec.js',
            './test/web/specs/demo-site/parallelization/login.spec.js',
        ],
        extra:[
            './test/web/specs/some-extra-tests/angular.spec.js',
            './test/web/specs/some-extra-tests/async.spec.js',
            './test/web/specs/some-extra-tests/call.spec.js',
            './test/web/specs/some-extra-tests/login.sing.in.spec.js',
        ],
    },

    // ========
    // Services
    // ========
    services: [],

    // =====
    // Hooks
    // =====
    beforeSession: function() {
        require('@babel/register');
    },
}
