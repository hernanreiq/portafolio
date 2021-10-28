import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import SkillBadge from "../templates/skill-badge";

class AccordionTemplate extends Component {
    state = {
        accordionStyle: "border-0 px-4 py-3 btn btn-link btn-block rounded-0 text-left text-white text-decoration-none titulo-gradiente-negro",
        badgePillStyle: "badge badge-pill ml-1 azul-fondo",
        cardStyle: "card shadow azul-fondo-plus"
    }
    render() {
        return (
            <Card className={this.state.cardStyle}>
                <Accordion.Toggle as={Card.Header} eventKey={this.props.section} className={this.state.accordionStyle} onClick={() =>{
                    document.getElementById('section-habilidades').scrollIntoView();
                }}>
                    <h2 className="titulo-skills mb-0">{this.props.section} <span className={this.state.badgePillStyle}>{this.props.skills.length}</span></h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.props.section} className="pb-3 border border-dark ">
                    <Card.Body>
                        <ul className="animate__animated animate__fadeIn">
                            {this.props.skills.map((skill, i) => {
                                return (
                                    <SkillBadge key={i} skill={skill} />
                                )
                            })
                            }
                        </ul>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}

export default AccordionTemplate;