import React, { useState } from 'react';
import { CFormSelect } from '@coreui/react';

const WeekdayPicker = () => {
  const [selectedDay, setSelectedDay] = useState('');

  // Lista de días de la semana
  const weekdays = [
    { value: 'lunes', label: 'Lunes' },
    { value: 'martes', label: 'Martes' },
    { value: 'miércoles', label: 'Miércoles' },
    { value: 'jueves', label: 'Jueves' },
    { value: 'viernes', label: 'Viernes' },
    { value: 'sábado', label: 'Sábado' },
    { value: 'domingo', label: 'Domingo' },
  ];

  // Manejar cambio de día seleccionado
  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  return (
    <CFormSelect value={selectedDay} onChange={handleDayChange}>
      <option value="">Seleccionar día</option>
      {weekdays.map((day) => (
        <option key={day.value} value={day.value}>
          {day.label}
        </option>
      ))}
    </CFormSelect>
  );
};

export default WeekdayPicker;