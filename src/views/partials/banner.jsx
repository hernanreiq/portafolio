import React from "react";
import Portada from "../../img/portada.jpg";
import PortadaM from "../../img/portada-m.jpg";
import PortadaX from "../../img/portada-x.jpg";
import PortadaSS from "../../img/portada-ss.jpg";
import PortadaSSS from "../../img/portada-sss.jpg";
import PortadaSSSS from "../../img/portada-ssss.jpg";
import PortadaS from "../../img/portada-s.jpg";
import { rainingBadges } from "../helpers/functions";

function Banner() {
    return (
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
                <img src={Portada} alt="Portada del portafolio" className="portada animate__animated animate__heartBeat" />
            </picture>
        </div>
    )
}

export default Banner;