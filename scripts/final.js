console.log("Welcome To My Final Report");
const Answer = document.getElementById("answer-box")


function convertTemperatureRange (startValue, endValue, scale){
    var scale = prompt("Are you starting with Fahrenheit or Celsius?");
    var startValue = prompt("Enter Your Starting Temperature");
    var endValue = prompt("Enter Your Ending Value");

    for(let temp=startValue; temp=endValue; temp++){
        if(scale === "C"){
            let Cl = (temp * 9/5) + 32;
            Answer.innerHTML = (`${temp}°C = ${Cl}°F`);
        }else if(scale === "F"){
            let Fr = (temp + 32) * 5/9;
            Answer.innerHTML = (`${temp}°F = ${Fr}°C`);
        }else{
            Answer.innerHTML = ("Invalid Entry");
        }
    }
}



