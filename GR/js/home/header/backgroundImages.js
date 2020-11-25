var headerBackgroudnImages = document.getElementById("header-backgroundImages");
var urls = [
    '../images/header/background-images/rdr2.jpg',
    '../images/header/background-images/smite.jpg',
    '../images/header/background-images/gtav.jpeg',
]
var index = 0;


// Functions
function changeImage() {
    if(index < urls.length){
        headerBackgroudnImages.style.backgroundImage = `url(${urls[index]})`;
        index += 1;
    }else{
        index = 0;
        headerBackgroudnImages.style.backgroundImage = `url(${urls[index]})`;
    }
}changeImage()
setInterval(() => {
    changeImage()
}, 3000);