import { Fragment } from "react";

function WorkCard({ Empresa, setShowPopup }) {
    return (
        <Fragment>
            <div className="mt-3 work-card text-center shadow rounded">
                <div className="card-body py-2 px-1">
                    <div className="work-img-container shadow">
                        <img className="work-img" src={`./portafolio/Empresas/${Empresa.Nombre}/${Empresa.Logo}`} alt={`${Empresa.Nombre} - Hernan Demorizi Ureña`} />
                    </div>
                    <div className="work-description-container">
                        <button className="shadow" onClick={() => setShowPopup(Empresa.Nombre)}>
                            {Empresa.Nombre}
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WorkCard;