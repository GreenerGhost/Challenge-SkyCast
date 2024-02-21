import airPollutionConvert from "./pollution-convert.js";
import weatherConvert from "./weather-convert.js";

const card = document.querySelector(".main");

//* Función para mostrar el clima, que necesita dos parámetros, uno con los datos de la API del clima, otro parámetro con la información de la calidad del aire
export default function showWeather(data, aqi) {
    //* Se guardan los datos obtenidos por el JSON, los datos que usaremos para mostrarlos en pantalla por las tarjetas
    const { name, weather: { 0: { description, icon } }, main: { temp, feels_like, temp_min, temp_max }, visibility, wind: { speed } } = data;

    // Se mandan a llamar las funciones para convertir la temperatura de grados Kelvin a grados Celsius
    var tempCelsius = kelvinToCelsius(temp);
    var tempMinCelsius = kelvinToCelsius(temp_min);
    var tempMaxCelsius = kelvinToCelsius(temp_max);
    var tempFeelsLike = kelvinToCelsius(feels_like);

    // Se manda a llamar la tabla Hash para convertir el dato de la calidad del aire
    const air_pollution = airPollutionConvert(aqi);

    // Se transforma la velocidad del viento de m/s a km/s
    const windSpeed = speedConvert(speed);

    // Se transforma la distancia de mts a kms
    const visibilityDistance = visibilityConvert(visibility);

    // Se crea el elemento de section para poder usarlo en el HTML y se le añade la clase cards
    const content = document.createElement('section');
    content.className = "cards ";
    content.className += weatherConvert(`w${icon}`);

    //* Se añade todo el código de HTML con las variables a mostrar
    content.innerHTML = `
    <div class="card-img">
        <img src="./assets/${icon}.png"" alt="${description}" class="card__img" />
    </div>
    <div class="info__summary">
        <h2 class="info__city-name">${name}</h2>
        <p class="info__weather">${description}</p>
        <h1 class="info__temp">${tempCelsius}°C</h1>
        <div class="info__temp-min-max">
            <h3 class="info__temp__min">Min ${tempMinCelsius}°C</h3>
            <h3 class="info__temp__max">Max ${tempMaxCelsius}°C</h3>
        </div>
    </div>
    <div class="info__detail">
        <div class="detail">
            <p class="info__name">Sensación térmica</p>
            <p class="info__data">${tempFeelsLike}°C</p>
        </div>
        <div class="detail">
            <p class="info__name">Viento</p>
            <p class="info__data">${windSpeed} Km/h</p>
        </div>
        <div class="detail">
            <p class="info__name">Calidad del Aire</p>
            <p class="info__data">${air_pollution}</p>
        </div>
        <div class="detail detail--last">
            <p class="info__name">Visibilidad</p>
            <p class="info__data">${visibilityDistance} Km</p>
        </div>
    </div>`;

    // Se añade la tarjeta al cuerpo del documento HTML
    card.appendChild(content);
};



//* Funciones para transformar los datos de la JSON para poder mostrarlos correctamente en pantalla

function kelvinToCelsius(temp) {
    return parseInt(temp - 273.15);
};

function speedConvert(speed) {
    return parseFloat(speed * 3.6).toFixed(2);
};

function visibilityConvert(distance) {
    return parseFloat(distance / 1000).toFixed(2);
};
