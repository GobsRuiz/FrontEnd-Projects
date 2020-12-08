// Section - select game
// Game cards
var gameCards = document.querySelectorAll("#selectGame .selectGame-card");
// Modal contact
var modalContact = doucment.getElementById("modalContact")
// Image
var modalContactImage = document.getElementById("modalContact-img");



// Funciton
// Open modal
function openCloseModal() {
    gameCards.forEach(element => {
        element.addEventListener("click", () => {
            modalContact.style.display = "flex";
            gameImage(element.children[0].src)
        })
    });

    modalContact.addEventListener("click", () => {
        modalContact.style.display = "none"
    })
}openCloseModal()

// Game image
function gameImage(src) {
    modalContactImage.src = src;
}

