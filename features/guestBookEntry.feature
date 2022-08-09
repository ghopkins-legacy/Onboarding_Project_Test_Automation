@janusBeta @guestBook @webdriver
Feature: Leaving a Guest Book entry
  Verifying a guest can
  View a obituary page
  Check obituary page has a name in the correct section
  Scroll to Guest Book section
  Successfully leave a Guest Book entry


  Scenario: Guest Book entry
    Given I get a Janus Person Record
    Given I am on an obituary page
    And I see a name appears in the Name section
    When I scroll to the Guest Book section
    Then I should Leave a Guest Book entry