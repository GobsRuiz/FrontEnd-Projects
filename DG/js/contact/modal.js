// Modal
var modalContactForm = document.getElementById("modal-contactForm");
// Close button
var modalContactFormCloseBtn = document.getElementById("modal-contactForm-closeBtn");



// Functions
function openModalContactForm(){
    modalContactForm.style.display = "flex";
}

function closeModalContactForm() {
    modalContactFormCloseBtn.addEventListener("click", () => {
        modalContactForm.style.display = "none";
    })

    if(modalContactForm.style.display != "none"){
        window.addEventListener("click", (element) => {
            if(element.target.id === modalContactForm.id){
                modalContactForm.style.display = "none";
            }
        })
    }
}closeModalContactForm()