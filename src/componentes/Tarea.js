import React from "react";
import '../hojas-de-estilo/Tarea.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'; /*se instala react icon para importar entre corchetes e pone el nombre del icon*/

function Tarea({id, texto, completada, completarTarea, eliminarTarea}){
    return(
        <div className={completada? 'tarea-contenedor completada':'tarea-contenedor'}> {/* estas condicones son para que tareas.css asigne un estilo correspondiente al div */}
            <div className='tarea-texto' 
             onClick={()=> completarTarea(id)}>

                {texto}

            </div>
            <div className='tarea-contenedor-iconos'
            onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle  className='tarea-icono'/>
                
            </div>
        </div>
    );
}
export default Tarea;