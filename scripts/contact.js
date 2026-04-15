// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// get the main contact page container
const contactPage = document.getElementById("contact-page");

// get the submit button
const submitButton = document.getElementById("submit-button");

// when the button is clicked:
submitButton.addEventListener("click", function(event) {

    // prevent the form from refreshing the page
    event.preventDefault();

    // replace the entire main content with a thank-you message
    contactPage.innerHTML = "<p id='thank-you'>Thank you for your message</p>";

    // style the message to be 24px
    const thankYou = document.getElementById("thank-you");
    thankYou.style.fontSize = "24px";
});
