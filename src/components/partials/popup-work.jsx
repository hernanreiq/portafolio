import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import JobTemplate from "../templates/job";

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
            <div className="popup animate__animated animate__zoomIn">
                <h4>Posiciones</h4>
                {Posiciones.map((Posicion, i) =>
                    <JobTemplate key={i} Posicion={Posicion} />
                )}
                <button onClick={() => changeScroll(Empresa === '')} className="cerrar-popup">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    )
}

export default PopUpWork;