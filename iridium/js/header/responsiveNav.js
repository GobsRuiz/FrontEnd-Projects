var headerResponsiveNav_burguer = document.getElementById('header-responsiveNav-burguer');
var headerResponsiveNav_nav = document.getElementById('header-responsiveNav-nav');
var headerReponsiveNav_links = document.querySelectorAll('#header-responsiveNav-nav a');

var headerResponsiveNav_width = "40%";
var headerResponsiveNav_transitionDuration = "0.3s";



// Functions
// hrn = header responsive nav
function hrn_eventListener() {
    headerResponsiveNav_burguer.addEventListener('click', function() {
        hrn_burguer()
        hrn_nav()
        hrn_links()
    })
}hrn_eventListener();


function hrn_burguer() {
    headerResponsiveNav_burguer.style.transition = `left ${headerResponsiveNav_transitionDuration}`;

    if(headerResponsiveNav_burguer.style.left == headerResponsiveNav_width){
        headerResponsiveNav_burguer.style.left = "5px"
    }else{
        headerResponsiveNav_burguer.style.left = headerResponsiveNav_width;
        headerResponsiveNav_burguer.style.marginLeft = "5px";
    }
}
function hrn_nav() {
    headerResponsiveNav_nav.style.transition = `width ${headerResponsiveNav_transitionDuration}`;

    if(headerResponsiveNav_nav.style.width == headerResponsiveNav_width){
        headerResponsiveNav_nav.style.width = "0";
    }else{
        headerResponsiveNav_nav.style.width = headerResponsiveNav_width;
    }
}
function hrn_links() {
    headerReponsiveNav_links.forEach(element => {
        if(element.style.display == 'block'){
            element.style.display = 'none';
        }else{
            element.style.display = 'block';
        }
    });
}
