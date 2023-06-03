import React from 'react'
import { 
    CFormInput,
    CFormLabel,
    CRow,
    CCol,
    CButton,
    CTableDataCell,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CCard,
    CCardHeader,
    CCardBody,
    CTable,
    CTableHead
} from '@coreui/react'

const handleConfirm = () => {
    if (window.confirm('¿Estás seguro de que deseas guardar las recuperaciones?')) {
      window.location.href = '/asistencia'; // Redirecciona a la asistencia
    }
};


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
            <p><strong>¿Añadir alumno?</strong> <CButton color='primary'>Sí</CButton> <CButton color='danger'>No</CButton></p>
            <CCard>
                <CCardHeader align="middle">
                    <strong>Alumnos recuperando</strong>
                </CCardHeader>
                <CCardBody>
                    <CTable hover>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Nombre
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Clan Principal
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Falta que recupera
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Restantes
                                </CTableHeaderCell>                              
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow> {/* Esto es incorrecto pero es solo para que visualmente se vea lo que quiero hacer. */}
                                { /* Datos Falsos - Alumno 1 */ }
                                <CTableDataCell>Ana Lancha Cañas</CTableDataCell>
                                <CTableDataCell>Rapsodia</CTableDataCell>
                                <CTableDataCell>24/10/2022</CTableDataCell>
                                <CTableDataCell>16</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 2 */ }
                                <CTableDataCell>Blas Pitarch Tena</CTableDataCell>
                                <CTableDataCell>Rapsodia</CTableDataCell>
                                <CTableDataCell>06/11/2022</CTableDataCell>
                                <CTableDataCell>21</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 3 */ }
                                <CTableDataCell>Iñigo Gascón Royo</CTableDataCell>
                                <CTableDataCell>Legión 404</CTableDataCell>
                                <CTableDataCell>12/03/2023</CTableDataCell>
                                <CTableDataCell>7</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 4 */ }
                                <CTableDataCell>Francesco Anfuso</CTableDataCell>
                                <CTableDataCell>Senkai</CTableDataCell>
                                <CTableDataCell>25/09/2022</CTableDataCell>
                                <CTableDataCell>20</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 5 */ }
                                <CTableDataCell>Javier Sánchez Jiménez</CTableDataCell>
                                <CTableDataCell>Spec-3</CTableDataCell>
                                <CTableDataCell>12/01/2023</CTableDataCell>
                                <CTableDataCell>11</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 6 */ }
                                <CTableDataCell>Natalia López Martínez</CTableDataCell>
                                <CTableDataCell>Senkai</CTableDataCell>
                                <CTableDataCell>25/11/2022</CTableDataCell>
                                <CTableDataCell>30</CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
            <br></br>
            <CButton color="primary" onClick={handleConfirm}>
                Guardar Recuperaciones
            </CButton>
        </>
    )
}

export default Recuperaciones
