// Select all cards
var selectGameRow = document.querySelectorAll(".selectGame-row")
var selectGameCards = document.querySelectorAll(".selectGame-card")

// Card support
var selectGameCardSupport = document.getElementById("selectGame-cardSupport");
// Btn close
var selectGameCardSupportBtnClose = document.getElementById("selectGame-cardSupport-btnClose");

// Category
var selectGameCardSupportCategory = document.getElementById("selectGame-cardSupport-category");
var selectGameCardSupportCategoryGameImage = document.getElementById("selectGame-cardSupport-category-gameImage");

// Category options
var selectGameCardSupportCategoryOptions = document.querySelectorAll("#selectGame-cardSupport-category .selectGame-cardSupport-categoryOption");

// All options
var selectGameCardSupportOptions = document.querySelectorAll(".selectGame-cardSupport-options");

var currentPosition = 0;



// Functions
// Event listener
function eventListener() {
    selectGameCards.forEach(element => {
        element.addEventListener("click", event => {

            // Get position in the array
            var position = 0;
            for (let i = 0; i < selectGameCards.length; i++) {
                const element = selectGameCards[i];
                if(element.id === event.target.id){
                    position = i;
                }
            }

            // Condition
            if(selectGameCardSupport.style.display == "grid"){
                if(currentPosition <= 2 && position <= 2 || currentPosition > 2 && position > 2){
                    var getElement = document.getElementById(event.target.id);
                    selectGameCardSupportCategoryGameImage.src = getElement.children[0].src;
                    return;
                }else{
                    var cardSupportOptions = document.querySelectorAll(".selectGame-cardSupport-options");

                    cardSupportOptions.forEach(element => {
                        if(element.style.display != "none"){
                            element.animate([
                                { top: 0}
                            ], {
                                duration: 250,
                            });

                            setTimeout(() => {
                                element.style.display = "none";
                            }, 250)
                        }
                    });

                    setTimeout(() => {
                        selectGameCardSupport.style.overflow = "hidden";
                            selectGameCardSupport.animate([
                                { height: selectGameCardSupport.clientHeight + "px"}, 
                                { height: 0}
                            ], {
                                duration: 400,
                        });
                    }, 250);

                    setTimeout(() => {
                        var rowSpacing_margin = "20px";
                        rowSpacing(rowSpacing_margin)
                    }, 280);

                    setTimeout(() => {
                        selectGameCardSupport.style.opacity = 0;
                        selectGameCardSupport.style.display = "none";
                    }, 650)

                    setTimeout(() => {
                        currentPosition = position;
                        openCardSupport(event.target.id)
                    }, 700);
                }
            }else{
                currentPosition = position;
                openCardSupport(event.target.id)
            } 
        })
    })
}eventListener()

// Open card support
function openCardSupport(elementId) {
    // Get div or element
    var getElement = document.getElementById(elementId);

    // Get width
    var width = (getElement.clientWidth + 26) * 3;
    // Get top
    var top = getElement.offsetTop + getElement.offsetHeight;
    
    // Set attributes in the card support div
    selectGameCardSupport.style.top = top + "px";
    selectGameCardSupport.style.left = selectGameCards[0].offsetLeft + "px";
    selectGameCardSupport.style.width = width + "px";
    selectGameCardSupport.style.display = "grid";
    selectGameCardSupport.style.overflow = "hidden";

    // Get height of the div card support
    var selectGameCardSupport_height = selectGameCardSupport.offsetHeight;

    // Animation height of the div card support
    setTimeout(() => {
        selectGameCardSupport.style.opacity = 1;
        selectGameCardSupport.animate([
            { height: 0 + "px" }, 
            { height: selectGameCardSupport_height + "px"}
        ], {
            duration: 400,
        });
    }, 10);

    setTimeout(() => {
        selectGameCardSupport.style.overflow = "visible";
    }, 420)

    // Line spacing - selectGame-row
    var rowSpacing_margin = selectGameCardSupport_height + 40 + "px";
    rowSpacing(rowSpacing_margin)

    // Game image
    selectGameCardSupportCategoryGameImage.src = getElement.children[0].src;
}

// Close card support
function closeCardSupport() {
    selectGameCardSupportBtnClose.addEventListener("click", () => {
        
        var cardSupportOptions = document.querySelectorAll(".selectGame-cardSupport-options");

        cardSupportOptions.forEach(element => {
            if(element.style.display != "none"){
                element.animate([
                    { top: 0}
                ], {
                    duration: 250,
                });

                setTimeout(() => {
                    element.style.display = "none";
                }, 250)
            }
        });
        
        setTimeout(() => {
            selectGameCardSupport.style.overflow = "hidden";
                selectGameCardSupport.animate([
                    { height: selectGameCardSupport.clientHeight + "px"}, 
                    { height: 0}
                ], {
                    duration: 400,
            });
        }, 250);
        
        // Line spacing - selectGame - row
        setTimeout(() => {
            var rowSpacing_margin = "20px";
            rowSpacing(rowSpacing_margin)
        }, 280)

        setTimeout(() => {
            selectGameCardSupport.style.opacity = 0;
            selectGameCardSupport.style.display = "none";
        }, 650);
    })
}closeCardSupport()

// Row spacing
function rowSpacing(height) {
    var selectGameRow = document.querySelectorAll(".selectGame-row")[1];

    if(currentPosition <= 2){
        selectGameRow.style.transition = "margin-top 0.55s";
        selectGameRow.style.marginTop = height;
    }else{
        selectGameRow.style.transition = "margin-bottom 0.55s";
        selectGameRow.style.marginBottom = height;
    }
}

// Selected category
function selectedCategoryOption() {
    selectGameCardSupportCategoryOptions.forEach(element => {
        element.addEventListener("click", event => {
            const elementId = event.target.id.substr(19);
            var categoryOption = document.getElementById(event.target.id);
            var div = document.getElementById("selectGame-cardSuport-"+elementId);
            var divChildrens = document.querySelectorAll("#selectGame-cardSuport-"+elementId+" p");

            if(div.style.display !== "block"){
                selectGameCardSupportOptions.forEach(element => {
                    element.style.display = "none";
                });

                div.style.display = "block";
                var rowSpacing_margin = selectGameCardSupport.clientHeight + div.clientHeight + 40 + "px";
                rowSpacing(rowSpacing_margin)
                div.style.display = "none";
    
                var topValue = categoryOption.offsetTop + categoryOption.clientHeight + "px"; 
    
                setTimeout(() => {
                    div.style.display = "block";
                    div.animate([
                        {top: 0+"px"},
                        {top: topValue}
                    ], {
                        duration: 300
                    })
                }, 15);
                
                div.style.top = topValue; 
                div.style.left = categoryOption.offsetLeft + "px";
            }

            
            divChildrens.forEach(element => {
                element.addEventListener("click", event => {
                    selectedOption()
                })
            });
        })
    });
}selectedCategoryOption()

// Selected option
function selectedOption() {
    openModalContactForm(selectGameCardSupportCategoryGameImage.src)
}