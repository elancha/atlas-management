import React from 'react'
import { 
    CFormInput,
    CFormLabel,
    CRow,
    CCol,

} from '@coreui/react'


const Recuperaciones = () => {
    return (
        <>
            <CRow className="mb-3">
                <CCol md="2">
                    <CFormLabel htmlFor="nombre">Introduce el nombre del alumno:</CFormLabel>
                </CCol>
                <CCol md="10">
                    <CFormInput
                        type='text'
                        id='nombreAlumno'
                        placeholder='Nombre completo'
                    />
                </CCol>
            </CRow>
        </>
    )
}

export default Recuperaciones
