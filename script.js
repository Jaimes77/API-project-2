const baseURL =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/manifests/Curiosity";
const key = "tDl9btMFVvJuRAfDTJVPaOZHeqHlHQ7ta4uomTWj";

const row = document.querySelector(".row");

fetch(`${baseURL}?api_key=${key}`)
  .then((response) => response.json())
  .then((json) => displayResults(json));

function displayResults(json) {
  console.log(json.photos);

  // json.photos.forEach(function (photo) {
  //   console.log(photo);

  //   let card = document.createElement("div");
  //   card.className = "card text-white bg-dark mb-3";
  //   card.style =
  //     "width: 18rem; margin: 1em; height: 400px; padding: .5em; overflow: auto";

  //   let img = document.createElement("img");
  //   img.className = "card-img-top";
  //   img.src = photo.img_src;

  //   let cardBody = document.createElement("div");
  //   cardBody.className = "card-body";

  //   let cardText = document.createElement("p");
  //   cardText.className = "card-text";
  //   cardText.innerText = photo.earth_date;

  //   row.appendChild(card);
  //   card.appendChild(img);
  //   card.appendChild(cardBody);
  //   cardBody.appendChild(cardText);
  // });
}
