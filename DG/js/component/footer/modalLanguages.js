// Parent div
var modalLanguages = document.getElementById("modal-languages");
var modalLanguagesContent = document.getElementById("modal-languages-content");
// Buttons
var openButtonModalLanguages = document.getElementById("footer-bottom-languages");
var closeButtonModalLanguages = document.getElementById("modal-languages-close");


modalLanguages.style.display = "none";
// Functions
function openCloseModalLanguages() {
    // Open
    openButtonModalLanguages.addEventListener("click", () => {
        if(modalLanguages.style.display === "none"){
            modalLanguages.style.display = "flex";
            setTimeout('modalLanguages.style.opacity = 1', 10);
            setTimeout('modalLanguagesContent.style.top = 0', 50);
            setTimeout(() => {
                modalLanguagesContent.style.borderWidth = "0.7vh";
            }, 280);
        }
    })

    // Close
    closeButtonModalLanguages.addEventListener("click", () => {
        modalLanguagesContent.style.top = "-100vh";
        setTimeout('modalLanguages.style.opacity = 0', 20);
        setTimeout(() => {
            modalLanguages.style.display = "none";
            modalLanguagesContent.style.borderWidth = "0";
        }, 300);
    })
    modalLanguages.addEventListener("click", () => {
        modalLanguagesContent.style.top = "-100vh";
        setTimeout('modalLanguages.style.opacity = 0', 20);
        setTimeout(() => {
            modalLanguages.style.display = "none";
            modalLanguagesContent.style.borderWidth = "0";
        }, 300);
    })
}openCloseModalLanguages()