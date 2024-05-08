// Turno.js

import React from 'react';
import './turno.css';

function Turno({ citas, eliminarCita }) {
  return (
    <div className="padrejs">
      {citas.map(cita => (
        <div key={cita.id} className='cartinscky'>
          <p><span className='span-p'>Mascota:</span> {cita.mascota}</p>
          <p><span className='span-p'>Dueño:</span> {cita.dueño}</p>
          <p><span className='span-p'>Fecha:</span> {cita.fecha}</p>
          <p><span className='span-p'>Hora:</span> {cita.hora}</p>
          <p><span className='span-p'>Sintomas:</span> {cita.sintomas}</p>
          <button className='btn-turno' onClick={() => eliminarCita(cita.id)}>Eliminar × </button>
        </div>
      ))}
    </div>
  );
}

export default Turno;
