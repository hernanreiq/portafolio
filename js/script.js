var lista_proyectos = document.getElementById('proyectos-portafolio').children;

var div = document.createElement('div');
div.setAttribute('class', 'ventada-emergente');

var ventana_emergente_fondo = document.getElementById('ventana-emergente-fondo');
document.getElementById('proyecto-1').addEventListener('click', EliminarScroll);
function EliminarScroll(){
   // document.getElementById('body').setAttribute('class', 'no-scroll');
    ventana_emergente_fondo.setAttribute('style', 'visibility:visible');
}

ventana_emergente_fondo.addEventListener('click', ActivarScroll);
function ActivarScroll(){
    document.getElementById('body').setAttribute('class', 'scroll');
    ventana_emergente_fondo.setAttribute('style', 'visibility:hidden');
}