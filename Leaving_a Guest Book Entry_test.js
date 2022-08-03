Feature('Leaving a Guest Book entry');

Scenario('task 1', ({ I , guestBookPage}) => {
    I.amOnPage(guestBookPage.path);
    I.wait(1);

    I.seeElement(guestBookPage.fields.nameHeadingText);

    // // Guest BOOK:
    I.scrollIntoView(guestBookPage.fields.scrollView, guestBookPage.fields.scrollBehavior);
    I.wait(2);

    guestBookPage.createGuestBookEntry("Gilbert Test", "I am so sorry for the loss.", "ghopkins@legacy.com");
    I.wait(2);
});