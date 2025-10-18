function escribirBienvenida() {
    const mensaje = "¡Bienvenido a la Feria de Viajes 2025!";
    const div = document.getElementById("mensaje-bienvenida");
    div.textContent = "";

    let i = 0;
    const velocidad = 50;

    const intervalo = setInterval(() => {
        div.textContent += mensaje[i];
        i++;
        if (i >= mensaje.length) {
            clearInterval(intervalo);
        }
    }, velocidad);
}

function resaltarElemento(elemento, color) {
    elemento.style.backgroundColor = color;
}
function cambiarColor(elemento, color) {
    elemento.style.backgroundColor = color;
}
function mostrarMensaje(texto) {
  document.getElementById("mensaje-actividades").textContent = texto;
}
function ocultarMensaje() {
  document.getElementById("mensaje-actividades").textContent = "";
}
function confirmarEnvio() {
  alert("haz click en aceptar para confirmar envio.");
}