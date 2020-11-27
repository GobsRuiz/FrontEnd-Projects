var responsiveHeaderIcon = document.getElementById('header-responsive-icon');
var responsiveHeaderNav = document.getElementById('header-responsive-nav');



function changeIconShape() {
    responsiveHeaderIcon.addEventListener('click', () => {
        if(responsiveHeaderIcon.classList.contains('closeIcon')){
            responsiveHeaderIcon.classList.remove('closeIcon');
        }else{
            responsiveHeaderIcon.classList.add('closeIcon')
        }
    })
}changeIconShape()

function openMenu() {
    responsiveHeaderIcon.addEventListener('click', () => {
        if(responsiveHeaderNav.offsetLeft === 0){
            responsiveHeaderNav.style.left = - responsiveHeaderNav.clientWidth + 'px';
            responsiveHeaderIcon.style.left = 20 + 'px';
            responsiveHeaderIcon.style.transition = 'left 0.53s';
        }else{
            responsiveHeaderNav.style.left = 0;
            responsiveHeaderIcon.style.left = responsiveHeaderNav.clientWidth + 'px';
            responsiveHeaderIcon.style.transition = 'left 0.5s';
        }
    })
}openMenu()