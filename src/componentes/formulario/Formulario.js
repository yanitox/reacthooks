

import React, { useState } from 'react';
import './Formulario.css';

function Formulario({ agregarCita }) {
  const [formData, setFormData] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarCita(formData);
    // Resetear los campos del formulario
    setFormData({
      mascota: '',
      dueño: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <form className="padre-formulario" onSubmit={handleSubmit}>
      <label>Nombre Mascota</label>
      <input className='input-class' type="text" name="mascota" value={formData.mascota} onChange={handleChange} placeholder="Nombre mascota" />

      <label>Nombre Dueño</label>
      <input className='input-class' type="text" name="dueño" value={formData.dueño} onChange={handleChange} placeholder="Nombre dueño de la mascota" />

      <label>Fecha</label>
      <input className='input-class' type="date" name="fecha" value={formData.fecha} onChange={handleChange} />

      <label>Hora</label>
      <input className='input-class' name="hora" type="time" value={formData.hora} onChange={handleChange} />

      <label>Sintomas</label>
      <textarea name="sintomas" value={formData.sintomas} onChange={handleChange}></textarea>
      <div className='botonjs'>
        <button className='botonFormulario' type="submit">AGREGAR CITA</button>
      </div>
    </form>
  );
}

export default Formulario;
