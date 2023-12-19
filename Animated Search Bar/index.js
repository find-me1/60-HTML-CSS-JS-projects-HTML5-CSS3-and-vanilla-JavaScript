const searchBarContainerEl = document.querySelector(".search-bar-container");
const maginfierEl = document.querySelector(".magnifier");

maginfierEl.addEventListener("click",()=>{
    searchBarContainerEl.classList.toggle("active");
});