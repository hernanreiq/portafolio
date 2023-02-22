import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function PopUpWork({ Empresa, Posiciones, setShowPopup }) {
    useEffect(() => changeScroll(Empresa !== ''))
    const changeScroll = (state) => {
        let body = document.getElementsByTagName('body');
        if (state) {
            body[0].removeAttribute('class');
            body[0].setAttribute('class', 'no-scroll');
        } else {
            body[0].removeAttribute('class');
            body[0].setAttribute('class', 'scroll');
            setShowPopup('')
        }
    }
    return (
        <div className="overlay visible">
            <div className="popup animate__animated animate__zoomIn w-100">
                <h4>{Empresa}</h4>
                {Posiciones.reverse().map((Posicion, i) =>
                    Posicion.Empresa === Empresa &&
                    <div className="card mb-3" key={i}>
                        <div className="card-header py-1 px-3">
                            <h5 className="mb-0 text-left">
                                {Posicion.Posicion}
                            </h5>
                        </div>
                        <div className="card-body p-0">
                            <p className="m-0">
                                Tecnologías usadas en la posición: <br />
                                {Posicion.Herramientas.map((Herramienta, j) =>
                                    <span key={j} className={`badge ${j % 2 === 0 ? 'badge-primary' : 'badge-dark'} mr-2 mb-0`}>
                                        {Herramienta}
                                    </span>
                                )}  
                            </p>
                        </div>
                        <div className="card-footer py-1 px-3">
                            <h6 className="mb-0 text-left">Desde {Posicion.Fecha_Inicio} hasta {Posicion.Fecha_Final ? Posicion.Fecha_Final : 'la actualidad'}</h6>
                        </div>
                    </div>
                )}
                <button onClick={() => changeScroll(Empresa === '')} className="cerrar-popup">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    )
}

export default PopUpWork;