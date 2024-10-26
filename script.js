"use strict";

let paragraph = document.getElementById("paragraph");

const submit = document.getElementById("colorButton");
const passSubmit = document.getElementById("passwordButton");

submit.addEventListener("click", button);
passSubmit.addEventListener("click", password());

function password() {
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    alert("password button pushed");
}

function button() {
    const redValue = document.getElementById("red").value;
    const greenValue = document.getElementById("green").value;
    const blueValue = document.getElementById("blue").value;

    const width = document.getElementById("width").value;

    const redBValue = document.getElementById("redB").value;
    const greenBValue = document.getElementById("greenB").value;
    const blueBValue = document.getElementById("blueB").value;
    

    /*Change paragraph text color:*/
    paragraph.style.color = rgb(redValue, greenValue, blueValue);
    paragraph.style.border = border(redBValue, greenBValue, blueBValue, width);
}

function border(redBValue, greenBValue, blueBValue, width) {
    return width + "px solid " + rgb(redBValue, greenBValue, blueBValue);
}

/**This function returns a string command of RGB color values: */
function rgb(redValue, greenValue, blueValue) {
    return "rgb(" + redValue+", " + greenValue + ", " + blueValue + ")";
}
