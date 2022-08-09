exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.qa-legacy.com',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: [ "--headless"]
        }
      },
      port: 4444,
      restart: true
    },
    Db: {
      require: './db_helper.js'
    },
    REST: {
      endpoint: 'https://www.qa-legacy.com',
      prettyPrintJson: true,
      onRequest: (request) => {
      }
    }
  },
  include: {
    I: './steps_file.js',
    guestBookPage: './pages/GuestBook.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'Onboarding_Project_Test_Automation'
}