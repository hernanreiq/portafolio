import React, { Component } from "react";
import Portada from "../../img/portada.jpg";
import Hernan from "../../img/hernan.jpg";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="portada">
                        <div id="snow-flakes"></div>
                        <img src={Portada} alt="Portada del portafolio" className="portada animate__animated animate__heartBeat" />
                    </div>
                    <nav id="navBar">
                        <a href="javascript:void(0)" id="menu-navegacion"><i className="fas fa-bars"></i></a>
                        <ul id="lista-menu" className="container-xl px-0">
                            <div className="opciones-menu">
                                <a className="text-decoration-none text-white" href="#proyectos">
                                    <li className="menu">Portafolio</li>
                                </a>
                                <a className="text-decoration-none text-white" href="#habilidades">
                                    <li className="menu">Habilidades</li>
                                </a>
                                <a className="text-decoration-none text-white" href="#informacion">
                                    <li className="menu">Sobre mí...</li>
                                </a>
                                <a className="text-decoration-none text-white" href="#contacto">
                                    <li className="menu">Contacto</li>
                                </a>
                            </div>
                            <div className="marca">
                                <a href="#presentacion" className="text-decoration-none text-white" id="marcaHR">
                                    <li className="menu">Hernan.Reiq</li>
                                </a>
                            </div>
                        </ul>
                        <a href="#presentacion" id="hr-brand-mobile" className="text-decoration-none text-white">Hernan.Reiq</a>
                    </nav>
                    <a name="presentacion" className="ancla"></a>
                    <section className="presentacion">
                        <div className="presentacion">
                            <img src={Hernan} alt="Hernan Demorizi Ureña - Hernan.Reiq" id="foto-presentacion" className="animate__animated animate__rotateInDownRight shadow" />
                            <div className="presentacion-texto  animate__animated animate__rotateInUpLeft">
                            <h1 className="nombre" id="nombre-apodo"></h1>
                            <h2 className="hobby" id="titulo-profesional"></h2>
                            </div>
                        </div>
                    </section>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;