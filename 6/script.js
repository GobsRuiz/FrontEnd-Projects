// Body
var body = document.querySelector("body");



// Functions
function body_animationBackgroundDuration(value) {
    body.style.animationDuration = value + "s";
}



// Slider
var sliderInput = document.getElementById("slider_input");
var sliderValue = document.getElementById("slider_value");



sliderValue.innerHTML = "Valor: " + sliderInput.value;

// Functions
// Show value
sliderInput.oninput = () => {
    sliderValue.innerHTML = "Valor: " + sliderInput.value;

    body_animationBackgroundDuration(sliderInput.value);
}

// Background
sliderInput.addEventListener("mousemove", () => {
    let value = sliderInput.value * 2 + "%";
    sliderInput.style.background = `linear-gradient(90deg, rgb(31, 204, 69) ${value}, rgb(231, 231, 231) ${value})`;
})