const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery");

async function fetchImage() {
  const inputValue = document.getElementById("input").value;
  if (inputValue > 10 || inputValue < 1) {
    errorMessageEl.style.display = "block";
    errorMessageEl.innerText = "Only upto 10 Photos can be viewed";
    return;
  }
  imgs = "";
  try {
    btnEl.style.display = "none";
    const loading = `<img src="spinner.svg" />`;
    galleryEl.innerHTML = loading;
    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=tPmSV6MWQOma3HSK_Dxo5sZDZzN2-MlrSTypfHLGT9A`
    ).then((res) =>
      res.json().then((data) => {
        if (data) {
          data.forEach((pic) => {
            imgs += `<img src=${pic.urls.small} alt="image"/>`;
            galleryEl.style.display = "block";
            galleryEl.innerHTML = imgs;
            btnEl.style.display = "block";
          });
        }
      })
    );
    errorMessageEl.style.display = "none";
  } catch (error) {
    errorMessageEl.style.display = "block";
    errorMessageEl.innerText = "An error occured Try again later";
    btnEl.style.display = "block";
  }
}

btnEl.addEventListener("click", fetchImage);
