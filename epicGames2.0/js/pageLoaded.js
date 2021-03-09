function functionPageLoaded() {
    // Logo
    let logo = document.getElementById("pageLoaded")


    // Transition 
    logo.style.transition = "opacity 2s ease-in";

    // Envent listener - load
    window.addEventListener("load", () => {
        // Show logo
        logo.style.opacity = 1;

        // disappear logo
        setTimeout(() => {
            logo.style.opacity = 0;
        }, 3000);

        setTimeout(() => {
            logo.style.display = "none"
            // logo - display

            // Body2 - show
            body2.style.display = "flex"

            setTimeout(() => {
                body2.style.opacity = "1";
                body2.style.transform = "scale(1)";
            }, 20);
        }, 5000);
    })
}functionPageLoaded()