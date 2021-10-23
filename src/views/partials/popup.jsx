import React, { Component } from "react";
import { getImagesCarousel } from "../helpers/functions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class PopUp extends Component {
    render() {
        return (
            <div className="overlay visible">
                <div className="popup animate__animated animate__zoomIn">
                    <h4>{this.props.project.nombre}</h4>
                    <div className="popup-img">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                { getImagesCarousel(this.props.project.images, this.props.project.ruta_fotos, this.props.project.nombre) }
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only"><i className="fas fa-chevron-left"></i></span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only"><i className="fas fa-chevron-right"></i></span>
                            </a>
                        </div>
                    </div>
                    <h3 className="cantidad-fotos-popup">Imágenes: <span className="badge badge-pill ml-1 azul-fondo">{this.props.project.images}</span></h3>
                    <p>
                        <b>Enlace: </b>{this.props.project.enlace}<br /><br />
                        <b>Descripción: </b>{this.props.project.descripcion}<br /><br />
                        <b>Habilidades y tecnologías usadas: </b>{this.props.project.habilidades}<br /><br />
                        <b>Características: </b>{this.props.project.caracteristicas}<br /><br />
                        <b>Tipo de proyecto: </b>{this.props.project.tipo}<br /><br />
                    </p>
                    <button onClick={() => { this.props.hideDetails() }} className="cerrar-popup">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            </div>
        )
    }
}

export default PopUp;