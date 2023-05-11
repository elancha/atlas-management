import React from 'react'
import { 
    CForm, 
    CFormInput,
    CFormTextarea,
    CFormLabel,
    CRow,
    CCol
} from '@coreui/react'

const AddAlumno = () => {
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
                            id='nombre'
                            placeholder='Nombre completo'
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="apellidos">Apellidos:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='apellidos'
                            placeholder='Apellidos'
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="dni">DNI / Pasaporte:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="text"
                            id="dni"
                            placeholder="DNI / Pasaporte"
                        />
                    </CCol>
                    <CCol md="2">
                        <CFormLabel htmlFor="fechaNac">Fecha de Nacimiento:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="date"
                            id="fechaNac"
                        />
                    </CCol>
                 </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="email">E-Mail:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type="email"
                            id="email"
                            placeholder="email@correo.com"
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="tel1">Teléfono Principal:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="tel"
                            id="tel1"
                        />
                    </CCol>
                    <CCol md="2">
                        <CFormLabel htmlFor="tel2">Teléfono Secundario:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="tel"
                            id="tel2"
                        />
                    </CCol>
                 </CRow>
                 <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="direccion">Dirección:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='direccion'
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="cp">Código Postal:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="text"
                            id="cp"
                        />
                    </CCol>
                    <CCol md="2">
                        <CFormLabel htmlFor="poblacion">Población:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="text"
                            id="poblacion"
                        />
                    </CCol>
                 </CRow>
                 <CFormTextarea
                    id="patologia"
                    label="Patología médica a destacar:"
                    rows={3} />
            </CForm>
        </>
    )
}

export default AddAlumno