const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
       temp = Number(textBox.value);
       temp = temp * 9 / 5 + 32; // The formula for coverting to Celsius to Farenheit
       result.textContent = temp.toFixed(1) + "ºF";
    }
    else if(toCelsius.checked){
       temp = Number(textBox.value);
       temp = (temp - 32) * (5/9); // The formula for coverting to Farenheit to Celsius
       result.textContent = temp.toFixed(1) + "ºC";
    }
    else {
        result.textContent = "Select a unit"; // For when no unit is selected
    } 
    
}
