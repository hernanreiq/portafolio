import React, { Component } from "react";
import "../../css/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
    state = {
        icon: <FontAwesomeIcon icon={faBars} />,
        active: false,
        optionsStyle: 'options'
    }

    checkScreenWidth = () => {
        if (window.outerWidth < 825) {
            this.navbarResponsive();
        }
    }

    navbarResponsive = () => {
        if (!this.state.active) {
            this.setState({
                icon: <FontAwesomeIcon icon={faTimes} />,
                active: !this.state.active,
                optionsStyle: 'options d-block'
            })
        } else {
            this.setState({
                active: !this.state.active,
                icon: <FontAwesomeIcon icon={faBars} />,
                optionsStyle: 'options'
            })
        }
    }

    navRef = React.createRef();

    buttonClick = (section) => {
        if (section !== 'presentacion') {
            this.checkScreenWidth();
        }
        if (section === 'presentacion') {
            var presentation = document.getElementById('section-presentacion');
            presentation.scrollIntoView();
        }
        if (section === 'proyectos') {
            var projects = document.getElementById('section-portafolio');
            projects.scrollIntoView();
        }
        if (section === 'habilidades') {
            var skills = document.getElementById('section-habilidades');
            skills.scrollIntoView();
        }
        if (section === 'informacion') {
            var information = document.getElementById('section-informacion');
            information.scrollIntoView();
        }
        if (section === 'contacto') {
            var contact = document.getElementById('section-contacto');
            contact.scrollIntoView();
        }
    }

    render() {
        return (
            <nav>
                <div className="navContainer">
                    <button onClick={this.checkScreenWidth} className="barsMenu">
                        {this.state.icon}
                    </button>
                    <div className={this.state.optionsStyle}>
                        <button onClick={() => { this.buttonClick('proyectos') }} className="option">Proyectos</button>
                        <button onClick={() => { this.buttonClick('habilidades') }} className="option">Habilidades</button>
                        <button onClick={() => { this.buttonClick('informacion') }} className="option">Sobre mí...</button>
                        <button onClick={() => { this.buttonClick('contacto') }} className="option">Contacto</button>
                        <div className="marca marca-option">
                            <button onClick={() => {
                                this.buttonClick('presentacion');
                                this.props.animationInit();
                            }} className="marca">Hernan.Reiq</button>
                        </div>
                    </div>
                    <div className="marca marca-externa">
                        <button onClick={() => {
                            this.buttonClick('presentacion');
                            this.props.animationInit();
                        }} className="marca">Hernan.Reiq</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;