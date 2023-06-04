import React from 'react';
import {
    CImage
} from '@coreui/react';
import imagen from 'src/assets/images/ana.jpg'

const FichaAlumno = () => {

  return (
    <div>
        <h2>Ficha del Alumno</h2>
        <br />
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <CImage rounded thumbnail src={imagen} width={200} height={200} />
            <div style={{ marginLeft: '10px' }}>
                <p><strong>Nombre Completo:</strong> Raúl Pérez Martínez</p>
                <p><strong>DNI / Pasaporte:</strong> 00000000A</p>
                <p><strong>Fecha de Nacimiento:</strong> 20/01/1991</p>
                <p><strong>Email:</strong> correo@correo.com</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p><strong>Teléfono Principal:</strong> 000000000</p>
                    <p style={{ marginLeft: '20px' }}><strong>Teléfono Secundario:</strong> 000000000</p>
                </div>
            </div>
        </div>

        <br />

        <p><strong>Dirección:</strong> Calle calle, nº1 1ºA</p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p><strong>Código Postal:</strong> 28000</p>
            <p style={{ marginLeft: '20px' }}><strong>Población:</strong> Madrid</p>
        </div>

        <p><strong>Patología médica a destacar:</strong></p>
        <p>Hombro</p>

        <hr />

        <p><strong>Nombre del tutor legal:</strong> No corresponde</p>
        <p><strong>Apellidos del tutor legal:</strong> No corresponde</p>
        <p><strong>DNI / Pasaporte del tutor legal:</strong> No corresponde</p>
        <p><strong>Teléfono del tutor legal:</strong> No corresponde</p>

        <hr />

        <p><strong>Información de las Clases:</strong></p>

        <p><strong>Tipo de Pago seleccionado:</strong> </p>
        <p><strong>Observaciones:</strong> </p>
    </div>
  );
};

export default FichaAlumno;
