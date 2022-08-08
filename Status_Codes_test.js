const assert = require('assert');


Feature('Test Status Code From REST Endpoints')
    .tag("@Janus Beta")
    .tag("@Obituary Page")
    .tag("@REST")
    .tag("@Production Safe");

let endpoints = new DataTable(['url', 'statusCode']);
endpoints.add(["/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=1961673797", 404])
endpoints.add(["/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379", 200])

Data(endpoints).Scenario('task 4: Endpoint Status Code', async ({ I, current }) => {
    let results = await I.sendGetRequest(current.url);
    assert.equal(current.statusCode, results.status)
});