(function(){
    var lista_menu = document.getElementById('lista-menu');
    var menu_navegacion = document.getElementById('menu-navegacion');
    var menu_activo = 0;
    menu_navegacion.addEventListener('click', activar_desactivar_menu);
    lista_menu.addEventListener('click', comprobar_ancho_pantalla);
    
    function activar_desactivar_menu(){
        if (menu_activo == 0){
            menu_navegacion.innerHTML = '<i class="fas fa-times"></i>';
            lista_menu.style.display = "block";
            menu_activo = 1;
        } else if (menu_activo == 1){
            menu_navegacion.innerHTML = '<i class="fas fa-bars"></i>';
            lista_menu.style.display = "";
            menu_activo = 0;
        }
    }
    
    function comprobar_ancho_pantalla(){
        if (window.outerWidth < 700){
            activar_desactivar_menu();
        }
    }
}());