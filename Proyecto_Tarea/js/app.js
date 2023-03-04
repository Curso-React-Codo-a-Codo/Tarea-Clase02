function alerta() {
    const respuesta = document.querySelector("#respuesta")
    var mensaje;
    var nombre = prompt("¡Ingresa tu nombre!","");

    if (nombre == null || nombre == ""){
        mensaje = "Haz cancelado el Prompt o dejaste el campo vacio";
    } else {
            mensaje = "Hola "+ nombre;
        }
    respuesta.textContent = mensaje
    console.log(mensaje)
}
