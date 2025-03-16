const $form = document.querySelector(".form");
const $input = document.querySelector(".input");
const $answer = document.querySelector(".answer");

const apiKey = "In this case, I'm deleted for now";

let arrayKelvin = [];

$form.addEventListener("click", (e) => {
  e.preventDefault();

  const input = e.target.classList.contains("input").textValue;

  const btn = e.target.classList.contains("btn");

  if (btn) {
    APIExtractLatLon($input.value);
    $input.value = "";
  }
});

function APIExtractLatLon(value) {
  if (value === "") return;

  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => APIExtractWeather(data[0].lat, data[0].lon));
}

function APIExtractWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) =>
      KelvinToCelsius(
        data.main.temp,
        data.main.feels_like,
        data.main.humidity
      )
    );
}
arrayCelsius = [];

function KelvinToCelsius(tempK, feels_likeK, humidityK) {
  console.log(tempK);
  arrayKelvin.push(tempK);
  arrayKelvin.push(feels_likeK);
  arrayKelvin.push(humidityK);

  arrayKelvin.forEach((element) => {
    let celsiusValue;
    celsiusValue = element - 273.15;
    arrayCelsius.push(celsiusValue);
  });

  console.log(arrayCelsius);
}
