var config = require('./screener.config');

//If you would like to run on Edge or Safari, you need to have a Sauce Labs account
  config.browsers = [
    {
      browserName: 'microsoftedge',
      version: '17.17134'
    },
    {
      browserName: 'safari',
      version: '11.1'
    }
  ];
  config.sauce = {
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
      maxConcurrent: 100, // optional available concurrency you have from Sauce Labs
      //extendedDebugging: true, // optional
      //tunnelIdentifier: 'MyTunnel01' // optional
    };

  module.exports = config;