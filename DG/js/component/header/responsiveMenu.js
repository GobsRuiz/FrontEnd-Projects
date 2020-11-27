// Top header
var topHeader_height = document.getElementById("header-top").offsetHeight;
var topHeader_height_negativeValue = topHeader_height + 100;
// Icon
var headerResponsiveMenuIcon = document.getElementById("header-responsiveMenu-icon");
// Nav
var headerResponsiveMenuNav = document.getElementById("header-responsiveMenu-nav");

// Sub menu
// Icon || Arrow
var headerSubMenuIcon = document.querySelector(".sub-menu span img");
// Li
var headerSubMenuli = document.querySelector("#header-responsiveMenu-nav ul .sub-menu ul");



// Functions
function openCloseResponsiveMenu() {
    headerResponsiveMenuIcon.addEventListener("click", () => {
        if(window.pageYOffset === 0){
            if(headerResponsiveMenuNav.style.top === topHeader_height+"px"){
                headerResponsiveMenuNav.style.top = -topHeader_height_negativeValue + "px";
                headerResponsiveMenuIcon.classList.remove("change");
            }else{
                headerResponsiveMenuNav.style.top = topHeader_height + "px";
                headerResponsiveMenuIcon.classList.add("change");
            }
        }else{
            if(headerResponsiveMenuNav.style.top === "var(--headerTopAnimationScrolling_width)"){
                headerResponsiveMenuNav.style.top = "var(--headerTopAnimationScrolling_width_negativeValue)";
                headerResponsiveMenuIcon.classList.remove("change");
            }else{
                headerResponsiveMenuNav.style.top =  "var(--headerTopAnimationScrolling_width)";
                headerResponsiveMenuIcon.classList.add("change");
            }
        }
    })
}openCloseResponsiveMenu()

function openCloseSubMenu() {
    headerSubMenuIcon.addEventListener("click", () => {
        if(headerSubMenuli.style.display == "block"){
            headerSubMenuli.style.display = "none";
        }else{
            headerSubMenuli.style.display = "block";
        }   
    })
}openCloseSubMenu()


window.addEventListener("scroll", () => {
    if(window.pageYOffset > 30){
        if(headerResponsiveMenuNav.style.top === topHeader_height+"px"){
            headerResponsiveMenuNav.style.top =  "var(--headerTopAnimationScrolling_width)";
        }
    }

    if(window.pageYOffset < 20){
        if(headerResponsiveMenuNav.style.top === "var(--headerTopAnimationScrolling_width)"){
            headerResponsiveMenuNav.style.top =  topHeader_height+"px";
        }
    }
})