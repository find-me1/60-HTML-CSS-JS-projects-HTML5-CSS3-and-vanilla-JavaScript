const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition")

function calculateBmi(){
    const heightValue = heightEl.value / 100;
    const weightValue = weightEl.value;

    const bmiValue = weightValue /(heightValue * heightValue);
    bmiInputEl.value = bmiValue;

    if(bmiValue < 18.5){
        weightConditionEl.innerText = "Under weight";
    } else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText = " Normal weight";
    } else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionEl.innerText = "Overweight";
    }else if(bmiValue >= 30){
        weightConditionEl.innerText = "Obesity";
    }
} 

btnEl.addEventListener("click",calculateBmi);