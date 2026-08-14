// ===============================
// DOWNLOAD CV
// ===============================

function downloadCV() {
    window.open("Muhammad_Ayoub_CV.pdf", "_blank");
}


// ===============================
// PROJECT BUTTON
// ===============================




// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector(
        '.contact input[type="text"]'
    ).value;

    const email = document.querySelector(
        '.contact input[type="email"]'
    ).value;

    const message = document.querySelector(
        ".contact textarea"
    ).value;


    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

        return;
    }


    alert(
        "Thank you " + name +
        "!\n\nYour message has been received."
    );


    contactForm.reset();

});
