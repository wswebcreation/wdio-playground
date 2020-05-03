const { join } = require('path');
const { config } = require('./wdio.sauce.chrome.conf');

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/web/specs/some-extra-tests/image.comparison.spec.js',
];

// ========
// Services
// ========
config.services = [
    'sauce',
    [
        'image-comparison',
        {
            baselineFolder: join(process.cwd(), './test/sauceLabsBaseline/'),
            formatImageName: '{tag}-{browserName}-{width}x{height}',
            screenshotPath: join(process.cwd(), '.tmp/'),
            savePerInstance: true,
            autoSaveBaseline: true,
            clearRuntimeFolder: true,
        },
    ],
];

config.before = () => browser.setWindowSize(1366, 768);

exports.config = config;





