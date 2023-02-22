import React, { Component } from "react";

class Project extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="shadow">
                    <div className="contenedor-imagen">
                        <img src={this.props.image} alt={this.props.project.nombre + ' by: Hernan.Reiq (Hernan Demorizi Ureña)'} /><br />
                    </div>
                    <h2 className="mx-0 my-1">{this.props.project.nombre}</h2>
                    <div className="blanco my-1"></div>
                    <button onClick={() => {
                        this.props.showDetails(this.props.project)
                    }} className="btn mt-1 mb-2">VER DETALLES</button>
                </li>
            </React.Fragment>
        )
    }
}

export default Project;