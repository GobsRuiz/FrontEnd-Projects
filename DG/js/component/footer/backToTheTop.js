var buttonBackTop = document.getElementById("footer-bottom-backtop");

console.log("oi")

// Functions
function backToTheTop() {
    buttonBackTop.addEventListener("click", () => {
        window.styleMedia.transition = "all 1s";
        window.scroll(0, 0);
    })
}backToTheTop()