// Feature('Leaving a Guest Book entry')
//     .tag("@Janus Beta")
//     .tag("@Guestbook")
//     .tag("@Webdriver");
//
// Scenario('task 1', async ({ I , guestBookPage}) => {
//     let personRecord = await I.getJanusPersonRecord();
//     I.amOnPage(guestBookPage.path + personRecord);
//     I.seeElement(guestBookPage.fields.nameHeadingText);
//
//     I.scrollIntoView(guestBookPage.fields.scrollView, guestBookPage.fields.scrollBehavior);
//     guestBookPage.createGuestBookEntry("Gilbert Test", "I am so sorry for the loss.", "ghopkins@legacy.com");
// });