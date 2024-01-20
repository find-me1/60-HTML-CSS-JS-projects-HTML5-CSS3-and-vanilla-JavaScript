const btnEl = document.getElementById("btn");
const apiURL = "https://api.quotable.io/random";
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");


async function getQuote(){
    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
    
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "GET A QUOTE";
        btnEl.disabled = false;
    } catch (error) {
        quoteEl.innerText = "An error happened, try again later";
        authorEl.innerText = "An error happened, try again later";
        btnEl.innerText = "GET A QUOTE";
        btnEl.disabled = false;
    }
   
}
getQuote();

btnEl.addEventListener("click",getQuote);