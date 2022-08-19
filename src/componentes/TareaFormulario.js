import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid'; /*importamos este paqueete para poder usar en el id*/


function TareaFormulario(props){

    const [input, setInput]= useState('');


    const manejarCambio=e=>{

        setInput(e.target.value); /*extrae el valor que se escribe en el formularuio y lo asigna a input de arriba*/
       

       

    }

    const manejarEnvio=e=>{
        e.preventDefault();  /*esto e spara que no se cargue la pagina denuevo*/
        
        const tareaNueva={
            id:uuidv4(), /*se llama al apquete importado para generar id unicos*/
            texto:input,
            completada: false
        }

        props.onSubmit(tareaNueva); /*cuando se envia el formulario*/
        
    }
    return(

        <form className='tarea-formulario' 
        onSubmit={manejarEnvio}> {/*recibe un props de lista de tareas mediante onsubmit*/}
            <input 
            className='tarea-input'
            type='text'
            placeholder='Escribe una Tarea'
            name='texto' /*asigna un nombre*/
            onChange={manejarCambio} /*llama a la funcio manejar cmabio*/
            />
            <button className='tarea-boton' >
                agregar tarea
            </button>
        </form>

    );
}

export default TareaFormulario; 