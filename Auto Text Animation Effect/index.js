const containerEl = document.querySelector(".container");

const careers = ["Web Devoloper","Freelancer","Youtuber","Instructor"];

let careerIndex = 0;
let charachterIndex = 0;
updateText();
function updateText(){
    charachterIndex++;
containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0,charachterIndex)}</h1>`;

if(charachterIndex === careers[careerIndex].length){
    careerIndex++;
    charachterIndex = 0;
}
if(careerIndex === careers.length){
    careerIndex = 0;
}
setTimeout(updateText,400);

}