import showWeather from "./show-weather.js";

//* Función que recibe los datos del JSON
export default function callApiAirPollution(data) {
    // Se guardan las coordenadas del JSON, para poder hacer otra llamada a una API para conocer la calidad del aire en esa ciudad
    const { coord: { lon, lat } } = data;
    const apiKey = "283b0af63e8ca8a200b89d9a1a45e99a";
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            //! Si se muestra un error 404, se indicará que los datos de la ciudad no se encuentran
            if (dataJSON.cod === "404") {
                alert("Datos de calidad de aire no encontrados");
            } else {
                // Se guarda el dato de la calidad del aire y se manda a llamar a la función para mostrar los datos obtenidos
                const { list: { 0: { main: { aqi } } } } = dataJSON;
                showWeather(data, aqi);
            }
        })
        .catch(function (error) {
            console.log(`Hubo un problema con la petición de fetch ${error}`);
        })
};