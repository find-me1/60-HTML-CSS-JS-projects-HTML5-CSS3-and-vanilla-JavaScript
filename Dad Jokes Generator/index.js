const btnEl = document.getElementById("btn");

const apiKey = "rYKIqfqhCRISSEGWeLyGpGbH3zoqQ002I7XXtC98";
const jokeEl = document.getElementById("joke");

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "updating...";

    btnEl.ariaDisabled = "true";
    btnEl.innerText = "Loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.ariaDisabled = "false";
    btnEl.innerText = "TELL ME A JOKE";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error occured try agian later";
    btnEl.ariaDisabled = "false";
    btnEl.innerText = "TELL ME A JOKE";
  }
}

btnEl.addEventListener("click", getJoke);
