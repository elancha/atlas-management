import React, { useState } from 'react';
import { CFormSelect } from '@coreui/react';

const PaymentPicker = (props) => {
  const { formik, fieldName } = props;
  const [selectedClan, setSelectedClan] = useState('');

    // Opciones de clases
    const pagos = [
      { value: 'anual', label: 'Una Cuota' },
      { value: 'dosCuotas', label: 'Dos Cuotas' },
      { value: 'tresCuotas', label: 'Tres Cuotas' },
      { value: 'mensual', label: 'Mensual' },
    ];

  // Manejar cambio de hora seleccionada
  const handleClanChange = (e) => {
    setSelectedPago(e.target.value);
  };

  return (
    <CFormSelect 
      value={formik.values[fieldName]} 
      onChange={e => formik.setFieldValue(fieldName, String(e.target.value))}
    >
      <option value="">Seleccionar Pago</option>
      {pagos.map((pago) => (
        <option key={pago.value} value={pago.value}>
          {pago.label}
        </option>
      ))}
    </CFormSelect>
  );
};

export default PaymentPicker;
