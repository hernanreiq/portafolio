import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import Habilidades from "../../json/habilidades.json";
import AccordionTemplate from "../templates/accordion";
import { SkillsClasify } from "../helpers/functions";

class Skills extends Component {
    state = {
        skills: Habilidades,
        accordionSections: ['Front-end', 'Back-end', 'Diseño', 'Tecnologías'],
        skillsType: SkillsClasify(Habilidades)
    }
    render() {
        return (
            <React.Fragment>
                <div className="react-scroll" id="section-habilidades"></div>
                <section>
                    <div className="titulo titulo-gradiente-azul mis-habilidades">
                        <h2>Habilidades <span className="badge badge-pill ml-1 negro-fondo">{this.state.skills.length}</span></h2>
                    </div>
                    <div className="blanco"></div>
                    <div className="contenido habilidades">
                        <div className="container-xl">
                            {this.state.skills.length === 0 ?
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border text-dark" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div> :
                                <Accordion defaultActiveKey="Front-end">
                                    <div id="skills-scroll" className="react-scroll"></div>
                                    {this.state.accordionSections.map((section, i) => {
                                        if (section === 'Front-end') {
                                            return (
                                                <AccordionTemplate key={i} section={section} skills={this.state.skillsType.frontend} />
                                            )
                                        } else if (section === 'Back-end') {
                                            return (
                                                <AccordionTemplate key={i} section={section} skills={this.state.skillsType.backend} />
                                            )
                                        } else if (section === 'Diseño') {
                                            return (
                                                <AccordionTemplate key={i} section={section} skills={this.state.skillsType.design} />
                                            )
                                        } else {
                                            return (
                                                <AccordionTemplate key={i} section={section} skills={this.state.skillsType.tech} />
                                            )
                                        }
                                    })
                                    }
                                </Accordion>
                            }
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Skills;