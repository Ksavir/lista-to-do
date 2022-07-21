/*Este componente contiene los otros 2 componenetes, y se usara el estado para agregar las tareas **/ 
import React, {useState} from 'react'
import Formulario from './formulario.jsx';
import Tarea from './tarea.jsx'



function ListaTareas () {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
       if(tarea.texto.trim()){
        tarea.texto = tarea.texto.trim();
        const tareasActualizadas =[tarea, ...tareas]
        setTareas(tareasActualizadas);
       }
    }


    const eliminarTarea = (numTarea) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.numTarea !== numTarea)
        setTareas(tareasActualizadas);
    }

   const completarTarea = (numTarea) => {
    const tareasActualizadas = tareas.map( tarea => {
    if(tarea.numTarea === numTarea) {
        tarea.completa = !tarea.completa;
    }
    return tarea;
   } );
   setTareas(tareasActualizadas);
}

    return(
        <>
        <Formulario onSubmit={agregarTarea}/>
        <div className="lista-tareas-contenedor">
           {
            tareas.map((tarea) =>
            <Tarea 
            key ={tarea.numTarea}
            numTarea={tarea.numTarea}
            texto={tarea.texto}
            completa = {tarea.completa}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea} />
            )     
           }
        </div>
        </>
    );
    
}/*#d0d0d5*/

export default ListaTareas;