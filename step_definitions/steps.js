const { I, guestBookPage } = inject();
// Add in your custom step files
const assert = require('assert');
let state = {};

Given('I get a Janus Person Record', async () => {
    state.pid = await I.getJanusPersonRecord();
});

Given('I am on an obituary page', async () => {
    I.amOnPage(guestBookPage.path + state.pid);
});

Given('I see a name appears in the Name section', async () => {
    I.seeElement(guestBookPage.fields.nameHeadingText);
});

When('I scroll to the Guest Book section', async () => {
    I.scrollIntoView(guestBookPage.fields.scrollView, guestBookPage.fields.scrollBehavior);
});

Then('I should Leave a Guest Book entry', async () => {
    guestBookPage.createGuestBookEntry("Gilbert Test", "I am so sorry for the loss.", "ghopkins@legacy.com");
});

Given('I have REST endpoints', async (table) => {
    state.endpoints = []
    for (const id in table.rows) {
        if (id < 1) {
            continue; // skip a header of a table
        }
        const cells = table.rows[id].cells;
        const url = cells[0].value;
        const statusCode = cells[1].value;

        state.endpoints.push({url, statusCode});
    }
});

When('I send a get request', async () => {
    state.statusCodeGetRequest = []
    for (const id in state.endpoints) {
        let results = await I.sendGetRequest(state.endpoints[id].url);
        state.statusCodeGetRequest.push({
            expectedStatusCode: state.endpoints[id].statusCode,
            actualStatusCode: results.status,
        })
    }
});

Then('I get the correct status code', async () => {
   for (const status in state.statusCodeGetRequest) {
       assert.equal(status.expectedStatusCode, status.actualStatusCode)
   }
});


