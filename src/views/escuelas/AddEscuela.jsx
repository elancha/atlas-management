import React from 'react'
import { 
    CForm, 
    CFormInput,
    CFormTextarea,
    CFormLabel,
    CRow,
    CCol,
} from '@coreui/react'
import { CButton } from '@coreui/react';

const handleConfirm = () => {
    if (window.confirm('¿Estás seguro de que deseas guardar los cambios?')) {

      // Agregar lógica para guardar alumnos en BD
      window.location.href = '/escuelas'; // Redirecciona a la lista de clanes
    }
  };

const AddEscuela = () => {
    return (
        <>
            <CForm>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="nombre">Nombre:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='nombreEscuela'
                            placeholder='Nombre de la Escuela'
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="nombre">Dirección:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='direccion'
                            placeholder='Dirección de la Escuela'
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="cp_escuela">Código Postal:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="text"
                            id="cp_escuela"
                        />
                    </CCol>
                    <CCol md="2">
                        <CFormLabel htmlFor="poblacion">Población:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="text"
                            id="poblacion_escuela"
                        />
                    </CCol>
                </CRow>
                 <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="nombreDean">Deán:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='dean'
                            placeholder='Deán de la Escuela'
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="telContacto">Teléfono de Contacto:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="tel"
                            id="tel_escuela"
                        />
                    </CCol>
                    <CCol md="2">
                        <CFormLabel htmlFor="mail">E-Mail:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                    <CFormInput
                            type="email"
                            id="mail_escuela"
                            placeholder="email@correo.com"
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="nombre">Sables asignados:</CFormLabel>
                    </CCol>
                    <CCol md="1">
                        <CFormInput
                            type='number'
                            id='numSables'
                        />
                    </CCol>
                </CRow>
            </CForm>
            <CButton color="primary" onClick={handleConfirm}>
                Guardar y volver a la lista de escuelas
            </CButton>
        </>
    )
}

export default AddEscuela
