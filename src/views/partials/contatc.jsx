import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
                            <a href="https://www.linkedin.com/in/hernan-demorizi-ure%C3%B1a-4430031b1/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} className="icono" />
                                <br /> LinkedIn</a>
                        </li>
                        <li className="shadow">
                            <a href="#contacto" id="boton-email">
                                <FontAwesomeIcon icon={faEnvelope} className="icono" />
                                <br /> Email</a>
                        </li>
                        <li className="shadow">
                            <a href="https://www.instagram.com/hernan.reiq" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} className="icono" />
                                <br /> Instagram</a>
                        </li>
                        <li className="shadow">
                            <a href="https://github.com/hernanreiq" target="_blank">
                                <FontAwesomeIcon icon={faGithub} className="icono" />
                                <br /> GitHub</a>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </section>
        </React.Fragment>
    )
}

export default Contact;