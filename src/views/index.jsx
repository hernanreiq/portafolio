import React, { Component } from "react";
import Skills from "./partials/skills";
import Header from "./partials/header";
import Portfolio from "./partials/portfolio";
import Information from "./partials/information";
import Contact from "./partials/contatc";
import Footer from "./partials/footer";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <Portfolio />
                    <Skills />
                    <Information />
                    <Contact />
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Index;