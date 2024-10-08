console.log("Welcome To My Assignment 2");
const Answer = document.getElementById("answer-box")

function convertTemp(){
    let temperature = prompt("Enter a temperature in Celcius");
    let C = temperature*1.8+32;
    Answer.innerHTML = ("The conversion of " + temperature + "° Celsius to Fahrenheit is " + C + "°");
    return temperature;
}

