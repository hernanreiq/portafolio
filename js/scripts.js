/*
    FUNCION PARA AGREGAR LAS INSIGNIAS QUE LLUEVEN EN EL HEADER
*/

function rainingBadges(){
    var container_showflakes = document.getElementById('snow-flakes');
    var skill_badges = ['css3', 'javascript', 'react', 'bootstrap', 'git', 'mongodb', 'nodejs', 'mysql', 'php', 'html5'];
    for(var i = 0; i < skill_badges.length; i++){   
        container_showflakes.innerHTML += `
        <div class="snowflake">
            <img src="svg/${skill_badges[i]}.svg" class="skill-badge">
        </div>
        `;
    }
}

rainingBadges();

/*
    FUNCION PARA OBTENER LOS DATOS DEL ARCHIVO PROYECTO.JSON UTILIZANDO LA LIBRERIA AXIOS EN REEMPLAZO A AJAX 
*/
var contador_cantidad_proyectos = document.getElementById('cantidad-proyectos-contador');

function ObtenerProyectosJSON(posicion){
    axios({
        method: 'GET',
        url: 'json/proyectos.json'
    }).then(res => {
        boton_ver_mas.style.display = "inline-block";
        contador_cantidad_proyectos.innerText = res.data.length;
        informacionJSON(res.data, posicion);
    }).catch(err => {
        console.log('Hay un error con los proyectos!', err);
    });
}

/* 
    CARGAR LOS PROYECTOS LUEGO DE 1 SEGUNDO 
*/
setTimeout(function() {
    var contenido_proyectos = document.getElementById('contenido-proyectos');
    var spinner = document.getElementById('spinner');
    contenido_proyectos.removeChild(spinner);
    ObtenerProyectosJSON(1);
}, 1000);

/*
    FUNCION QUE PERMITE ENVIAR LA INFORMACION DEL JSON A CADA PROYECTO QUE LE CORRESPONDA
*/
var posicion_actual_lista = 1;
var velocidad_listas = 4;
var resultado_lista_actual;
var longitud_proyectos;

function informacionJSON(proyectos, posicion) {
    longitud_proyectos = proyectos.length;
    CrearElementosLista(velocidad_listas, posicion, proyectos, longitud_proyectos);
}


/*
    CREACION DE ELEMENTOS DE LA LISTA A MEDIDA QUE SE VAYAN CREANDO OBJETOS CON LA INFORMACION DE LOS PROYECTOS,
    EL TAMAÑO DE SU CONTENEDOR CAMBIA DINAMICAMENTE DEPENDIENDO DE LA CANTIDAD DE PROYECTOS PUBLICADOS
*/
var mis_proyectos;
var contenedor_proyectos = document.getElementById("proyectos-portafolio");

function CrearElementosLista(velocidad, posicion, proyectos, longitud_proyectos) {
    mis_proyectos = proyectos;
    for (posicion; posicion <= velocidad; posicion++) {
        contenedor_proyectos.innerHTML += `
        <li class="shadow">
            <div class="contenedor-imagen">
                <img src="${proyectos[posicion - 1]["ruta_fotos"] + proyectos[posicion - 1]["nombre"]} (1).jpg" alt="proyecto ${proyectos[posicion - 1]["nombre"]}"><br>
            </div>
            <h2 class="mx-0 my-1">${proyectos[posicion - 1]["nombre"]}</h2>
            <div class="blanco my-1"></div>
            <a href="javascript:void(0)" onclick="mostrarDetalles(${posicion - 1})" class="btn mt-1 mb-2">VER DETALLES</a>
        </li>
        `;
    }
    posicion_actual_lista = posicion;
    resultado_lista_actual = longitud_proyectos - (posicion_actual_lista - 1);
    if (resultado_lista_actual == 0) {
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
boton_ver_mas.addEventListener('click', function() {
    if (resultado_lista_actual <= 4 && resultado_lista_actual > 0) {
        velocidad_listas = velocidad_listas + resultado_lista_actual;
    } else if (resultado_lista_actual > 4) {
        velocidad_listas = velocidad_listas + 4;
    }
    ObtenerProyectosJSON(posicion_actual_lista);
});

/*
    FUNCIONES QUE DETERMINAN EL PROYECTO QUE SE LE HA DADO CLIC Y TAMBIEN
    ASIGNAN LOS DETALLES O INFORMACIONES DENTRO DE LA VENTANA EMERGENTE
*/
function mostrarDetalles(proyecto_clicado) {
    EliminarScroll();
    DeterminarProyecto(proyecto_clicado);
}

function DeterminarProyecto(proyecto_clicado) {
    if (proyecto_clicado < longitud_proyectos && proyecto_clicado >= 0) {
        AsignarDetalles(proyecto_clicado);
    }
}

function AsignarDetalles(proyecto_actual) {
    CarouselImages(mis_proyectos, proyecto_actual);
    nombre_proyecto_popup.innerText = mis_proyectos[proyecto_actual].nombre;
    if (mis_proyectos[proyecto_actual].enlace != "") {
        var cadena_enlace = (mis_proyectos[proyecto_actual].enlace).substring(0, 18);
        if(cadena_enlace == 'https://github.com'){
            var texto_enlace = "Ver el repositorio";
        } else {
            var texto_enlace = "Ver el proyecto";
        }
        var enlace = '<a href="' + mis_proyectos[proyecto_actual].enlace + '" target="_blank">' + texto_enlace + ' <i class="fas fa-external-link-alt"></i></a>';
    } else {
        var enlace = "Enlace no disponible";
    }
    parrafo_popup.innerHTML = `
        <b>Enlace: </b> ${enlace}<br><br>
        <b>Descripción: </b>${mis_proyectos[proyecto_actual].descripcion} <br><br>
        <b>Habilidades y tecnologías usadas: </b>${mis_proyectos[proyecto_actual].habilidades}<br><br>
        <b>Características: </b>${mis_proyectos[proyecto_actual].caracteristicas}<br><br>
        <b>Tipo de proyecto: </b>${mis_proyectos[proyecto_actual].tipo} <br><br> 
    `;
}

/* VENTANA EMERGENTE */
var ventana_emergente_fondo = document.getElementById('ventana-emergente-fondo');
var boton_cerrar_popup = document.getElementById('cerrar-popup');
var nombre_proyecto_popup = document.getElementById("nombre-proyecto-popup");
var carousel_inner = document.getElementById('carousel-inner');
var parrafo_popup = document.getElementById('parrafo-popup');

/*
    FUNCION QUE CONFIGURA EL CAROUSEL DE LOS PROYECTOS
*/
function CarouselImages(proyectos, proyecto_actual) {
    carousel_inner.innerHTML = "";
    var primer_div_carousel = document.createElement('div');
    var primer_img_proyecto = document.createElement('img');
    primer_img_proyecto.src = proyectos[proyecto_actual].ruta_fotos + proyectos[proyecto_actual].nombre + " (1).jpg";
    primer_div_carousel.setAttribute('class', 'carousel-item active');
    primer_div_carousel.appendChild(primer_img_proyecto);
    carousel_inner.appendChild(primer_div_carousel);
    for (var i = 1; i < proyectos[proyecto_actual].fotos; i++) {
        var img_proyecto = document.createElement('img');
        img_proyecto.src = proyectos[proyecto_actual].ruta_fotos + proyectos[proyecto_actual].nombre + " (" + (i + 1) + ").jpg";
        var div_carousel = document.createElement('div');
        div_carousel.setAttribute('class', 'carousel-item');
        div_carousel.appendChild(img_proyecto);
        carousel_inner.appendChild(div_carousel);
    }
}

/* FUNCIONES DE LA VENTANA EMERGENTE */
boton_cerrar_popup.addEventListener('click', ActivarScroll);
/*
    FUNCIONES PARA ABRIR LA VENTANA EMERGENTE
*/
function EliminarScroll() {
    document.getElementById('body').setAttribute('class', 'no-scroll');
    ventana_emergente_fondo.classList.add('visible');
}

/*
    FUNCIONES PARA CERRAR LA VENTANA EMERGENTE
*/
function ActivarScroll() {
    ventana_emergente_fondo.classList.remove('visible');
    document.getElementById('body').classList.remove('no-scroll');
    document.getElementById('body').setAttribute('class', 'scroll');
    setTimeout(function(){
        carousel_inner.innerHTML = "";
        parrafo_popup.innerHTML = "";
    }, 350);
}

/*
    IMPRESION DE LAS SECCIONES DEL ACORDEON PARA LAS HABILIDADES
*/
var tipos_de_habilidades = ["Front-end", "Back-end", "Diseño", "Tecnologías"];
var id_contenedores_de_habilidades = ["frontend", "backend", "graphics", "tech"];
var acordeon_habilidades = document.getElementById('accordion-1');

imprimirSeccionesHTMLAcordeon();

function imprimirSeccionesHTMLAcordeon(){
    for(var i = 0; i < tipos_de_habilidades.length; i++){
        if(i == 0){
            var primera_seccion_habilidades = 'show';
            var seccion_abierta = "true";
            var hashtag = '#habilidades';
        } else {
            var primera_seccion_habilidades = '';
            var seccion_abierta = "false";
            var hashtag = '#skills';
        }
        acordeon_habilidades.innerHTML += `
        <div class="card shadow azul-fondo-plus">  
            <a href="${hashtag}" class="text-decoration-none">
                <button class="btn btn-link btn-block rounded-0 text-left text-white text-decoration-none titulo-gradiente-negro" type="button" data-toggle="collapse" data-target="#collapse${id_contenedores_de_habilidades[i]}" aria-expanded="${seccion_abierta}" aria-controls="collapse${id_contenedores_de_habilidades[i]}">
                    <div class="card-header border-0" id="heading${id_contenedores_de_habilidades[i]}">
                        <h2 class="titulo-skills mb-0">${tipos_de_habilidades[i]} <span class="badge badge-pill ml-1 azul-fondo" id="cantidad-habilidades-contador-${id_contenedores_de_habilidades[i]}"></span></h2>
                    </div>
                </button>
            </a>
            <div id="collapse${id_contenedores_de_habilidades[i]}" class="collapse pb-3 border border-dark ${primera_seccion_habilidades}" aria-labelledby="heading${id_contenedores_de_habilidades[i]}" data-parent="#accordion-1">
                <div class="card-body">
                    <ul class="animate__animated animate__fadeIn" id="contenedor-${id_contenedores_de_habilidades[i]}">
                    </ul>
                </div>
            </div>
        </div>
        `;
    }
    // CUANDO LAS SECCIONES TERMINEN DE IMPRIMIRSE, ENTONCES SE IMPRIMIRÁN LAS HABILIDADES
    ObtenerHabilidadesJSON();
}

/*
    FUNCIONES PARA EXTRAER, IMPRIMIR Y CONTABILIZAR LAS HABILIDADES
*/

/* CONTENEDORES DE HABILIDADES */
var contenedor_frontend = document.getElementById('contenedor-frontend');
var contenedor_backend = document.getElementById('contenedor-backend');
var contenedor_graphics = document.getElementById('contenedor-graphics');
var contenedor_tech = document.getElementById('contenedor-tech');

/* 
    FUNCION PARA EXTRAER LAS HABILIDADES DE HABILIDADES.JSON 
*/

function ObtenerHabilidadesJSON(){
    axios({
        method: 'GET',
        url: 'json/habilidades.json'
    }).then(res => {
        ClasificarHabilidades(res.data, res.data.length);
    }).catch(err => {
        console.log('Hay un error con las habilidades!', err);
    });
}

/* 
    CLASIFICACION DE LAS HABILIDADES EN SUS CONTENEDORES 
*/
function ClasificarHabilidades(habilidades, cantidad_habilidades){
    for(var i = 0; i < cantidad_habilidades; i++){
        switch(habilidades[i].tipo){
            case 'Front-end': 
                ImprimirHabilidades(habilidades[i], contenedor_frontend);
                break;
            case 'Back-end': 
                ImprimirHabilidades(habilidades[i], contenedor_backend);
                break;
            case 'Diseño': 
                ImprimirHabilidades(habilidades[i], contenedor_graphics);
                break;
            case 'Tecnologías': 
                ImprimirHabilidades(habilidades[i], contenedor_tech);
                break;
            default:
                console.log('No hay habilidades!');
        }
    }
    ContadorHabilidades();
}

/* 
    IMPRESION DE LAS HABILIDADES EN SUS CONTENEDORES 
*/
function ImprimirHabilidades(habilidad, contenedor){
    contenedor.innerHTML += `
        <li class="skill shadow">
            <img src="svg/${habilidad.archivo}" alt="${habilidad.nombre} - ${habilidad.tipo}">
            <p>${habilidad.nombre}</p>
        </li>
    `;
}

/* 
    INSERTANDO LA CANTIDAD DE HABILIDADES EN SUS INSIGNIAS (BADGES) 
*/
function ContadorHabilidades(){
    for(var i = 0; i <= tipos_de_habilidades.length; i++){
        if(i == 0){//CONTADOR DE TODAS LAS SKILLS
            var skills_contador = document.getElementsByClassName('skill');
            var badge_contador_skills = document.getElementById('cantidad-habilidades-contador');
        } else {//CONTADOR DE SKILLS ESPECIFICAS
            var contenedor = document.getElementById('contenedor-' + id_contenedores_de_habilidades[i - 1]);
            var skills_contador = contenedor.getElementsByClassName('skill');
            var badge_contador_skills = document.getElementById('cantidad-habilidades-contador-' + id_contenedores_de_habilidades[i - 1]);
        }
        badge_contador_skills.innerText = skills_contador.length;
    }
}

/*
    ESTE BLOQUE DE CODIGO ES PARA ENVIAR UN CORREO ELECTRONICO CON UN ASUNTO PRE-DEFINIDO
*/
var boton_email = document.getElementById('boton-email');
var id_correo = "hernandemure1202";
var dominio = "@gmail.com";
var asunto_mensaje_correo = "?subject=¡Acabo de ver tu portafolio!";
boton_email.addEventListener('click', function() {
    window.open("mailto:" + id_correo + dominio + asunto_mensaje_correo);
});

/* 
    CONFIGURACION DEL MENU DE NAVEGACION QUE CUANDO SE ACTIVA O DESAVTIVA SU ICONO CAMBIA
*/
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

/*
    ANIMACION CON LOS TEXTOS EN LA PORTADA / HEADER
*/
var nombre_apodo = document.getElementById('nombre-apodo');
var marca_hr = document.getElementById('marcaHR');
var marca_telefono_hr = document.getElementById('hr-brand-mobile');
var titulo_profesional = document.getElementById('titulo-profesional');

marca_hr.addEventListener('click', animacionNombre);
marca_telefono_hr.addEventListener('click', animacionNombre);

function animacionNombre(){
    var animarNombre = new Typewriter(nombre_apodo, {
        loop: false
    });
    
    animarNombre.typeString('Hernan.Reiq')
                .pauseFor(1500)
                .deleteChars(5)
                .typeString(' Virgilio')
                .pauseFor(200)
                .deleteChars(7)
                .typeString('. Demorizi Ureña')
                .pauseFor(13000)
                .start();
                
                animacionTituloProfesional();
}
            
function animacionTituloProfesional(){
    var animarTitulo = new Typewriter(titulo_profesional, {
        loop: true
    });
    
    animarTitulo.typeString('Desarrollador y Diseñador Web')
                .pauseFor(3500)
                .deleteAll()
                .typeString('Ingeniero de Sistemas y Computación')
                .pauseFor(6000)
                .start();
}

animacionNombre();
            
/*
    ANIMACIONES CON LA LIBRERIA SCROLLREVEAL PARA EL MENU, LOS PROYECTOS Y EL TEXTO EN INFORMACION
*/
window.sr = ScrollReveal();

sr.reveal('#proyectos-portafolio', {
    distance: '200px',
    origin: 'bottom',
    duration: 2000,
    scale: 0.2
});
sr.reveal('.contenedor-texto-informacion', {
    distance: '200px',
    origin: 'bottom',
    duration: 2000,
    scale: 0.2
});