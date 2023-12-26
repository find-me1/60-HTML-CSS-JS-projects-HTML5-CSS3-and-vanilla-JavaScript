const kits = ["crash", "kick", "snare", "Tom"];




const containerEl = document.querySelector(".container");

const audioElements = [];



kits.forEach((kit) => {

  const btnEl = document.createElement("button");

  btnEl.classList.add("btn");

  btnEl.innerText = kit;

  btnEl.style.backgroundImage = `url(images/${kit}.png`;

  containerEl.appendChild(btnEl);

  const audioEl = document.createElement("audio");

  audioEl.src = `sounds/${kit}.mp3`;

  containerEl.appendChild(audioEl);

  audioElements.push(audioEl);

  btnEl.addEventListener("click", () => {
    audioElements.forEach((audio) => audio.pause());
    audioEl.currentTime = 0;
    audioEl.play();
  });

  window.addEventListener("keydown", (event) => {

    const keyPressed = event.key.toLowerCase();

    if (keyPressed === kit.slice(0, 1).toLowerCase()) {

      audioEl.play();
    }

  });
  
});
