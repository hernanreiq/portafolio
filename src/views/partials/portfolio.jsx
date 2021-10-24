import React, { Component } from "react";
import Proyectos from "../../json/proyectos.json";

class Portfolio extends Component {
    state = {
        projects: Proyectos
    }
    getProjects = () => {
        console.log(Proyectos);
    }
    componentDidMount() {
        this.getProjects();
    }
    render() {
        return (
            <React.Fragment>
                <div className="react-scroll" id="section-portafolio"></div>
                <section>
                    <div className="titulo titulo-gradiente-negro mis-proyectos">
                        <h2>Proyectos</h2>
                    </div>
                    <div className="azul"></div>
                    <div className="contenedor-portafolio">
                        <div className="contenido proyectos" id="contenido-proyectos">
                            {this.state.projects.length === 0 ?
                                <div className="d-flex justify-content-center" id="spinner">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div> :
                                <ul id="proyectos-portafolio">
                                    {this.state.projects.map((project, i) => {
                                        var image = require(`../../${project.ruta_fotos + project.nombre} (1).jpg`);
                                        return (
                                            <li className="shadow" key={i}>
                                                <div className="contenedor-imagen">
                                                    <img src={image.default} alt="" /><br />
                                                </div>
                                                <h2 className="mx-0 my-1">{project.nombre}</h2>
                                                <div className="blanco my-1"></div>
                                                <button onClick={() => {
                                                    this.props.showDetails(project)
                                                }} className="btn mt-1 mb-2">VER DETALLES</button>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            }
                            <div className="clearfix"></div>
                            <div className="contenedor-boton-ver-mas">
                                <button id="boton-ver-mas" className="shadow">VER MAS</button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="clearfix"></div>
            </React.Fragment>
        )
    }
}

export default Portfolio;