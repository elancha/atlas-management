import React, { useState } from 'react';
import { CFormSelect } from '@coreui/react';

const YearPicker = ({ onChange }) => {
  const [selectedYear, setSelectedYear] = useState('');

  // Generar opciones de años
  const startYear = 2021; // Año inicial
  const endYear = new Date().getFullYear(); // Año actual
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  // Manejar cambio de año seleccionado
  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    onChange(year); // Llamar a la función onChange con el año seleccionado
  };

  return (
    <CFormSelect value={selectedYear} onChange={handleYearChange}>
      <option value="">Seleccionar año</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </CFormSelect>
  );
};

export default YearPicker;
