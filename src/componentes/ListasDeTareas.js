import React, { useState } from "react"; /*podemos importar tambien el hook de esta manera que sirve para realizar un evento*/
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea.js';


  function ListaDeTareas(){

   
    
    const [tareas, setTareas ]= useState([]); /* forma de usar el hook useState para un arreglo de estado inicial vacio y funcion setTareas*/
    
    const agregarTarea=tarea => {
      console.log(tarea);
      if(tarea.texto.trim()){ /*verificamos que la tarea no este vacia*/
        tarea.texto =tarea.texto.trim(); /*eliminamos espacios vacios al inicio y al final*/
        const tareaActualizadas=[tarea, ...tareas]; /* pone primero la tarea nueva luego todas las tareas creadas debajo en un arreglo CONVIRTIENDOLES EN OBJETOS INDIVIDUALES*/
        setTareas(tareaActualizadas); /* LA FUNCION DEL HOOK Y LE PASAMOS NUEVOS ESTADO DE TAREAS ACTUALIZADAS*/

      }

    }

    /*funcion eliminar tarea*/
    const eliminarTarea=id=>{
      const tareaActualizadas =tareas.filter(tarea => tarea.id !== id);
      setTareas(tareaActualizadas);
    }  

    /*funcion tarea completada: esto invierte de verdadero a falso y lo sigana settareas asi es como se  aplicara el css de tarea tachada*/

    const completarTarea=id=>{
      const tareaActualizadas=tareas.map(tarea =>{
        if(tarea.id===id){
          tarea.completada=!tarea.completada;
        }
        return tarea;
      });
      setTareas(tareaActualizadas);
    }

    return (

      /*fragmentos sirven para no agregar un contenedor adicional es por eso que no llevan div*/
      <> 
      <TareaFormulario  onSubmit={agregarTarea}/>  {/*pasamos un props cuando se envia*/}
      <div className='tareas-listas-contenedor'>

         {/*para renderizar una lista de componentes */}
         {
          tareas.map((tarea) =>    /*map es un metodo que va tomar  cada una de esas tareas y la va pasara una por una como argumento para otra funcion y va ha realizar loque nostros especifiquemos */
            <Tarea 
              key={tarea.id} /*para que sepa los orden y no los cambien react*/
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada} 
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea} />
          )
         }
      </div> 
      </>

    );

  };
  
  export default ListaDeTareas;

