import React, { useState } from 'react';
import { CFormSelect } from '@coreui/react';

const ClanPicker = (props) => {
  const { formik, fieldName } = props;
  const [selectedClan, setSelectedClan] = useState('');

    // Opciones de clases
    const clanes = [
      { value: 'Rapsodia', label: 'Rapsodia - Lunes 20:00-22:00' },
      { value: 'Berserkers', label: 'Berserkers - Martes 20:00-22:00' },
      { value: 'Legion', label: 'Legión 404 - Miércoles 20:00-22:00' },
      { value: 'Beskari', label: 'Beskari - Miércoles 20:00-23:00' },
      { value: 'Heiko', label: 'Heiko - Jueves 20:00-22:00' },
      { value: 'Tecnificacion', label: 'Taller de Tecnificación - Jueves 20:00-22:00' },
      { value: 'Senkai', label: 'Senkai - Viernes 18:00-20:00' },
      { value: 'El Gancho', label: 'El Gancho - Viernes 20:00-22:00' },
      { value: 'Doble o Nada', label: 'Doble o Nada - Viernes 20:00-22:00' },
      { value: 'Gorgonas', label: 'Gorgonas - Sábado 10:00-12:00' },
      { value: 'Cerbero', label: 'Cerbero - Sábado 10:00-12:00' },
      { value: 'Black Spiral', label: 'Black Spiral - Sábado 12:00-14:00' },
      { value: 'Combate', label: 'Taller de Combate - Domingo 12:00-14:00' },
      { value: 'Dagas', label: 'X-Force - Domingos 14:00-16:00' },
      { value: 'Valkirias', label: 'Valkirias - Domingos 17:00-20:00' },
    ];

  // Manejar cambio de hora seleccionada
  const handleClanChange = (e) => {
    setSelectedClan(e.target.value);
  };

  return (
    <CFormSelect 
      value={formik.values[fieldName]} 
      onChange={e => formik.setFieldValue(fieldName, String(e.target.value))}
    >
      <option value="">Seleccionar Clan</option>
      {clanes.map((clan) => (
        <option key={clan.value} value={clan.value}>
          {clan.label}
        </option>
      ))}
    </CFormSelect>
  );
};

export default ClanPicker;