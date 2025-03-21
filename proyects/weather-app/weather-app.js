const apiKey = "";

const $weatherCard = document.querySelector(".weather-card");

const $input = document.querySelector(".weather-card__input");

const $btn = document.querySelector(".weather-card__button");

$weatherCard.addEventListener("submit", (e) => {
  e.preventDefault();
});

$btn.addEventListener("click", () => {
  callAPILatLon($input.value.trim());
  $input.value = "";
});

function callAPILatLon(inputValue) {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${apiKey}`
  )
    .then((response) => {
      if (!response.ok) {
        /* Esto pasa porque no ingresaste un valor */
        console.log("Error en la respuesta ");
      } else {
        return response.json();
      }
    })

    .then((data) => {
      if (data.length === 0) {
        console.log("Ciudad no encontrada");
      } else {
        callAPIWeather(data[0].lat, data[0].lon);
      }
    })

    .catch((error) => console.error(error.message));
}

function callAPIWeather(lat, lon) {
  console.log(lat, lon);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=&appid=${apiKey}`
  )
    .then((response) => {
      if (!response.ok) {
        console.log("Error al buscar la ciudad");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      if (data.length === 0) {
        console.log("Valor vacio");
      } else {
        console.log(data);
      }
    });
}
