import React from 'react'
import { 
    CCard, 
    CCardBody, 
    CCardHeader, 
    CContainer, 
    CTable, 
    CTableBody, 
    CTableDataCell, 
    CTableHead, 
    CTableHeaderCell, 
    CTableRow,
    CButton,
 } from '@coreui/react'
import { useNavigate } from 'react-router-dom';

const Clanes = () => {
    const navigate = useNavigate();
    return (
        <>
            <CContainer className="d-grid gap-2 d-md-flex justify-content-md-end p-2">
                <CButton className="me-md-2" color="primary" type="button" onClick={() => navigate('/alumnos/add')}>
                    Añadir Clan
                </CButton>
            </CContainer>
            <CCard>
                <CCardHeader align="middle">
                    <strong>Lista de Alumnos</strong>
                </CCardHeader>
                <CCardBody>
                    <CTable hover>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Nombre
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Apellidos
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    DNI
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Fecha de Nacimiento
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Clan Principal
                                </CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow onClick={() => navigate('/alumnos/ficha')}> {/* Esto es incorrecto pero es solo para que visualmente se vea lo que quiero hacer. */}
                                { /* Datos Falsos - Alumno 1 */ }
                                <CTableDataCell>Raúl</CTableDataCell>
                                <CTableDataCell>Pérez Martínez</CTableDataCell>
                                <CTableDataCell>00000000A</CTableDataCell>
                                <CTableDataCell>20/04/1991</CTableDataCell>
                                <CTableDataCell>Black Spiral</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 2 */ }
                                <CTableDataCell>Ana</CTableDataCell>
                                <CTableDataCell>Lancha Cañas</CTableDataCell>
                                <CTableDataCell>00000000B</CTableDataCell>
                                <CTableDataCell>31/01/1980</CTableDataCell>
                                <CTableDataCell>Rapsodia</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 3 */ }
                                <CTableDataCell>Paula</CTableDataCell>
                                <CTableDataCell>González Muñoz</CTableDataCell>
                                <CTableDataCell>00000000C</CTableDataCell>
                                <CTableDataCell>22/03/1984</CTableDataCell>
                                <CTableDataCell>Black Spiral</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Alumno 4 */ }
                                <CTableDataCell>David</CTableDataCell>
                                <CTableDataCell>Rubio Lora</CTableDataCell>
                                <CTableDataCell>00000000D</CTableDataCell>
                                <CTableDataCell>15/01/1987</CTableDataCell>
                                <CTableDataCell>Black Spiral</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Alumno 5 */ }
                                <CTableDataCell>Victor</CTableDataCell>
                                <CTableDataCell>Rabadán Gallego</CTableDataCell>
                                <CTableDataCell>00000000E</CTableDataCell>
                                <CTableDataCell>10/10/1987</CTableDataCell>
                                <CTableDataCell>Black Spiral</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Alumno 6 */ }
                                <CTableDataCell>Natalia</CTableDataCell>
                                <CTableDataCell>López Martínez</CTableDataCell>
                                <CTableDataCell>00000000F</CTableDataCell>
                                <CTableDataCell>30/03/1987</CTableDataCell>
                                <CTableDataCell>Senkai</CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    )
}

export default Clanes