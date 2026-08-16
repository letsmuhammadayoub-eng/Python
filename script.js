// ===============================
// DOWNLOAD CV
// ===============================

function downloadCV() {
    window.open("Muhammad_Ayoub_CV.pdf", "_blank");
}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function () {

        const name = contactForm.querySelector(
            'input[name="name"]'
        ).value;

        alert(
            "Thank you " + name +
            "!\n\nYour message is being sent."
        );

    });

}
