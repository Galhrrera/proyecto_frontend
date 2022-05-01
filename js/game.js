



function iniciarJuego() {

    alert(logeado);
    logeado = localStorage.setItem("logeado", logeado);
    alert(logeado);
    

    if (logeado) {

        location.href  = "api_mario2/mario.html";
    }
    else {
        alert("Necesita logearse para entrar al juego");
        location.href = "index.html";

    }
}

