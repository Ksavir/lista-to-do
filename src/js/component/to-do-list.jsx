import React from 'react'
import Tarea from  "./tarea.jsx"
import ListaTareas from "./lista-tareas.jsx";


const ToDoList = () => {
    return (
        <>
        <h1>TO DO List &#x1F4D5;</h1>
         <div className="app-tareas">
           <div className ="lista-de-tareas">
            
            <h5>Preparado para organizarte? &#x1F914;</h5>
            <ListaTareas />

           </div>
        </div>       
        </>
    )
};



export default ToDoList;

