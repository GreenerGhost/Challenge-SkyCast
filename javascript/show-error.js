//* Esta función muestra en la tarjeta lateral un mensaje de error, en caso que algún dato se encuentre erróneo, o no se obtenga respuesta de alguna API
export default function showError(message) {
    const alertMessage = document.createElement("p");
    alertMessage.classList.add("alert-message");
    alertMessage.innerHTML = message;
    sidebarContainer.appendChild(alertMessage);
    // Se toma un tiempo de 1.5s para mostrar el mensaje y después desaparece
    setTimeout(() => {
        alertMessage.remove();
    }, 1500);
};
