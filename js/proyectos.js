/*
    FUNCION DE AJAX PARA SACAR LOS DATOS DE LOS PROYECTOS DEL ARCHIVO PROYECTOS.JSON
*/
function ObtenerProyectosJSON(posicion){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            boton_ver_mas.style.display = "inline-block";
            const proyectos = JSON.parse(xhttp.responseText);
            informacionJSON(proyectos, posicion);
        }
    }
    xhttp.open('GET', 'json/proyectos.json', true);
    xhttp.send();
}
ObtenerProyectosJSON(1);

/*
    FUNCION QUE PERMITE ENVIAR LA INFORMACION DEL JSON A CADA PROYECTO QUE LE CORRESPONDA
*/
var posicion_actual_lista = 1;
var velocidad_listas = 4;
var resultado_lista_actual;
var longitud_proyectos;
function informacionJSON(proyectos, posicion){
    longitud_proyectos = proyectos.length;
    CrearElementosLista(velocidad_listas, posicion, proyectos, longitud_proyectos);
}


/*
    CREACION DE ELEMENTOS DE LA LISTA A MEDIDA QUE SE VAYAN CREANDO OBJETOS CON LA INFORMACION DE LOS PROYECTOS,
    EL TAMAÑO DE SU CONTENEDOR CAMBIA DINAMICAMENTE DEPENDIENDO DE LA CANTIDAD DE PROYECTOS PUBLICADOS
*/
var mis_proyectos;
var contenedor_proyectos = document.getElementById("proyectos-portafolio");
function CrearElementosLista(velocidad, posicion, proyectos, longitud_proyectos){
    mis_proyectos = proyectos;
    for(posicion; posicion <= velocidad; posicion++){
        contenedor_proyectos.innerHTML += `
        <li>
            <a href="javascript:void(0)" onclick="mostrarDetalles(${posicion - 1})">
            <h2>${proyectos[posicion - 1]["nombre"]}</h2>
            <div class="contenedor-imagen">
                <img src="img/${proyectos[posicion - 1]["nombre"]}/${proyectos[posicion - 1]["nombre"]} (1).jpg" alt="proyecto ${proyectos[posicion - 1]["nombre"]}"><br>
            </div>
            <p>Ver detalles</p>
            </a>
        </li>
        `;
    }
    posicion_actual_lista = posicion;
    resultado_lista_actual = longitud_proyectos - (posicion_actual_lista - 1);
    if (resultado_lista_actual == 0){
        boton_ver_mas.style.display = "none"
    }
}

/*
    ESTE BLOQUE DE CODIGO SIRVE PARA INICIALIZAR LA CANTIDAD DE PROYECTOS QUE SE VERÁN EN PANTALLA
    TAMBIEN DEPENDIENDO DE SI EL USUARIO DA CLIC EN VER MÁS O NO, SE LE VAN MOSTRANDO MAS PROYECTO
    SEGUN LA VELOCIDAD ASIGNADA EN SU VARIABLE, EMPIEZA PUBLICANDO DE 4 EN 4, PERO SI HAY POR EJEMPLO 10, 
    LUEGO DE HACER 2 PUBLICACIONES DE 4, LA ULTIMA LA HACE DE LO QUE SOBRE
*/
var boton_ver_mas = document.getElementById('boton-ver-mas');
boton_ver_mas.addEventListener('click', function(){
    if (resultado_lista_actual <= 4 && resultado_lista_actual > 0){
        velocidad_listas = velocidad_listas + resultado_lista_actual;
    } else if (resultado_lista_actual > 4){
        velocidad_listas = velocidad_listas + 4;
    } 
    ObtenerProyectosJSON(posicion_actual_lista);
});

/*
    FUNCIONES QUE DETERMINAN EL PROYECTO QUE SE LE HA DADO CLIC Y TAMBIEN
    ASIGNAN LOS DETALLES O INFORMACIONES DENTRO DE LA VENTANA EMERGENTE
*/
function mostrarDetalles(proyecto_clicado){
    EliminarScroll();
    DeterminarProyecto(proyecto_clicado);
}
function DeterminarProyecto(proyecto_clicado){
    if(proyecto_clicado < longitud_proyectos && proyecto_clicado >= 0){
        AsignarDetalles(proyecto_clicado); 
    }
}
function AsignarDetalles(proyecto_actual){
    nombre_proyecto_popup.innerText = mis_proyectos[proyecto_actual].nombre;
    img_proyecto.src = mis_proyectos[proyecto_actual].ruta_fotos + mis_proyectos[proyecto_actual].nombre + " (1).jpg";
    actual_img.innerText = 1;
    total_img.innerText = mis_proyectos[proyecto_actual].fotos;
    if (mis_proyectos[proyecto_actual].enlace != ""){
        var enlace = '<a href="'+ mis_proyectos[proyecto_actual].enlace +'" target="_blank">Ver el proyecto <i class="fas fa-external-link-alt"></i></a>';
    } else {
        var enlace = "Enlace no disponible";
    }
    parrafo_popup.innerHTML = `
        <b>Tipo de proyecto: </b>${mis_proyectos[proyecto_actual].tipo} <br><br> 
        <b>Enlace: </b> ${enlace}<br><br>
        <b>Descripción: </b>${mis_proyectos[proyecto_actual].descripcion} <br><br>
        <b>Habilidades y tecnologías usadas: </b>${mis_proyectos[proyecto_actual].habilidades}<br><br>
        <b>Características: </b>${mis_proyectos[proyecto_actual].caracteristicas}<br><br>
    `;
    DireccionSlider(mis_proyectos, proyecto_actual);
}

/* VENTANA EMERGENTE */
var ventana_emergente_fondo = document.getElementById('ventana-emergente-fondo');
var boton_cerrar_popup = document.getElementById('cerrar-popup');
var nombre_proyecto_popup = document.getElementById("nombre-proyecto-popup");
var img_proyecto = document.getElementById('img-popup');
var actual_img = document.getElementById('actual-img');
var total_img = document.getElementById('total-img');
var direccion_izquierda = document.getElementById('direccion-izquierda');
var direccion_derecha = document.getElementById('direccion-derecha');
var parrafo_popup = document.getElementById('parrafo-popup');

/*
    FUNCION QUE PERMITE EL CAMBIO DE IMAGEN
*/
function DireccionSlider(proyecto_actual_slider, proyecto_clicado){
    var posicion_inicial_slider = 1;
    direccion_izquierda.addEventListener('click', function(){
        if (posicion_inicial_slider == 1){
            actual_img.innerText = proyecto_actual_slider[proyecto_clicado].fotos;
            posicion_inicial_slider = proyecto_actual_slider[proyecto_clicado].fotos;
            img_proyecto.src = proyecto_actual_slider[proyecto_clicado].ruta_fotos + proyecto_actual_slider[proyecto_clicado].nombre + ` (${posicion_inicial_slider}).jpg`;
        } else if (posicion_inicial_slider != 1){
            actual_img.innerText = posicion_inicial_slider - 1;
            posicion_inicial_slider--;
            img_proyecto.src = proyecto_actual_slider[proyecto_clicado].ruta_fotos + proyecto_actual_slider[proyecto_clicado].nombre + ` (${posicion_inicial_slider}).jpg`;
        }
    });
    direccion_derecha.addEventListener('click', function(){
        if (posicion_inicial_slider < proyecto_actual_slider[proyecto_clicado].fotos){
            actual_img.innerText = posicion_inicial_slider + 1;
            posicion_inicial_slider++;
            img_proyecto.src = proyecto_actual_slider[proyecto_clicado].ruta_fotos + proyecto_actual_slider[proyecto_clicado].nombre + ` (${posicion_inicial_slider}).jpg`;
        } else if (posicion_inicial_slider == proyecto_actual_slider[proyecto_clicado].fotos){
            actual_img.innerText = 1;
            posicion_inicial_slider = 1;
            img_proyecto.src = proyecto_actual_slider[proyecto_clicado].ruta_fotos + proyecto_actual_slider[proyecto_clicado].nombre + ` (${posicion_inicial_slider}).jpg`;
        }
    });  
}

/* FUNCIONES DE LA VENTANA EMERGENTE */
boton_cerrar_popup.addEventListener('click', ActivarScroll);
/*
    FUNCIONES PARA ABRIR LA VENTANA EMERGENTE
*/
function EliminarScroll(){
    document.getElementById('body').setAttribute('class', 'no-scroll');
    VerPopUP();
}
function VerPopUP(){
    ventana_emergente_fondo.style.display = "flex";
    ventana_emergente_fondo.classList.remove('no-visible');
    ventana_emergente_fondo.classList.add('visible');
}

/*
    FUNCIONES PARA CERRAR LA VENTANA EMERGENTE
*/
function ActivarScroll(){
    document.getElementById('body').classList.remove('no-scroll');
    document.getElementById('body').setAttribute('class', 'scroll');
    EsconderPopUp();
}
function EsconderPopUp(){
    ventana_emergente_fondo.style.display = "none";
    ventana_emergente_fondo.classList.remove('visible');
    ventana_emergente_fondo.classList.add('no-visible');
    parrafo_popup.innerHTML = "";
    img_proyecto.src = "";
}