const baseURL =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
const key = "tDl9btMFVvJuRAfDTJVPaOZHeqHlHQ7ta4uomTWj";

const row = document.querySelector(".row");

fetch(`${baseURL}?earth_date=2012-08-06&page=1&api_key=${key}`)
  .then((response) => response.json())
  .then((json) => displayResults(json));

function displayResults(json) {
  console.log(json.photos);

  json.photos.forEach(function (photo) {
    console.log(photo);

    let column = document.createElement("div");
    column.className = "col";

    let card = document.createElement("div");
    card.className = "card text-white border-light bg-dark mb-3";
    card.style = "width: 15rem; margin: 1em; height: 400px; padding: .2em; ";

    let img = document.createElement("img");
    img.className = "card-img-top rounded";
    img.src = photo.img_src;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = photo.earth_date + ": " + photo.camera.full_name;

    row.appendChild(column);
    column.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(cardText);
  });
}
