function AsignarIdEnProyectos(){
    var lista_proyectos = document.getElementById('proyectos-portafolio');
    var ancla_proyectos = lista_proyectos.getElementsByTagName('a');
    var cantidad_proyectos = ancla_proyectos.length;
    var posicion_proyecto = 1;
    for(var i = 0; i < cantidad_proyectos; i++){
        ancla_proyectos[i].id = "proyecto-" + posicion_proyecto;
        posicion_proyecto++;
    }
}
AsignarIdEnProyectos();


var ventana_emergente_fondo = document.getElementById('ventana-emergente-fondo');
var boton_cerrar_popup = document.getElementById('cerrar-popup');
var popup = document.getElementById('popup');

boton_cerrar_popup.addEventListener('click', ActivarScroll);
document.getElementById('proyecto-1').addEventListener('click', EliminarScroll);

function EliminarScroll(){
    document.getElementById('body').setAttribute('class', 'no-scroll');
    VerPopUP();
}
function VerPopUP(){
    ventana_emergente_fondo.classList.remove('no-visible');
    ventana_emergente_fondo.classList.add('visible');
    popup.classList.remove('no-visible');
    popup.classList.add('visible');
}

function ActivarScroll(){
    document.getElementById('body').classList.remove('no-scroll');
    document.getElementById('body').setAttribute('class', 'scroll');
    EsconderPopUp();
}

function EsconderPopUp(){
    ventana_emergente_fondo.classList.remove('visible');
    ventana_emergente_fondo.classList.add('no-visible');
    popup.classList.remove('visible');
    popup.classList.add('no-visible');
}