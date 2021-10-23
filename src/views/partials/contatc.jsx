import React from "react";

function Contact() {
    return (
        <React.Fragment>
            <a name="contacto" className="ancla"></a>
            <section id="section-contacto">
                <div className="titulo titulo-gradiente-azul mi-contacto">
                    <h2>Contacto</h2>
                </div>
                <div className="blanco"></div>
                <div className="contenido contacto">
                    <ul id="lista-contacto" className="animate__animated animate__lightSpeedInRight">
                        <li className="shadow">
                            <a href="https://www.linkedin.com/in/hernan-demorizi-ure%C3%B1a-4430031b1/" target="_blank"><i className="fab fa-linkedin icono"></i><br/> LinkedIn</a>
                        </li>
                        <li className="shadow">
                            <a href="#contacto" id="boton-email"><i className="fas fa-envelope icono"></i><br/> Email</a>
                        </li>
                        <li className="shadow">
                            <a href="https://www.instagram.com/hernan.reiq" target="_blank"><i className="fab fa-instagram icono"></i><br/> Instagram</a>
                        </li>
                        <li className="shadow">
                            <a href="https://github.com/hernanreiq" target="_blank"><i className="fab fa-github icono"></i><br/> GitHub</a>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </section>
        </React.Fragment>
    )
}

export default Contact;