import callApiAirPollution from "./pollution-api.js";
import showError from "./show-error.js";

//* Función de llamada de la API para el clima con los datos obtenidos por geolocation
export default function callApiWeatherUser(lat, lon) {
    //* API key para realizar peticiones a la API 
    const apiKey = "283b0af63e8ca8a200b89d9a1a45e99a";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es`;

    //* Se realiza la petición en formato JSON
    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            //! Si se muestra un error 404, se indicará que la ciudad no se encuentra, de lo contrario se hará la llamada a la siguiente API
            if (dataJSON.cod === "404") {
                showError("Ubicación no encontrada");
            } else {
                // Llamada a la función para saber la calidad del aire en la ciudad
                callApiAirPollution(dataJSON);
            };
        })
};