const apiKey = "Nop";

const $weatherCard = document.querySelector(".weather-card");

const $input = document.querySelector(".weather-card__input");

const $btn = document.querySelector(".weather-card__button");

$btn.addEventListener("click", () => {
  const inputValue = $input.value.trim();
  callAPILatLon();
});

function callAPILatLon() {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=1&appid=${APIkey}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
