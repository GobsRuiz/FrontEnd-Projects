var gamesPlot = document.querySelector(".games-plot-text");
var gamesPlot_height = gamesPlot.clientHeight;



if(screen.width > 800){
    if(gamesPlot_height > 1000){
        gamesPlot.classList.add('overflowScroll')
    }
}