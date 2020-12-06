// Slider
var gamesSliderImages = document.querySelector(".games-slider-images");
// Buttons
var gamesSliderBtn = document.querySelectorAll(".games-slider-btn")
// Images
var gamesSliderImagesDivs = document.querySelectorAll(".games-slider-image");
var gamesSliderImagesDivsIMG = document.querySelectorAll(".games-slider-image img");

var numberOfImages = 0;
if(screen.width > 1024){
    numberOfImages = 3;
}else if(screen.width > 700){
    numberOfImages = 2;
}else{
    numberOfImages = 1;
    gamesSliderImagesDivsIMG.forEach(element => {
        element.style.width = '100%';
    });
}

var windowSize = window.innerWidth;
var widthSize = windowSize / numberOfImages;
var heightSize = windowSize / 5;
var imagesElementCount = gamesSliderImages.childElementCount - numberOfImages;
var index = 0;
var translatex = 0;


// Function
function sliderImagesSize() {
    gamesSliderImagesDivs.forEach(element => {
        element.style.minWidth = widthSize + "px";
        element.style.maxWidth = widthSize + "px";
        element.style.minHeight = heightSize + "px";
        element.style.maxHeight = heightSize + "px";
    });
}sliderImagesSize()

function sliderBtns() {
    gamesSliderBtn.forEach(element => {
        element.addEventListener("click", event => {
            if(event.target.classList[2] === "games-slider-nextBtn"){
                if(index === imagesElementCount){
                    index = 0;
                    translatex = 0;
                }else{
                    index += 1;
                    translatex -= widthSize;
                }
                sliderChangeImages();
            }else if(event.target.classList[2] === "games-slider-prevBtn"){
                if(index === 0){
                    index = imagesElementCount;
                    translatex -= imagesElementCount * widthSize;
                }else{
                    index -= 1;
                    translatex += widthSize;
                }
                sliderChangeImages();
            }
        })
    })
}sliderBtns()

function sliderChangeImages() {
    gamesSliderImages.style.transform = `translateX(${translatex}px)`; 
}

