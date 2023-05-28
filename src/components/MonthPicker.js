import React, { useState } from 'react';
import { CFormSelect } from '@coreui/react';

const MonthPicker = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  // Opciones de meses
  const months = [
    { value: '01', label: 'Enero' },
    { value: '02', label: 'Febrero' },
    { value: '03', label: 'Marzo' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Mayo' },
    { value: '06', label: 'Junio' },
    { value: '07', label: 'Julio' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Septiembre' },
    { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' },
    { value: '12', label: 'Diciembre' },
  ];

  // Manejar cambio de mes seleccionado
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <CFormSelect value={selectedMonth} onChange={handleMonthChange}>
      <option value="">Seleccionar mes</option>
      {months.map((month) => (
        <option key={month.value} value={month.value}>
          {month.label}
        </option>
      ))}
    </CFormSelect>
  );
};

export default MonthPicker;