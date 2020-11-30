// Footer
var footer = document.getElementById("footer");
var footer_height = document.getElementById("footer").clientHeight;
// Menu
var footerMenu = document.getElementById("footer-responsiveMenu");
var footerMenu_height = document.getElementById("footer-responsiveMenu").clientHeight - 10;
// Button
var footerOpenResponsiveMenu = document.getElementById("footer-top-openResponsiveMenu");


footerMenu.style.display = "none";
// Function
function footerOpenCloseMenu() {
    footerOpenResponsiveMenu.addEventListener("click", () => {
        if(footerMenu.style.display == "none"){
            footerMenu.style.display = "flex";
            footerOpenResponsiveMenu.classList.add("change")
            setTimeout('footer.style.marginTop = footerMenu_height + "px"', 150);

            if(screen.width > 800){
                setTimeout('footerMenu.style.bottom = footer_height + "px"', 20);
            }else{
                setTimeout('footerMenu.style.bottom = 10 + footer_height + "px"', 20);
            }
        }else if(footerMenu.style.display == "flex"){
            footer.style.marginTop = 0;
            setTimeout('footerMenu.style.bottom = "-100px"', 150);
            footerOpenResponsiveMenu.classList.remove("change")
            setTimeout('footerMenu.style.display = "none"', 210);
        }
    })
}footerOpenCloseMenu()