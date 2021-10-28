import React from "react";

function Information() {
    return (
        <React.Fragment>
            <div className="react-scroll" id="section-informacion"></div>
            <section>
                <div className="titulo titulo-gradiente-negro mi-informacion">
                    <h2>Sobre mí...</h2>
                </div>
                <div className="azul"></div>
                <div className="contenido informacion">
                    <div className="contenedor-texto-informacion animate__animated animate__fadeIn">
                        <p className="mb-0">Soy un egresado de la Universidad Dominicana O&M, donde estudié la carrera de Ingeniería de Sistemas y Computación. A pesar de haber conocido muchas ramas interesantes de dicha carrera, siempre me interesó la programación, debido a que esta me da la oportunidad de crear soluciones y automatizar procesos de la vida cotidiana.<br /><br />
                            <b>Mi personalidad: </b>me defino como una persona autodidacta, proactiva, persistente, amante de los retos y con un gran entusiasmo por seguir aprendiendo. Para mí es importante tener una personalidad que me permita pensar y actuar por mi propia cuenta, pero me gusta escuchar aquellas vivencias que puedan orientarme sobre cuales errores evitar en la vida.<br /><br />
                            <b>Respecto a mis conocimientos: </b>estoy seguro de que con el conocimiento adquirido en los años en que me he estado preparando, puedo crear soluciones eficientes para resolver muchos problemas de mi área, pero también debo reconocer que este mundo está muy apegado a la informática, por lo que siempre tendré que mantenerme actualizado para poder ofrecer mejores resultados.<br /><br />
                            <b>Mis metas: </b>
                        </p>
                        <ul className="metas mb-4 mt-1">
                            <li><p className="mb-0">Convertirme en un referente de calidad y disciplina.</p></li>
                            <li><p className="mb-0">Ofrecer soluciones y resultados que superen las expectativas esperadas.</p></li>
                            <li><p className="mb-0">Colaborar en equipos que me permitan mejorar mis habilidades blandas.</p></li>
                            <li><p className="mb-0">Aumentar la versatilidad con la que me adapto a los lenguajes y las nuevas tecnologías.</p></li>
                        </ul>
                        <p className="mb-0">
                            <b>Pasatiempos: </b>cuando no estoy programando me gusta jugar en la computadora, me encanta compartir con mis seres queridos y a veces veo alguna película de acción o suspenso.<br /><br />
                        </p>
                        <blockquote className="frase">
                            <b>Mi frase: </b>“No puedes improvisar la calidad y tampoco la experiencia, pero si puedes hacer las cosas con el corazón para obtener buenos resultados.” &nbsp;
                            <cite>Hernan V. Demorizi Ureña.</cite>
                        </blockquote>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Information;