(function(){
    var nombre_completo = document.getElementById('nombre-completo');
    var apodo = document.getElementById('apodo');
    
    var nombre_activo = false;
    var apodo_activo = true;

    var nombre_intermitente = setInterval(function(){
        if(nombre_activo == false && apodo_activo){
            nombre_completo.style.display = "inline-block";
            apodo.style.display = "none";
            nombre_activo = true;
            apodo_activo = false;
        } else if (nombre_activo && apodo_activo == false){
            apodo.style.display = "inline-block";
            nombre_completo.style.display = "none";
            nombre_activo = false;
            apodo_activo = true;
        }
    }, 2000);

    setTimeout(function(){
        clearInterval(nombre_intermitente);
        nombre_completo.style.display = "inline-block";
        apodo.style.display = "none";
    }, 10000);

    var foto_presentacion = document.getElementById('foto-presentacion');
    var posicion_foto = 1;

    var foto_intermitente = setInterval(function(){
        switch (posicion_foto){
            case 1:
                posicion_foto = 2;
                foto_presentacion.src = "img/hernan_2.jpg";
            break;

            case 2: 
                posicion_foto = 1;
                foto_presentacion.src = "img/hernan_1.jpg";
            break;

            default:
                foto_presentacion.src = "img/hernan_1.jpg";
            break;
        }
    }, 5000);

}());