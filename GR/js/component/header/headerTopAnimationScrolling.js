var headerTop = document.getElementById("header-top");
var headerTopUserAccount = document.getElementById("header-top-userAccount");
var headerTopUserAccountIcon = document.querySelector("#header-top-userAccount i");




// Function
function headerTopAnimation() {
    window.addEventListener("scroll", () => {
        if(window.pageYOffset > 30){
            headerTop.style.height = "var(--headerTopAnimationScrolling_width)";
            headerTopUserAccount.style.padding = "var(--headerTopUserAccountScrolling_padding)";
            headerTopUserAccountIcon.style.fontSize = "var(--headerTopUserAccountIconScrolling_size)";
        }else if(window.pageYOffset < 29){
            headerTop.style.height = "var(--headerTop_width)";
            headerTopUserAccount.style.padding = "var(--headerTopUserAccount_padding)";
            headerTopUserAccountIcon.style.fontSize = "var(--headerTopUserAccountIcon_size)";
        }
    })
}headerTopAnimation()