const btnEl = document.querySelector(".btn");
const videoEl = document.querySelector(".background-video");
const faEl = document.querySelector(".fa");
const preloaderEl = document.querySelector(".preloader")

btnEl.addEventListener("click",()=>{
    if(btnEl.classList.contains("pause")){
        btnEl.classList.remove("pause");
        videoEl.pause();
        faEl.classList.remove("fa-pause");
        faEl.classList.add("fa-play");
    }else{
        btnEl.classList.add("pause");
        videoEl.play();
        faEl.classList.remove("fa-play");
        faEl.classList.add("fa-pause");
    }
});

window.addEventListener("load",()=>{
    preloaderEl.style.zIndex = "-2";
})