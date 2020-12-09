// Select all cards
var selectGameCards = document.querySelectorAll(".selectGame-card")

// Card support
var selectGameCardSupport = document.getElementById("selectGame-cardSupport");
// Btn close
var selectGameCardSupportBtnClose = document.getElementById("selectGame-cardSupport-btnClose");

// Category
var selectGameCardSupportCategory = document.getElementById("selectGame-cardSupport-category");
// Category options
var selectGameCardSupportCategoryOptions = document.querySelectorAll("#selectGame-cardSupport-category .selectGame-cardSupport-option");

// All sections
var selectGameCardSupportSections = document.querySelectorAll(".selectGame-cardSupport-section");

var currentPosition = 0;



// Function
// Open card support
function openCardSupport() {
    selectGameCards.forEach(element => {
        element.addEventListener("click", event => {
            // Get id
            var elementId = event.target.id;
            // Get div or element
            var getElement = document.getElementById(elementId);

                // Get width
                var width = (getElement.clientWidth + 26) * 3;
                // Get top
                var top = getElement.offsetTop + getElement.offsetHeight;
                
                // Get position in the array
                var position = 0;
                for (let i = 0; i < selectGameCards.length; i++) {
                    const element = selectGameCards[i];
                    if(element.id === elementId){
                        position = i;
                        currentPosition = i;
                    }
                }

                // Set attributes in the card support div
                selectGameCardSupport.style.top = top + "px";
                selectGameCardSupport.style.left = selectGameCards[0].offsetLeft + "px";
                selectGameCardSupport.style.width = width + "px";
                selectGameCardSupport.style.display = "grid";

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
                    selectGameCardSupport.style.animationDuration = "1s";
                }, 10);

                // Line spacing - selectGame-row
                var rowSpacing_margin = selectGameCardSupport_height + 40 + "px";
                rowSpacing(position, rowSpacing_margin)
        })
    });
}openCardSupport()

// Close card support
function closeCardSupport() {
    selectGameCardSupportBtnClose.addEventListener("click", () => {
        selectGameCardSupport.style.opacity = 0;
        selectGameCardSupport.style.display = 'none';
    
        selectGameCardSupportSections.forEach(element => {
            if(element.id.substring(23) !== 'category'){
                console.log("entrou")
                element.style.display = "none";
            }else{
                element.children[1].style.display = "flex";
            }
        });

        // Line spacing - selectGame - row
        var rowSpacing_margin = "20px";
        rowSpacing(currentPosition, rowSpacing_margin)
    })
}closeCardSupport()

// Row spacing
function rowSpacing(position, height) {
    var selectGameRow = document.querySelectorAll(".selectGame-row")[1];

    if(position <= 2){
        selectGameRow.style.transition = "margin-top 0.55s";
        selectGameRow.style.marginTop = height;
    }else{
        selectGameRow.style.transition = "margin-bottom 0.55s";
        selectGameRow.style.marginBottom = height;
    }
}

// Select category
function selectCategory() {
    selectGameCardSupportCategoryOptions.forEach(element => {
        element.addEventListener("click", event => {
            // Get category id
            const categoryId = event.target.id.substring(19);
            // Get section
            const section = document.getElementById("selectGame-cardSupport-"+categoryId);
            
            // Set attributes
            // Categories display none
            selectGameCardSupportCategory.children[1].style.display = "none";
            // Section display flex
            section.style.display = "flex";
            const section_height = section.clientHeight + "px";
            section.style.height = 0;

            // Animation height of the div 
            setTimeout(() => {
                section.style.opacity = 1;
                section.animate([
                    { height: 0 + "px" }, 
                    { height: section_height}
                ], {
                    duration: 300,
                });
                section.style.height = section_height;
            }, 10);
            
            setTimeout(() => {
                // Row spacing
                var selectGameCardSupport_height = selectGameCardSupport.offsetHeight;
                var rowSpacing_margin = selectGameCardSupport_height + 110 + "px";
                rowSpacing(currentPosition, rowSpacing_margin)
            }, 150);
        })
    });
}selectCategory()