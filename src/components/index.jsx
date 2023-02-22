import React, { Component } from "react";
import Skills from "./partials/skills";
import Header from "./partials/header";
import Portfolio from "./partials/portfolio";
import Information from "./partials/information";
import Contact from "./partials/contatc";
import Footer from "./partials/footer";
import PopUp from "./partials/popup";
import Proyectos from "../json/proyectos.json";

class Index extends Component {
    state = {
        project: [],
        showPopUp: false
    }

    showDetails = (project) => {
        this.setState({
            project: project,
            showPopUp: true
        });
    }
    
    hideDetails = () => {
        this.setState({
            project: [],
            showPopUp: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header Projects={Proyectos} />
                <main>
                    <Portfolio showDetails={this.showDetails} Projects={Proyectos} />
                    <Skills />
                    <Information />
                    <Contact />
                </main>
                <Footer />
                {this.state.showPopUp &&
                    <PopUp show={this.state.showPopUp} project={this.state.project} hideDetails={this.hideDetails} />
                }
            </React.Fragment>
        )
    }
}

export default Index;