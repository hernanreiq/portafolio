import React, { Component } from "react";
import "../../css/header.css";
import { rainingBadges, nameWriter, professionWriter } from "../helpers/functions";
import Portada from "../../img/portada.jpg";
import Hernan from "../../img/hernan.jpg";
import Badges from "./badges";

class Header extends Component {
    nameRef = React.createRef();
    professionRef = React.createRef();

    animationInit = () => {
        var name = this.nameRef.current;
        nameWriter(name);
        var profession = this.professionRef.current;
        professionWriter(profession);
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    {/* <div className="portada">
                        <React.Fragment>
                            {rainingBadges()}
                        </React.Fragment>
                        <img src={Portada} alt="Portada del portafolio" className="portada animate__animated animate__heartBeat" />
                    </div>
                    <a name="presentacion" className="ancla"></a> */}
                    <section className="presentacion" onLoad={this.animationInit}>
                        <div className="presentacion">
                            <img src={Hernan} alt="Hernan Demorizi Ureña - Hernan.Reiq" id="foto-presentacion" className="animate__animated animate__backInDown shadow" />
                            <div className="presentacion-texto  animate__animated animate__backInUp">
                                <h1 className="nombre" ref={this.nameRef}></h1>
                                <h2 className="hobby" ref={this.professionRef}></h2>
                            </div>
                            <Badges />
                        </div>
                    </section>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;