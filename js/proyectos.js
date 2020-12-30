/* ELEMENTOS DE LA WEB */
var nombre_proyecto_popup = document.getElementById("nombre-proyecto-popup");
var img_proyecto = document.getElementById('img-popup');
var actual_img = document.getElementById('actual-img');
var total_img = document.getElementById('total-img');
var parrafo_popup = document.getElementById('parrafo-popup');

var Proyectos_array = [];

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

var p1 = new Proyecto("Koncafé", "Web", "", 5, "img/Koncafé/", "Esta maqueta de página web la hice como favor a una compañera de la Universidad para que pueda aprobar una materia. La distribución de colores me encantó, tristemente y por obvias razones no podía hacer mi firma en el pie de la página. Lo único que odie de haber creado la página, fue tener que copiar y pegar la portada con el pie de página para las otras secciones, no podía hacer uso de PHP para dividir el código y reutilizarlo.", "HTML, CSS y Google Maps", 'Es una maqueta sencilla con varias sub-páginas');

var p2 = new Proyecto("Zona Colonial Digital", "Web", "", 6, "img/Zona Colonial Digital/", "Esta página web fue realizada en colaboración con Nairobi Nivar como parte de un trabajo final en una asignatura de la Universidad. La maquetación inicial fue hecha por mi compañera, mientras que yo me encargué de agregar las otras sub-páginas, generar códigos con PHP, envío de mensajes personalizados al correo, los colores y de hacerla adaptable a distintas pantallas.", "HTML, CSS, PHP e Inserción de vídeo de YouTube", "Diseño adaptable a distintas pantallas, generar código único para obtener Internet en el lugar, envío de mensaje personalizado al correo");

var p3 = new Proyecto("Funeraria Elma Tao", "Web", "", 4, "img/Funeraria Elma Tao/", "Con todo el respeto que los muertos se merecen y sin intención de ofender a nadie, el diseño de esta web se me ocurrió mientras hablaba con un compañero de la Universidad, di por hecho que sería interesante tener una portada con un pasto verde simulando un cementerio, para luego al hacer scroll ir bajo tierra viendo ataudes. El nombre de la web es un extra para completar el chiste.", "HTML y CSS", "Como es parte de un chiste ácido, no tuve interés en crear otras sub-páginas");

var p4 = new Proyecto("F de Farándula", "Web", "", 3, "img/F de Farándula/", "Esta web la hice a modo de práctica de un curso que estaba haciendo sobre diseño web, la idea del sitio al igual que su nombre es propio, lo único que tomé del curso fue el cómo iba a distribuir los elementos en la página. La idea del curso era hacer un Blog de viajes, yo quería algo distinto", "HTML, CSS y Font-awesome", "No tiene sub-páginas, es una maqueta sencilla");

function DeterminarProyecto(proyecto_clicado){
    if(proyecto_clicado <= Proyectos_array.length && proyecto_clicado >= 0){
        var proyecto_mostrar = "p" + proyecto_clicado;
        AsignarDetalles(eval(proyecto_mostrar));
    }
}
function AsignarDetalles(proyecto_actual){
    nombre_proyecto_popup.innerText = proyecto_actual.nombre;
    img_proyecto.src = proyecto_actual.ruta_fotos + 1 + ".jpg";
    actual_img.innerText = 1;
    total_img.innerText = proyecto_actual.fotos;
    parrafo_popup.innerHTML = `
        <b>Tipo de proyecto: </b>${proyecto_actual.tipo} <br><br> 
        <b>Descripción: </b>${proyecto_actual.descripcion} <br><br>
        <b>Habilidades y tecnologías usadas: </b>${proyecto_actual.habilidades}<br><br>
        <b>Características: </b>${proyecto_actual.caracteristicas}<br><br>
    `;
}

var contenedor_proyectos = document.getElementById("proyectos-portafolio");
function CrearElementosLista(){
    var resultado_division_contenido = (Proyectos_array.length) / 2;
    var pixeles_contenido = 245 * resultado_division_contenido;
    contenedor_proyectos.style.height = pixeles_contenido + "px";
    for(var i = 1; i <= Proyectos_array.length; i++){
        contenedor_proyectos.innerHTML += `
        <li>
            <a href="javascript:void(0)">
            <h2>${Proyectos_array[i-1]}</h2>
            <div class="contenedor-imagen">
                <img src="img/${Proyectos_array[i-1]}/1.jpg" alt="proyecto ${Proyectos_array[i-1]}"><br>
            </div>
            <p>Ver detalles</p>
            </a>
        </li>
        `;
    }
}
CrearElementosLista();