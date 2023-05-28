import React, { useState } from 'react';
import { CFormSelect } from '@coreui/react';

const HourPicker = () => {
  const [selectedHour, setSelectedHour] = useState('');

  // Generar opciones de horas desde las 10:00 hasta las 0:00 con rangos de media hora
  const generateHours = () => {
    const hours = [];
    for (let i = 10; i <= 24; i++) {
      hours.push(`${i}:00`);
      hours.push(`${i}:30`);
    }
    return hours;
  };

  // Manejar cambio de hora seleccionada
  const handleHourChange = (e) => {
    setSelectedHour(e.target.value);
  };

  return (
    <CFormSelect value={selectedHour} onChange={handleHourChange}>
      <option value="">Seleccionar hora</option>
      {generateHours().map((hour) => (
        <option key={hour} value={hour}>
          {hour}
        </option>
      ))}
    </CFormSelect>
  );
};

export default HourPicker;