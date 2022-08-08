# Onboarding_Project_Test_Automation

### Relevant Commands:
- *** Add HEADLESS=true in front of each command to active headless mode.

Run all the tests for Janus Beta <br>
` npx codeceptjs run --grep '@Janus Beta'`

Run all the of the Webdriver-based tests<br>
` npx codeceptjs run --grep '@Webdriver'`

Run all the REST-based tests<br>
` npx codeceptjs run --grep '@REST'`

Run all the tests that are safe for production<br>
` npx codeceptjs run --grep '@Production Safe'`

