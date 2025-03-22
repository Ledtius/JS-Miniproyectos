const apiKey = "";

const $weatherCard = document.querySelector(".weather-card");

const $information = document.querySelector(".weather-card__information");

const $input = document.querySelector(".weather-card__input");

const $btn = document.querySelector(".weather-card__button");

$weatherCard.addEventListener("submit", (e) => {
  e.preventDefault();
});

$btn.addEventListener("click", () => {
  callAPILatLon($input.value.trim());
  // $input.value = "";
});

function callAPILatLon(inputValue) {
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${apiKey}`
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
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=&appid=${apiKey}&units=metric&lang=es`
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
        console.log(data[0]);
        console.log();
        $information.innerHTML = "";
        
        const descriptionFirstUppercase = data.weather[0].description.replace(
          data.weather[0].description[0],
          data.weather[0].description[0].toUpperCase()
        );

        createElement(
          data.name,
          data.sys.country,
          data.weather[0].icon,
          Math.round(data.main.temp),
          descriptionFirstUppercase,
          Math.round(data.main.humidity),
          Math.round(data.wind.speed)
        );
      }
    });
}

/* data[0].name, data.[0].sys.country, data[0].weather[0].icon, data[0].main.temp, data[0].weather[0].description, data[0].main.humidity, data[0].wind.speed */

function createElement(
  city,
  country,
  icon,
  temp,
  description,
  humidity,
  windSpeed
) {
  // const $location = document.createElement("div");

  // $location.className = "weather-card__location";

  // $information.append($location);

  // const $place = document.createElement("p");

  // $place.className = "weather-card__place";

  // $place.textContent = city;

  // $location.append($place);

  // const $flag = document.createElement("img");

  // $flag.className = "weather-card__flag";

  // $flag.setAttribute("src", `https://flagsapi.com/${country}/shiny/64.png`);

  // $flag.setAttribute("alt", `Bandera de ${country}`);

  // $location.append($flag);

  const $status = document.createElement("div");

  $status.className = "weather-card__status";

  $information.append($status);

  const $icon = document.createElement("img");

  $icon.className = "weather-card__status-icon";

  $icon.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@4x.png`);

  $icon.setAttribute("alt", `${description}`);

  $status.append($icon);

  const $statusText = document.createElement("div");

  $statusText.className = "weather-card__status-text";

  $status.append($statusText);

  const $temp = document.createElement("p");

  $temp.className = "weather-card__temperature";

  $temp.textContent = `${temp}`;

  $statusText.append($temp);

  const $degreeSymbol = document.createElement("small");

  $degreeSymbol.className = "weather-card__degree-symbol";

  $degreeSymbol.textContent = "°C";

  $temp.append($degreeSymbol);

  const $description = document.createElement("p");

  $description.className = "weather-card__status-description";

  $description.textContent = `${description}`;

  $statusText.append($description);

  const $humidityWind = document.createElement("div");

  $humidityWind.className = "weather-card__humidity-wind";

  $information.append($humidityWind);

  const $humidity = document.createElement("div");

  $humidity.className = "weather-card__humidity-card";

  $humidity.innerHTML = `  <svg
                class="humidity-card__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"
                />
              </svg>`;

  const $humidityStatus = document.createElement("div");

  $humidityStatus.className = "humidity-card__status";

  $humidity.append($humidityStatus);

  const $humidityPercentage = document.createElement("p");

  $humidityPercentage.className = "humidity-card__percentage";

  $humidityPercentage.textContent = `${humidity}%`;

  $humidityStatus.append($humidityPercentage);

  const $humidityTitle = document.createElement("small");

  $humidityTitle.className = "humidity-card__title";

  $humidityTitle.innerText = "Humedad";

  $humidityStatus.append($humidityTitle);

  $humidityWind.append($humidity);

  // const $humiditySvg = document.createElement("svg");

  // $humiditySvg.className = ""

  const $wind = document.createElement("div");

  $wind.className = "weather-card__wind-card";

  $wind.innerHTML = `  <svg
                class="wind-card__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                />
              </svg>`;

  $humidityWind.append($wind);

  const $windStatus = document.createElement("div");

  $windStatus.className = "wind-card__status";

  $wind.append($windStatus);

  const $windValue = document.createElement("p");

  $windValue.className = "wind-card__value";

  $windValue.innerText = `${windSpeed}Km/h`;

  $windStatus.append($windValue);

  const $windTitle = document.createElement("small");

  $windTitle.className = "wind-card__title";
  $windTitle.textContent = "Vel. viento";

  $windStatus.append($windTitle);

  // $weatherCard.append($information);
}
