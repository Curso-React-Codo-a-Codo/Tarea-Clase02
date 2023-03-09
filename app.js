const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
	const nombre = prompt('¿Cuál es tu nombre?');
    if (nombre == null || nombre == "" )
    {
        alert('Dejaste el campo vacio o cancelaste el prompt');
    } else {
        alert('Hola ' + nombre + ' !');
    }
	    
});