// Tabla Hash para convertir la descripción del clima y dar la clase a la tarjeta
export default function weatherConvert(weatherCode) {
    // Se declara un listado de los códigos que se obtienen de la API, y se regresará un valor acorde al código
    const weatherCodeOptions = {
        w01d: "clear-sky",
        w01n: "night",
        w02d: "clear-sky",
        w02n: "night",
        w03d: "clouds",
        w03n: "clouds",
        w04d: "clouds",
        w04n: "clouds",
        w09d: "rain",
        w09n: "rain",
        w10d: "rain",
        w10n: "rain",
        w11d: "storm",
        w11n: "storm",
        w13d: "snow",
        w13n: "snow",
        w50d: "mist",
        w50n: "mist"
    };
    // En caso de no tener una respuesta, se definirá un valor por defecto
    let weatherCodeDefault = "mist";
    
    let option = weatherCodeOptions[weatherCode] || weatherCodeDefault;
    // Regresa la opción obtenida por el listado de códigos o la opción por defecto
    return option;
};