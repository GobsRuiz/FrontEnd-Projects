var newsCardsRows = document.querySelectorAll(".news-cards-row");

var numberOfCharacters = 116;
var numberOfCharacters_responsive = 50;
var newsCardTitles = []



// Functions
function getNewsCardTitle() {
    for (let i = 0; i < newsCardsRows.length; i++) {
        newsCardTitles[i] = [
            newsCardsRows[i].children[0].children[1].children[0],
            newsCardsRows[i].children[1].children[1].children[0]
        ] 
    }
}getNewsCardTitle()

function characterLimit() {
    for (let i = 0; i < newsCardTitles.length; i++) {
        const element = newsCardTitles[i][0];
        const element2 = newsCardTitles[i][1];

        if(screen.width > 1024) {
            if(element.innerText.length >= numberOfCharacters){
                element.innerText = element.innerText.substring(0, numberOfCharacters - 5) + "...";
            }
            if(element2.innerText.length >= numberOfCharacters){
                element2.innerText = element2.innerText.substring(0, numberOfCharacters - 5) + "...";
            }
        }else if(screen.width < 1024) {
            if(element.innerText.length >= numberOfCharacters_responsive){
                element.innerText = element.innerText.substring(0, numberOfCharacters_responsive - 5) + "...";
            }
            if(element2.innerText.length >= numberOfCharacters_responsive){
                element2.innerText = element2.innerText.substring(0, numberOfCharacters_responsive - 5) + "...";
            }
        }
    }
}characterLimit()

