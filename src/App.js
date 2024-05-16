import './App.css';
import React, { useState } from 'react';
import Titulo from './componentes/titulo/Titulo';
  import Subtitulo from './componentes/subtitulo/Subtitulo';
import Formulario from './componentes/formulario/Formulario';
import Listado from './componentes/listado/listado';
import Turno from './componentes/turno-final/turno';

function Confirm({ message, onCancel, onConfirm }) {
  return (
    <div className="confirm-modal">
      <p>{message}</p>
      <button onClick={onCancel}>Cancelar</button>
      <button onClick={onConfirm}>Confirmar</button>
    </div>
  );
}

function App() {
  const [citas, setCitas] = useState([]);
  const [confirmAddVisible, setConfirmAddVisible] = useState(false);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [citaToAdd, setCitaToAdd] = useState(null);

  const agregarCita = (nuevaCita) => {
    setCitaToAdd(nuevaCita);
    setConfirmAddVisible(true);
  };

  const eliminarCita = (id) => {
    setIdToDelete(id);
    setConfirmDeleteVisible(true);
  };

  const handleConfirmAdd = () => {
    setCitas([...citas, citaToAdd]);
    setConfirmAddVisible(false);
    setCitaToAdd(null);
  };

  const handleCancelAdd = () => {
    setConfirmAddVisible(false);
    setCitaToAdd(null);
  };

  const handleConfirmDelete = () => {
    const index = citas.findIndex(cita => cita.id === idToDelete);
    if (index !== -1) {
      const citasActualizadas = [...citas.slice(0, index), ...citas.slice(index + 1)];
      setCitas(citasActualizadas);
    }
    setConfirmDeleteVisible(false);
    setIdToDelete(null);
  };

  const handleCancelDelete = () => {
    setConfirmDeleteVisible(false);
    setIdToDelete(null);
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

      {confirmAddVisible && (
        <Confirm
          message="¿Estás seguro de que deseas agregar esta cita?"
          onCancel={handleCancelAdd}
          onConfirm={handleConfirmAdd}
        />
      )}

      {confirmDeleteVisible && (
        <Confirm
          message="¿Estás seguro de que deseas eliminar esta cita?"
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
}

export default App;
