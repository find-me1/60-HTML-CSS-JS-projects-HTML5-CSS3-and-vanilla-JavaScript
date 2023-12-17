const  inputEl = document.getElementById("input");
const infotextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");


async function fetchAPI(word){
    try {
        infotextEl.style.display = "block";
        meaningContainerEl.style.display = "none";
        infotextEl.innerText = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res)=> res.json());
        if(result.title){
            infotextEl.style.display = "none";
        meaningContainerEl.style.display = "block";
            titleEl.innerText = word;
            meaningEl.innerText = "N/A";
            audioEl.style.display = "none";
        }else{

        infotextEl.style.display = "none";
        meaningContainerEl.style.display = "block";
        audioEl.style.display = "inline.flex";
        titleEl.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        console.log(result);
        audioEl.src = result[0].phonetics[0].audio;
        }

        } catch (error) {
            infotextEl.innerText = `An error try again later`;
            audioEl.style.display = "inline.flex";
    }
    
    
}


inputEl.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    }
})