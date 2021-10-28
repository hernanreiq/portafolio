import React, { Component } from "react";
import Proyectos from "../../json/proyectos.json";
import Project from "../templates/project";

class Portfolio extends Component {
    state = {
        projects: Proyectos,
        projectsInit: 4
    }

    moreProjects = () => {
        if ((this.state.projectsInit + 4) < this.state.projects.length) {
            this.setState({
                projectsInit: this.state.projectsInit + 4
            });
        } else if ((this.state.projectsInit + 4) > this.state.projects.length && this.state.projectsInit < this.state.projects.length) {
            var calLastProjects = (this.state.projects.length - this.state.projectsInit);
            this.setState({
                projectsInit: this.state.projectsInit + calLastProjects
            })
        }
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
                                <ul id="proyectos-portafolio" className="animate__animated animate__fadeIn">
                                    {this.state.projects.slice(0, this.state.projectsInit).map((project, i) => {
                                        var image = require(`../../${project.ruta_fotos + project.nombre} (1).jpg`);
                                        return (
                                            <Project
                                                key={i}
                                                image={image.default}
                                                project={project}
                                                showDetails={this.props.showDetails}
                                            />
                                        )
                                    })
                                    }
                                </ul>
                            }
                            <div className="clearfix"></div>
                            {this.state.projectsInit < this.state.projects.length &&
                                <div className="contenedor-boton-ver-mas animate__animated animate__fadeIn">
                                    <button className="shadow ver-mas-proyectos" onClick={this.moreProjects}>VER MAS</button>
                                </div>
                            }
                        </div>
                    </div>
                </section>
                <div className="clearfix"></div>
            </React.Fragment>
        )
    }
}

export default Portfolio;