const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");

const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");

let currentImg = 1;
let timeout;

updateImage();
nextEl.addEventListener("click",()=>{
    clearTimeout(timeout);
    currentImg++;
    updateImage();
});
prevEl.addEventListener("click",()=>{
    clearTimeout(timeout);
    currentImg--;
    if(currentImg === 0){
        currentImg = imgsEl.length;
    }
    updateImage();
});

function updateImage(){
    if(currentImg > imgsEl.length ){
        currentImg = 1;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg -1) * 500}px)`;
    timeout = setTimeout(()=>{
        currentImg++;
        updateImage();
    },3000);
}