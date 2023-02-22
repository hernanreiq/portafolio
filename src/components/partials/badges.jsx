import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCheck } from "@fortawesome/free-solid-svg-icons";

class Badges extends Component {
    render() {
        const { Projects } = this.props;
        return (
            <React.Fragment>
                <div className="col-md-6 offset-md-3 mt-3 pb-4 px-0">
                    <div className="row">
                        <div className="col-md-6 my-2 px-0 text-center">
                            <div className="badge-container mx-auto animate__animated animate__backInLeft" onClick={() => {
                                document.getElementById('section-portafolio').scrollIntoView();
                            }}>
                                <div className="badge-body text-center pt-3">
                                    <span className="h2">{Projects.length}</span>
                                    <h5>Proyectos</h5>
                                </div>
                                <div className="badge-division"></div>
                                <div className="badge-footer text-center pt-3">
                                    <FontAwesomeIcon icon={faCheck} className="icon" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-2 px-0 text-center">
                            <div className="badge-container mx-auto animate__animated animate__backInRight"  onClick={() => {
                                document.getElementById('section-habilidades').scrollIntoView();
                            }}>
                                <div className="badge-body text-center pt-3">
                                    <span className="h2">2</span>
                                    <h5>Stacks</h5>
                                </div>
                                <div className="badge-division"></div>
                                <div className="badge-footer text-center pt-3">
                                    <FontAwesomeIcon icon={faCode} className="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;