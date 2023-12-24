const monthEl = document.querySelector(".date h1")
const mEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days")

const monthIndex = new Date().getMonth();
const lastday = new Date(new Date().getFullYear(),monthIndex + 1,0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;



const currentDate = new Date();
const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
//const currentDay = currentDate.toLocaleString('default', { weekday: 'long' });
const dateIndex = currentDate.getDate();
//const yearIndex = currentDate.getFullYear();

/*const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];*/

monthEl.innerText = currentMonth;
  //mEl.innerText = `${currentDay.slice(0,3)} ${currentMonth.slice(0,3)} ${dateIndex} ${yearIndex}`;

mEl.innerText = new Date().toDateString();

let days = "";

for(let i = firstDay; i >0;i--){
    days += `<div class="empty"></div>`;
}

for(let i=1;i <= lastday ;i++){
    if(i === dateIndex){
        days +=  `<div class="today">${i}</div>`;
    }else{
        days += `<div>${i}</div>`;
    }
    
}
daysEl.innerHTML = days;
