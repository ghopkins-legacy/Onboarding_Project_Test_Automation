const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();


exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.qa-legacy.com',
      browser: 'chrome',
      port: 4444,
      restart: true
      // windowSize: '1920x1680'
    },
    Db: {
      require: './db_helper.js',
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
  bootstrap: null,
  mocha: {},
  name: 'Onboarding_Project_Test_Automation',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}