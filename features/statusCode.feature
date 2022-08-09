@janusBeta @obituaryPage @REST @productionSafe
Feature: REST Status Code
  Verify the correct status code being returned

  Scenario: Test Status Code From REST Endpoints
    Given I have REST endpoints
      | url                                                                            | statusCode |
      | /us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=1961673797 | 404        |
      | /us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379  | 200        |
    When I send a get request
    Then I get the correct status code