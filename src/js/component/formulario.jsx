import React , {useState} from 'react'
import { v4 as uuidv4 } from "uuid"

function Formulario (props) {

    const [input, setInput] = useState("")
   
   const cambioInput = (e) =>{
       setInput(e.target.value);
   }
   
    const envioInput = (e) => {
        e.preventDefault();
        
        const tareaNueva = {
            numTarea :  uuidv4(),
            texto : input,
            completada: false,
        }
        props.onSubmit(tareaNueva);
    }


    return (
       <form className="tarea-formulario" onSubmit={envioInput}>
        <input className="tarea-input"
        type="text" placeholder="&#x1F58A; Escribe tus pendientes "
        name="texto"
        onChange={cambioInput}
        />
        <button className="tarea-boton">Agregar tarea</button>
       </form> 
    );
};

export default Formulario;