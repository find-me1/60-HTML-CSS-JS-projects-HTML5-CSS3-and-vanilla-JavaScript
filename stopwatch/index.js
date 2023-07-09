const startbuttonEl = document.getElementById("start");;
const stopbuttonEl = document.getElementById("stop");
const resetbuttonEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let startTime = 0;
let elapsedTime = 0;
let timerInterval ;
function startTimer(){
     startTime = Date.now() - elapsedTime;

     timerInterval = setInterval(()=>{
        elapsedTime = Date.now()-startTime;
        timerEl.textContent = formatTime(elapsedTime);
     },10)
     startbuttonEl.disabled = true;
     stopbuttonEl.disabled = false;
}
function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime%1000)/10);
    const seconds = Math.floor((elapsedTime%(1000*60))/1000);
    const minutes = Math.floor((elapsedTime%(1000*60*60))/(1000*60));
    const hours = Math.floor((elapsedTime%(1000*60*60*60))/(1000*60*60));
    return ((hours ?(hours > 9 ? hours :"0" + hours):"00")+"."+(minutes?(minutes > 9 ? minutes :"0" + minutes):"00")+"."+(seconds?(seconds > 9 ? seconds :"0" + seconds):"00")+"."+(milliseconds>9 ? milliseconds: "0" + milliseconds));
}
function stopTimer(){
    clearInterval(timerInterval);
    startbuttonEl.disabled = false;
    stopbuttonEl.disabled = true;
    resetbuttonEl.disabled = false;
}
function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerEl.textContent = "00:00:00";
}
startbuttonEl.addEventListener("click",startTimer);
stopbuttonEl.addEventListener("click",stopTimer);
resetbuttonEl.addEventListener("click",resetTimer);