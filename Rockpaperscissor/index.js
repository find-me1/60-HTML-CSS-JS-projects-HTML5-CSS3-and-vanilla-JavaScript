const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");
const playerscoreEl = document.getElementById("user-score");
const computerscoreEl = document.getElementById("computer-score");
let playerscore = 0;
let computerscore = 0;
buttons.forEach((button) => {
    button.addEventListener("click",()=>{
       const result=playround(button.id,computerplay());
       resultEl.textContent = result;
    });
});
function computerplay(){
    const choices = ["rock","paper","scissor"];
    const randomchoice = Math.floor(Math.random()*choices.length);
    return choices[randomchoice];
}
function playround(playerselection,computerselection){
    if(playerselection === computerselection){
        return "It's a tie!";
    }else if(
        (playerselection === "rock" && computerselection === "scissor") || (playerselection==="paper"&&computerselection==="rock")||(playerselection==="scissor"&&computerselection==="paper")){
            playerscore++;
            playerscoreEl.textContent = playerscore;
            return "You win!"+playerselection +" beats "+ computerselection;
        }   else{
            computerscore++;
            computerscoreEl.textContent = computerscore;
            return "you lose! "+ computerselection+" beats "+playerselection;
        }    
}