const hireButton = document.querySelector(".hero button");

hireButton.addEventListener("click", function () {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});

function downloadCV() {
    window.open("Muhammad-Ayoub-CV.pdf", "_blank");
}

function showProject(projectName) {
    alert("You selected: " + projectName);
}