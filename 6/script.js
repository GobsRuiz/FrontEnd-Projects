// Slider
var sliderInput = document.getElementById("slider_input");
var sliderValue = document.getElementById("slider_value");



sliderValue.innerHTML = sliderInput.value;

// Functions
// Show value
sliderInput.oninput = () => {
    sliderValue.innerHTML = sliderInput.value;
}

// Background
sliderInput.addEventListener("mousemove", () => {
    let value = sliderInput.value + "%";
    sliderInput.style.background = `linear-gradient(90deg, rgb(31, 204, 69) ${value}, rgb(231, 231, 231) ${value})`;
})