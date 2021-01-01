(function(){
    var boton_email = document.getElementById('boton-email');
    var id_correo = "hernandemure1202";
    var dominio = "@gmail.com";
    boton_email.addEventListener('click', function(){
        window.open("mailto:" + id_correo + dominio);
    });
}());