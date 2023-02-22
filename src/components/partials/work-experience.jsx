import { Fragment, useState } from "react";
import Trabajos from "../../json/experiencia-laboral.json";
import WorkCard from "../templates/work";
import PopUpWork from "./popup-work";

function WorkExperience() {
    const [ShowPopup, setShowPopup] = useState('');
    return (
        <Fragment>
            <div className="titulo  mi-informacion mt-4">
                <h2>Experiencia Laboral</h2>
            </div>
            <div className="azul mb-3"></div>
            <div className="row-card">
                {Trabajos.Empresas.map((Empresa, i) =>
                    <WorkCard Empresa={Empresa} key={i} setShowPopup={setShowPopup} />
                )}
            </div>
            {ShowPopup !== '' &&
                <PopUpWork Empresa={ShowPopup} Posiciones={Trabajos.Posiciones} setShowPopup={setShowPopup} />
            }
        </Fragment>
    )
}

export default WorkExperience;