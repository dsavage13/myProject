console.log("Welcome To My Assignment 3");
const Answer = document.getElementById("answer-box")

function convertTemp(){
    let scale = prompt("Press C for converting Celsius to Fahrenheit, or Press F for converting Fahrenheit to Celsius")
    if(scale === "C"){
        function convertC(){
            let temperature = prompt("Enter a temperature in Celsius that you wish to convert");
            let Cl = (temperature*9/5)+32;
            Answer.innerHTML = ("The conversion of " + temperature + "° Celsius to Fahrenheit is " + Cl + "°");
            return temperature;  
        }
        convertC();
    }else if (scale === "c"){
        function convertC(){
            let temperature = prompt("Enter a temperature in Celsius that you wish to convert");
            let Cl = (temperature*9/5)+32;
            Answer.innerHTML = ("The conversion of " + temperature + "° Celsius to Fahrenheit is " + Cl + "°");
            return temperature;  
        }
        convertC();
    }else if (scale === "F"){
        function convertF(){
            let American = prompt("Enter a temperature in Fahrenheit that you wish to convert");
            let Fr = (American-32)*5/9;
            Answer.innerHTML = ("The conversion of " + American + "° Fahrenheit to Celsius is " + Fr + "°");
            return temperature; 
        }
        convertF();
    }else if (scale === "f"){
        function convertF(){
            let American = prompt("Enter a temperature in Fahrenheit that you wish to convert");
            let Fr = (American-32)*5/9;
            Answer.innerHTML = ("The conversion of " + American + "° Fahrenheit to Celsius is " + Fr + "°");
            return temperature; 
    }
    convertF();
    }else{
        Answer.innerHTML = ("You have entered an invalid Selection"); 
    }
    }



