const barsEl = document.querySelector(".fa-bars");
const sidebarEl = document.querySelector(".sidebar");
const closingButtonEl = document.querySelector(".fa-times");


barsEl.addEventListener("click",()=>{
    sidebarEl.classList.toggle("show-sidebar");
});
closingButtonEl.addEventListener("click",()=>{
    sidebarEl.classList.remove("show-sidebar");
});