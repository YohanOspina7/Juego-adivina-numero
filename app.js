let numeroSecreto;
let numeroDeIntentos;

function funcionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", "Elija un numero del 1 al 10");
    numeroSecreto = parseInt(generarNumeroSecreto());
    numeroDeIntentos = parseInt(1);
};

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
};

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Haz acertado el numero en ${numeroDeIntentos} ${(numeroDeIntentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p", "El numero es mayor");
            numeroDeIntentos++;
        } else {
            asignarTextoElemento("p", "El numero es menor");
            numeroDeIntentos++;
        };
        limpiarCaja();
    };
};


function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
};

function reiniciarJuego() {
    funcionesIniciales();
    limpiarCaja();
    // desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

};

funcionesIniciales();