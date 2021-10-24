import React, { Component } from "react";
import Portada from "../../img/portada.jpg";
import PortadaM from "../../img/portada-m.jpg";
import PortadaX from "../../img/portada-x.jpg";
import PortadaSS from "../../img/portada-ss.jpg";
import PortadaSSS from "../../img/portada-sss.jpg";
import PortadaSSSS from "../../img/portada-ssss.jpg";
import PortadaS from "../../img/portada-s.jpg";
import "../../css/header.css";
import { rainingBadges, nameWriter, professionWriter } from "../helpers/functions";
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
                    <div className="portada">
                        <React.Fragment>
                            {rainingBadges()}
                        </React.Fragment>
                        <picture>
                            <source media="(min-width:1550px)" srcSet={Portada} />
                            <source media="(min-width:770px)" srcSet={PortadaX} />
                            <source media="(min-width:700px)" srcSet={PortadaM} />
                            <source media="(min-width:630px)" srcSet={PortadaSS} />
                            <source media="(min-width:480px)" srcSet={PortadaSSS} />
                            <source media="(min-width:430px)" srcSet={PortadaSSSS} />
                            <source media="(min-width:200px)" srcSet={PortadaS} />
                            <img src={Portada} alt="Portada del portafolio" className="portada animate__animated animate__heartBeat"  />
                        </picture>
                    </div>
                    <a name="presentacion" className="ancla"></a>
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