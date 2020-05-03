var Steps = require('screener-runner/src/steps');
module.exports = {
    // full repository name for your project:
    projectRepo: 'screener-runner-demo',
  
    // this example assumes Environment Variables listed below exist on your system:
    apiKey: process.env.SCREENER_API_KEY,
  
    // array of UI states to capture visual snapshots of.
    // each state consists of a url and a name.
    states: [
      {
        url: 'https://www.saucedemo.com/',
        name: 'Login page'
      },
      {
        url: 'https://courses.ultimateqa.com/courses/selenium-with-c',
        name: 'Selenium course page'
      },
      {
        url: 'https://courses.ultimateqa.com',
        name: 'Courses page'
      },
      {
        //This page has dynamic elements that only appear when they are scrolled into view
        //so we run a script to preload those elements
        url: 'https://www.ultimateqa.com',
        name: 'Ultimate QA Home Page',
        steps: new Steps()
        .executeScript('window.scrollTo(0,document.body.scrollHeight)')
        .wait(4000)
        .snapshot('Loaded')
        .end()
      },
      {
        url: 'https://www.ultimateqa.com/blog',
        name: 'Ultimate QA Blog Page'
      },
    ],
    //What are all of the browsers that we want to test against
    browsers: [
      {
        browserName: 'chrome'
      },
      {
        browserName: 'firefox'
      },
      {
        browserName: 'internet explorer',
        version: '11'
      }
    ],
    resolutions: [
        '1024x768',
        {
            deviceName: 'iPhone X'
        },
        {
            deviceName: 'iPhone 8 Plus'
        },
        {
            deviceName: 'iPhone 8'
        },
        {
            deviceName: 'iPhone 7 Plus'
        },
        {
            deviceName: 'iPhone 7'
        }
      ],
      sauce: {
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        maxConcurrent: 100, // optional available concurrency you have from Sauce Labs
        //extendedDebugging: true, // optional
        //tunnelIdentifier: 'MyTunnel01' // optional
      }
  };