import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai";

function Tarea ({numTarea, texto, completa, completarTarea, eliminarTarea}) {
    return(
        <div className={completa ? 'tarea-contenedor completa' : 'tarea-contenedor' }>
            <div className="tarea-texto" onClick ={() => completarTarea(numTarea)}>
                {texto}
            </div>
            <div className="icono-contenedor-tarea" onClick={()=> eliminarTarea(numTarea)}>
                <AiOutlineCloseCircle className="icono-tarea"/>
            </div>
        </div>
    )
}

export default Tarea;