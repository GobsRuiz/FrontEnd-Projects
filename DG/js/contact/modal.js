// Modal
var modalContactForm = document.getElementById("modal-contactForm");
// Content
var modalContactFormContent = document.getElementById("modal-contactForm-content");
// Close button
var modalContactFormCloseBtn = document.getElementById("modal-contactForm-closeBtn");
// Game image
var modalContactFormGameImage = document.getElementById("modal-ContactForm-gameImage");


// Functions
function openModalContactForm(src){
    modalContactForm.style.display = "flex";
    setTimeout(() => {
        modalContactForm.style.opacity = 1;
    }, 10)
    setTimeout(() => {
        modalContactFormContent.style.top = 0;
    }, 50)

    modalContactFormGameImage.src = src;
}

function closeModalContactForm() {
    modalContactFormCloseBtn.addEventListener("click", () => {
        animateCloseContactForm()
    })

    if(modalContactForm.style.display != "none"){
        window.addEventListener("click", (element) => {
            if(element.target.id === modalContactForm.id){
                animateCloseContactForm()
            }
        })
    }
}closeModalContactForm()

function animateCloseContactForm() {
    modalContactFormContent.style.top = "-100vh";

        setTimeout(() => {
            modalContactForm.style.opacity = 0;
        }, 20)

        setTimeout(() => {
            modalContactForm.style.display = "none";
        }, 300)
}