// Parent div
var modalLanguages = document.getElementById("modal-languages");
// Buttons
var openButtonModalLanguages = document.getElementById("footer-bottom-languages");
var closeButtonModalLanguages = document.getElementById("modal-languages-close");



// Functions
function openCloseModalLanguages() {
    // Open
    openButtonModalLanguages.addEventListener("click", () => {
        modalLanguages.style.display = "flex";
    })

    // Close
    closeButtonModalLanguages.addEventListener("click", () => {
        modalLanguages.style.display = "none";
    })
    modalLanguages.addEventListener("click", () => {
        modalLanguages.style.display = "none";
    })
}openCloseModalLanguages()