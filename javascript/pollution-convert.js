//* Tabla Hash para convertir los datos de Calidad de aire
export default function airPollutionConvert(airPollutionCode) {
    // Se declara un listado de los códigos que se obtienen de la API, y se regresará un valor acorde al código
    const airPollutionOptions = {
        1: "Muy Bueno",
        2: "Aceptable",
        3: "Moderado",
        4: "Malo",
        5: "Muy malo"
    };
    // En caso de no obtener respuesta, se definirá un valor por defecto
    let airPollutionDefault = "No se obtuvieron datos";
    // La opción a retornar dependerá de si se obtuvo una respuesta del listado o del valor por defecto
    let option = airPollutionOptions[airPollutionCode] || airPollutionDefault;
    // Regresa la opción obtenida por el listado de códigos o la opción por defecto
    return option;
};