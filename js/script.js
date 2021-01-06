
/* VENTANA EMERGENTE */
var ventana_emergente_fondo = document.getElementById('ventana-emergente-fondo');
var boton_cerrar_popup = document.getElementById('cerrar-popup');
var popup = document.getElementById('popup');

boton_cerrar_popup.addEventListener('click', ActivarScroll);

/* ELEMENTOS DE LA WEB */
var nombre_proyecto_popup = document.getElementById("nombre-proyecto-popup");
var img_proyecto = document.getElementById('img-popup');
var actual_img = document.getElementById('actual-img');
var total_img = document.getElementById('total-img');
var direccion_izquierda = document.getElementById('direccion-izquierda');
var direccion_derecha = document.getElementById('direccion-derecha');
var parrafo_popup = document.getElementById('parrafo-popup');

/*
    VARIABLES
*/
var Proyectos_array = [];
var proyecto_actual_slider;

/*
    CONSTRUCTUTOR DE OBJETOS
*/
function Proyecto (nombre, tipo, enlace, cantidad_fotos, ruta_fotos, descripcion, habilidades_usadas, caracteristicas){
    this.nombre = nombre;
    this.tipo = tipo;
    this.enlace = enlace;
    this.fotos = cantidad_fotos;
    this.ruta_fotos = ruta_fotos;
    this.descripcion = descripcion;
    this.habilidades = habilidades_usadas;
    this.caracteristicas = caracteristicas;

    Proyectos_array.push(this.nombre);
}

/*
    OBJETOS CON LA INFORMACION DE LOS PROYECTOS
*/
var p1 = new Proyecto("Koncafé", "Web", "https://hernanreiq.github.io/koncafe/", 5, "img/Koncafé/", "Esta maqueta de página web la hice como favor a una compañera de la Universidad para que pueda aprobar una materia. La distribución de colores me encantó, tristemente y por obvias razones no podía hacer mi firma en el pie de la página. Lo único que odie de haber creado la página, fue tener que copiar y pegar la portada con el pie de página para las otras secciones, no podía hacer uso de PHP para dividir el código y reutilizarlo.", "HTML, CSS y Google Maps.", 'Es una maqueta sencilla con varias sub-páginas.');
var p2 = new Proyecto("Zona Colonial Digital", "Web", "https://hernanreiq.github.io/zona-colonial-digital/", 6, "img/Zona Colonial Digital/", "Esta página web fue realizada en colaboración con Nairobi Nivar como parte de un trabajo final en una asignatura de la Universidad. La maquetación inicial fue hecha por mi compañera, mientras que yo me encargué de agregar las otras sub-páginas, generar códigos con PHP, envío de mensajes personalizados al correo, los colores y de hacerla adaptable a distintas pantallas.", "HTML, CSS, PHP e Inserción de vídeo de YouTube.", "Diseño adaptable a distintas pantallas, generar código único para obtener Internet en el lugar, envío de mensaje personalizado al correo.");
var p3 = new Proyecto("Generador de contraseñas", "Sistema Web", "https://hernanreiq.github.io/password-generator/", 3, "img/Generador de contraseñas/", "Este sistema web puede ser de ayuda para aquellas personas que se preocupan por la seguridad de sus cuentas. Este pequeño proyecto lo hice para desarrollar un poco más mi lógica de programación.", "HTML, CSS, JavaScript, Google Fonts y Font-Awesome.", "Sistema web diseñado en un ancho de 300 píxeles, genera contraseñas seguras de forma aleatoria, permite configurar que tipos de carácteres conformarán la contraseña.");
var p4 = new Proyecto("Sommer Rose RD", "Web", "https://hernanreiq.github.io/sommerrose/", 4, "img/Sommer Rose RD/", "Esta página web la hice para el negocio de mi prima, ella vende sombreros personalizados pintados a mano. La pagina te permite hacer un pedido o una orden de compra, para luego enviar toda esa información por WhatsApp y coordinar con ella el diseño que quieres en tu producto.", "HTML, CSS, JavaScript, Font-Awesome, Google Fonts y WhatsApp API.", "Diseño adaptable para distintos tamaños de pantalla, te permite enviar mensajes a WhatsApp con tu orden de compra, es una maqueta sencilla con un proposito definido.");
var p5 = new Proyecto("Grupo Golden", "Web", "", 4, "img/Grupo Golden/", "La motivación que me llevó a crear esa web fue mi alto interés por iniciar un negocio, enfocado esencialmente en desarrollar servicios que otras personas pudieran consumir. Aunque todo el desarrollo haya sido por mi, el plan era hacerlo en equipo, pero tristemente mis compañeros no tuvieron la misma visión o yo no supe motivarlos lo suficiente.", "HTML, CSS, JavaScript, jQuery y PHP.", "Cuenta con diseño adaptable a distintas pantallas, formulario de contacto que envía notificaciones al correo, ventanas emergentes para mostrar la descripción de los proyectos.");
var p6 = new Proyecto("Visitas Promedio YT", "Extensión de navegador para Google Chrome", "https://github.com/hernanreiq/visitas-promedio-yt", 3, "img/Visitas Promedio YT/", "Esta extensión del navegador Google Chrome, la diseñe y desarrollé para uso personal. La extensión sirve para analizar el rendimiento de las visitas en un canal de YouTube, tomando como parámetro la cantidad actuales de suscriptores.", "HTML, CSS, JavaScript y JSON.", "Extensión que calcula el promedio de visitas que deberia tener un canal en 48 horas.");
var p7 = new Proyecto("Funeraria Elma Tao", "Web", "https://hernanreiq.github.io/funeraria-elma-tao/", 4, "img/Funeraria Elma Tao/", "Con todo el respeto que los muertos se merecen y sin intención de ofender a nadie, el diseño de esta web se me ocurrió mientras hablaba con un compañero de la Universidad, di por hecho que sería interesante tener una portada con un pasto verde simulando un cementerio, para luego al hacer scroll ir bajo tierra viendo ataudes. El nombre de la web es un extra para completar el chiste.", "HTML y CSS.", "Como es parte de un chiste ácido, no tuve interés en crear otras sub-páginas.");
var p8 = new Proyecto("F de Farándula", "Web", "https://hernanreiq.github.io/f-de-farandula/", 3, "img/F de Farándula/", "Esta web la hice a modo de práctica de un curso que estaba haciendo sobre diseño web, la idea del sitio al igual que su nombre es propio, lo único que tomé del curso fue el cómo iba a distribuir los elementos en la página. La idea del curso era hacer un Blog de viajes, yo quería algo distinto.", "HTML, CSS y Font-awesome.", "No tiene sub-páginas, es una maqueta sencilla.");

/*
    FUNCIONES QUE DETERMINAN EL PROYECTO QUE SE LE HA DADO CLIC Y TAMBIEN
    ASIGNAN LOS DETALLES O INFORMACIONES DENTRO DE LA VENTANA EMERGENTE
*/
function mostrarDetalles(proyecto_clicado){
    EliminarScroll();
    DeterminarProyecto(proyecto_clicado);
}
function DeterminarProyecto(proyecto_clicado){
    if(proyecto_clicado <= Proyectos_array.length && proyecto_clicado >= 0){
        var proyecto_mostrar = "p" + proyecto_clicado;
        proyecto_actual_slider = eval(proyecto_mostrar);
        AsignarDetalles(eval(proyecto_mostrar));
    }
}
function AsignarDetalles(proyecto_actual){
    nombre_proyecto_popup.innerText = proyecto_actual.nombre;
    img_proyecto.src = proyecto_actual.ruta_fotos + 1 + ".jpg";
    actual_img.innerText = 1;
    total_img.innerText = proyecto_actual.fotos;
    if (proyecto_actual.enlace != ""){
        var enlace = '<a href="'+ proyecto_actual.enlace +'" target="_blank"><i class="fas fa-external-link-alt"></i></a>';
    } else {
        var enlace = "Enlace no disponible";
    }
    parrafo_popup.innerHTML = `
        <b>Tipo de proyecto: </b>${proyecto_actual.tipo} <br><br> 
        <b>Enlace: </b> ${enlace}<br><br>
        <b>Descripción: </b>${proyecto_actual.descripcion} <br><br>
        <b>Habilidades y tecnologías usadas: </b>${proyecto_actual.habilidades}<br><br>
        <b>Características: </b>${proyecto_actual.caracteristicas}<br><br>
    `;
    DireccionSlider();
}

/*
    CREACION DE ELEMENTOS DE LA LISTA A MEDIDA QUE SE VAYAN CREANDO OBJETOS CON LA INFORMACION DE LOS PROYECTOS,
    EL TAMAÑO DE SU CONTENEDOR CAMBIA DINAMICAMENTE DEPENDIENDO DE LA CANTIDAD DE PROYECTOS PUBLICADOS
*/
var contenedor_proyectos = document.getElementById("proyectos-portafolio");
function CrearElementosLista(velocidad, posicion){
    for(posicion; posicion <= velocidad; posicion++){
        contenedor_proyectos.innerHTML += `
        <li>
            <a href="javascript:void(0)" onclick="mostrarDetalles(${posicion})">
            <h2>${Proyectos_array[posicion-1]}</h2>
            <div class="contenedor-imagen">
                <img src="img/${Proyectos_array[posicion-1]}/1.jpg" alt="proyecto ${Proyectos_array[posicion-1]}"><br>
            </div>
            <p>Ver detalles</p>
            </a>
        </li>
        `;
    }
    posicion_actual_lista = posicion;
    resultado_lista_actual = Proyectos_array.length - (posicion_actual_lista - 1);
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
var posicion_actual_lista = 1;
var velocidad_listas = 4;
var resultado_lista_actual;
CrearElementosLista(velocidad_listas, posicion_actual_lista);
var boton_ver_mas = document.getElementById('boton-ver-mas');
boton_ver_mas.addEventListener('click', function(){
    if (resultado_lista_actual <= 4 && resultado_lista_actual > 0){
        velocidad_listas = velocidad_listas + resultado_lista_actual;
    } else if (resultado_lista_actual > 4){
        velocidad_listas = velocidad_listas + 4;
    }
    CrearElementosLista(velocidad_listas, posicion_actual_lista);
});

/*
    FUNCION QUE PERMITE EL CAMBIO DE IMAGEN
*/
function DireccionSlider(){
    var posicion_inicial_slider = 1;
    direccion_izquierda.addEventListener('click', function(){
        if (posicion_inicial_slider == 1){
            actual_img.innerText = proyecto_actual_slider.fotos;
            img_proyecto.src = proyecto_actual_slider.ruta_fotos + proyecto_actual_slider.fotos + ".jpg";
            posicion_inicial_slider = proyecto_actual_slider.fotos;
        } else if (posicion_inicial_slider != 1){
            actual_img.innerText = posicion_inicial_slider - 1;
            posicion_inicial_slider--;
            img_proyecto.src = proyecto_actual_slider.ruta_fotos + posicion_inicial_slider + ".jpg"; 
        }
    });
    direccion_derecha.addEventListener('click', function(){
        if (posicion_inicial_slider < proyecto_actual_slider.fotos){
            actual_img.innerText = posicion_inicial_slider + 1;
            posicion_inicial_slider++;
            img_proyecto.src = proyecto_actual_slider.ruta_fotos + posicion_inicial_slider + ".jpg";
        } else if (posicion_inicial_slider == proyecto_actual_slider.fotos){
            actual_img.innerText = 1;
            img_proyecto.src = proyecto_actual_slider.ruta_fotos +  "1.jpg";
            posicion_inicial_slider = 1;
        }
    });  
}

/* FUNCIONES DE LA VENTANA EMERGENTE */
/*
    FUNCIONES PARA ABRIR LA VENTANA EMERGENTE
*/
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

/*
    FUNCIONES PARA CERRAR LA VENTANA EMERGENTE
*/
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