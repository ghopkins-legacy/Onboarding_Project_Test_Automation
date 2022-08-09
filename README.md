# Onboarding_Project_Test_Automation

### Relevant Commands:
- *** To remove headless comment out chromeOptions in codecept.conf.js file.
- chromeOptions is inside of helper object: (helpers>WebDriver>DesiredCapabilities>chromeOptions)

Run all the tests for Janus Beta <br>
` npx codeceptjs run --grep '@janusBeta'`

Run all the of the Webdriver-based tests<br>
` npx codeceptjs run --grep '@webdriver'`

Run all the REST-based tests<br>
` npx codeceptjs run --grep '@REST'`

Run all the tests that are safe for production<br>
` npx codeceptjs run --grep '@productionSafe'`