const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");


const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();
updateCountdown();
function updateCountdown(){
    const currentTime = new Date().getTime();
    const gap = newYearTime - currentTime;

    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;
    
    const d = Math.floor(gap/day);
    const h = Math.floor((gap%day)/hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap%minute)/second);

    dayEl.innerText = `${d > 9 ? d : "0"+ d }`;
    hourEl.innerText = `${h > 9 ? h : "0"+ h }`;
    minuteEl.innerText = `${m > 9 ? m : "0"+ m }`;
    secondEl.innerText = `${s > 9 ? s : "0"+ s }`;
    setTimeout(updateCountdown,1000);
}