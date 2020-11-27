var headerBackgroudnImages = document.getElementById("header-backgroundImages");
var urls = [
    '../images/home/header/background-images/rdr2.jpg',
    '../images/home/header/background-images/smite.jpg',
    '../images/home/header/background-images/pubg.jpg',
    '../images/home/header/background-images/gtav.jpeg',
    '../images/home/header/background-images/fortnite.jpg',
    '../images/home/header/background-images/valorant.jfif',
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