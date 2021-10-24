import React from "react";
import "../../css/navbar.css";

function Navbar() {
    return (
        <nav id="navBar">
            <div className="containter">
                <a href="javascript:void(0)" id="menu-navegacion"><i className="fas fa-bars"></i></a>
                <ul id="lista-menu" className="container-xl px-0">
                    <div className="opciones-menu">
                        <a className="text-decoration-none text-white" href="#proyectos">
                            <li className="menu">Proyectos</li>
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
                        <button className="text-white" id="marcaHR" onClick={this.animationInit}>Hernan.Reiq</button>
                    </div>
                </ul>
                <button className="text-white" id="hr-brand-mobile" onClick={this.animationInit}>Hernan.Reiq</button>
            </div>
        </nav>
    )
}

export default Navbar;