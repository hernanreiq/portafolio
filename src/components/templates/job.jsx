function JobTemplate({ Posicion }) {
    return (
        <p className="mb-3 text-left shadow">
            <b>Empresa: </b>{Posicion.Empresa} <br />
            <b>Posición: </b>{Posicion.Posicion} <br />
            <b>Desde: </b>{Posicion.Fecha_Inicio} <br />
            <b>Hasta: </b>{Posicion.Fecha_Final ? Posicion.Fecha_Final : 'Actualidad'} <br />
            <b>Tecnologías usadas en la posición: </b> 
            {Posicion.Herramientas.map((Herramienta, j) =>
                <span key={j} className={`badge badge-dark mr-2 mb-1 badge-work-tech`}>
                    {Herramienta}
                </span>
            )}
        </p>
    )
}

export default JobTemplate;