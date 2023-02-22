import React, { Component } from "react";
import { nameWriter, professionWriter } from "../helpers/functions";
import Hernan from "../../img/hernan.jpg";
import Navbar from "./navbar";
import Banner from "./banner";
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
        const { Projects } = this.props;
        return (
            <React.Fragment>
                <header>
                    <Banner />
                    <Navbar animationInit={this.animationInit}/>
                    <section className="presentacion" onLoad={this.animationInit}>
                        <div className="presentacion">
                            <img src={Hernan} alt="Hernan Demorizi Ureña - Hernan.Reiq" id="foto-presentacion" className="animate__animated animate__backInDown shadow" />
                            <div className="presentacion-texto  animate__animated animate__backInUp">
                                <h1 className="nombre" ref={this.nameRef}>{' '}</h1>
                                <h2 className="hobby" ref={this.professionRef}>{' '}</h2>
                            </div>
                            <Badges Projects={Projects} />
                        </div>
                    </section>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;