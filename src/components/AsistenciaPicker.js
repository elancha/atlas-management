import React, { useState } from 'react';
import { CFormSelect } from '@coreui/react';

const AsistenciaPicker = () => {
  const [selectedAsistencia, setSelectedAsistencia] = useState('');

  // Lista de estados de asistencia
  const asistencia = [
    { value: 'presente', label: 'Presente' },
    { value: 'falta', label: 'Falta' },
    { value: 'prueba', label: 'Clase de Prueba' },
    { value: 'no_acude', label: 'No Acude' },
    { value: 'staff', label: 'Staff' },
    { value: 'vacaciones', label: 'Vacaciones' },
  ];

  // Manejar cambio de asistencia
  const handleAsistenciaChange = (e) => {
    setSelectedAsistencia(e.target.value);
  };

  return (
    <CFormSelect value={selectedAsistencia} onChange={handleAsistenciaChange}>
      <option value="">------</option>
      {asistencia.map((assist) => (
        <option key={assist.value} value={assist.value}>
          {assist.label}
        </option>
      ))}
    </CFormSelect>
  );
};

export default AsistenciaPicker;
