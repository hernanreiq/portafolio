import React, { Component } from "react";
import Habilidades from "../../json/habilidades.json";
import SkillBadge from "../templates/skill-badge";

class Skills extends Component {
    state = {
        skills: Habilidades
    }
    render() {
        return (
            <React.Fragment>
                <div className="react-scroll" id="section-habilidades"></div>
                <section>
                    <div className="titulo titulo-gradiente-azul mis-habilidades">
                        <h2>Habilidades <span className="badge badge-pill ml-1 negro-fondo" id="cantidad-habilidades-contador"></span></h2>
                    </div>
                    <div className="blanco"></div>
                    <div className="contenido habilidades">
                        <div className="container-xl">
                            <div className="accordion" id="accordion-1">
                                {this.state.skills.length === 0 ?
                                    <div className="d-flex justify-content-center" id="spinner">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div> :
                                    <ul className="animate__animated animate__fadeIn">
                                        {this.state.skills.map((skill, i) => {
                                            return (
                                                <SkillBadge key={i} skill={skill} />
                                            )
                                        })
                                        }
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Skills;