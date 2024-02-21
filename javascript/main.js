import callApiWeather from "./weather-api.js";
import showError from "./show-error.js";
import callApiWeatherUser from "./weather-user.js";

// 283b0af63e8ca8a200b89d9a1a45e99a
// key OpenWeather

// Se guardan los elementos de los que se necesitarán o modificarán datos
const formData = document.querySelector(".sidebar__form");
const sidebarContainer = document.querySelector(".sidebar-container");

// countryName y cityName servirán para saber a que país y ciudad se desea conocer el clima
const countryName = document.querySelector("#countryName");
const cityName = document.querySelector("#cityName");

// Función que permite llamar a la función callApiWeather con los valores de la ciudad y país
formData.addEventListener("submit", (evento) => {
    // preventDefault cancela el evento, evitando borrar los datos y las tarjetas creadas posteriormente
    evento.preventDefault();

    //! Se manda un mensaje a la función showError en caso que alguno de los dos campos se encuentren vacíos
    if (cityName.value === "" && countryName.value === "") {
        showError('Ambos campos son obligatorios...');
        return;
    } else {
        // Después de confirmar que los campos no están vacíos, se manda a llamar el método para llamar a la API del clima
        callApiWeather(cityName.value, countryName.value);
    };
});

//* Se ejecuta al entrar a la página, pidiendo permiso del usuario para poder obtener su ubicación
navigator.geolocation.getCurrentPosition(success, error, options)

// Si se puede obtener la ubicación, se llama a la función para obtener el clima con las coordenadas
function success(geolocationPosition) {
    let coords = geolocationPosition.coords;
    callApiWeatherUser(coords.latitude, coords.longitude);
};

// Si existe un error, se marcará un problema, ya sea que el navegador no lo soporte o el usuario no de permiso para obtener ubicación
function error() {
    alert("Ocurrio un problema y no se pudo obtener la ubicación");
};

// Opciones para obtener mayor exactitud al momento de obtener coordenadas
var options = {
    EnableHightAccuracy:true,
    Timeout: 1000,
    MaximumAge: 0
};



