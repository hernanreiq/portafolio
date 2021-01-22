(function() {
    var nombre_completo = document.getElementById('nombre-completo');
    var apodo = document.getElementById('apodo');
    var marca = document.getElementById('marcaHR');
    marca.addEventListener('click', animacionNombreApodo);
    animacionNombreApodo();
    var nombre_activo = false;
    var apodo_activo = true;

    function animacionNombreApodo() {
        var nombre_intermitente = setInterval(function() {
            if (nombre_activo == false && apodo_activo) {
                nombre_completo.style.display = "inline-block";
                apodo.style.display = "none";
                nombre_activo = true;
                apodo_activo = false;
            } else if (nombre_activo && apodo_activo == false) {
                apodo.style.display = "inline-block";
                nombre_completo.style.display = "none";
                nombre_activo = false;
                apodo_activo = true;
            }
        }, 2000);

        setTimeout(function() {
            clearInterval(nombre_intermitente);
            nombre_completo.style.display = "inline-block";
            apodo.style.display = "none";
        }, 10000);
    }
}());