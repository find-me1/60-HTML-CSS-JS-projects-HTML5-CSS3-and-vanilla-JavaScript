const apikey = "cfb17bf5a65df84a4f4084270aece552";

const weatherDateEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");


const formEl = document.querySelector("form");

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityValue = cityInputEl.value;
})