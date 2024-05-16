import './App.css';
import React, { useState } from 'react';
import Titulo from './componentes/titulo/Titulo';
import Subtitulo from './componentes/subtitulo/Subtitulo';
import Formulario from './componentes/formulario/Formulario';
import Listado from './componentes/listado/listado';
import Turno from './componentes/turno-final/turno';


function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };
  const eliminarCita = (id) => {
    const citasActualizadas = citas.filter(cita => cita.id !== id);
    setCitas(citasActualizadas);
  };
  return (
    
      <>
        <div className='titulo'>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        </div>
        
        <div className='container'>
        <div className='columnaForm'>
          <Subtitulo texto={"CREAR MI CITA"} />
          <Formulario agregarCita={agregarCita} />
        </div>
        <div className='columnaCita'>
          <Subtitulo texto={"ADMINISTRA TUS CITAS"} />
          <div className='columnaTurno'>
        <Turno citas={citas} eliminarCita={eliminarCita} />
          </div>
        </div>
      </div>
      
  
        
      </>
     
    
  );
}

export default App;
