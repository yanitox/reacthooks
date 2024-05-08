// Listado.js

import React from 'react';

function Listado({ citas, eliminarCita }) {
  return (
    <div>
      {citas.map(cita => (
        <div key={cita.id}>
          {/* Mostrar detalles de la cita */}
          <button onClick={() => eliminarCita(cita.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default Listado;
