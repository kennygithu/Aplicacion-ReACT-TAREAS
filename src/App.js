
import './App.css';
import logowalleworld from './imagenes/logow.png';

import ListaDeTareas from './componentes/ListasDeTareas.js';



function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img 
          src={logowalleworld}
          className='walleworld-logo' />

      </div>
      <div className='tareas-lista-principal'>

        <h1>Mis Tareas</h1>
        <ListaDeTareas />
        
        
       

      </div>
      
    </div>
  );
}

export default App;
