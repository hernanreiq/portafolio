import React, { Component } from "react";

class SkillBadge extends Component {
    state = {
        image: require(`../../img/Habilidades/${this.props.skill.archivo}`)
    }
    render() {
        return (
            <React.Fragment>
                <li className="skill shadow">
                    <img src={this.state.image.default} alt={this.props.skill.nombre} />
                    <p>{this.props.skill.nombre}</p>
                </li>
            </React.Fragment>
        )
    }
}

export default SkillBadge;