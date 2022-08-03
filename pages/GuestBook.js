const { I } = inject();

module.exports = {

  // insert your locators and methods here
    path: "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379",
    fields: {
        nameHeadingText: "//h2[@data-component='NameHeadingText']",
        name: {xpath: "//input[@data-component='TextBoxField']"},
        message: {xpath: "//textarea[@data-component='TextAreaField']"},
        scrollView: {xpath: "//div[@data-component='GuestbookBox']"},
        scrollBehavior: { behavior: "smooth", block: "center", inline: "center" },
        email: {xpath: "//input[@data-component='EmailField']"},
    },
    submitButton: "Submit Your Message",



    /*
     * Also, create a function in the Page Object called createGuestBookEntry that takes in an object with the
     * information for the Guest Book form and completes/submits the Guest Book Entry form
     */


    createGuestBookEntry(name, message, email){
        // need to click inside in order to view other options and submit button
        I.click(this.fields.name);

        // actions
        I.fillField(this.fields.name, name);
        I.fillField(this.fields.message, message);
        I.fillField(this.fields.email, email);

        // complete Guest Book form
        I.click(this.submitButton)
    },


}
