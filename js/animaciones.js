window.sr = ScrollReveal();

sr.reveal('#navBar', {
    duration: 1000,
    distance: '100px',
    origin: 'top'
});
sr.reveal('#foto-presentacion', {
    distance: '500px',
    origin: 'right',
    duration: 2000,
    reset: true,
    rotate: {
        y: 50,
        x: 30,
        z: 20
    }
});
sr.reveal('.presentacion-texto', {
    distance: '500px',
    origin: 'left',
    duration: 2000,
    reset: true,
    rotate: {
        y: -50,
        x: -30,
        z: 20
    }
});
sr.reveal('#proyectos-portafolio', {
    distance: '500px',
    origin: 'bottom',
    duration: 2000,
    scale: 0.2
});
sr.reveal('#lista-habilidades', {
    distance: '500px',
    origin: 'bottom',
    duration: 2000
});
sr.reveal('.contenedor-texto-informacion', {
    distance: '500px',
    origin: 'bottom',
    duration: 2000,
    scale: 0.2
});
sr.reveal('#lista-contacto', {
    distance: '500px',
    origin: 'bottom',
    duration: 2000
});
sr.reveal('#section-portafolio', {
    distance: '10px',
    origin: 'top',
    duration: 1000
});
sr.reveal('#section-habilidades', {
    distance: '10px',
    origin: 'top',
    duration: 1000
});
sr.reveal('#section-informacion', {
    distance: '10px',
    origin: 'top',
    duration: 1000
});