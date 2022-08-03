Feature('Leaving a Guest Book entry');

Scenario('task 1', ({ I }) => {
    I.amOnPage("/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379");
    I.wait(1);

    I.seeElement("//h2[@data-component='NameHeadingText']");

    // // Guest BOOK:
    I.scrollIntoView({xpath: "//div[@data-component='GuestbookBox']"}, { behavior: "smooth", block: "center", inline: "center" });
    I.wait(2);

    // need to click inside in order to view other options and submit button
    I.click({xpath: "//input[@data-component='TextBoxField']"});

    I.fillField({xpath: "//input[@data-component='TextBoxField']"}, "Gilbert Test");
    I.fillField({xpath: "//textarea[@data-component='TextAreaField']"}, "I am so sorry for the loss.");

    I.fillField({xpath: "//input[@data-component='EmailField']"}, "ghopkins@legacy.com");

    I.click("Submit Your Message");
    I.wait(2);
});