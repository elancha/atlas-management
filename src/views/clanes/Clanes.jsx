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
                <CButton className="me-md-2" color="primary" type="button" onClick={() => navigate('/clanes/add')}>
                    Añadir Clan
                </CButton>
            </CContainer>
            <CCard>
                <CCardHeader align="middle">
                    <strong>Lista de Clanes</strong>
                </CCardHeader>
                <CCardBody>
                    <CTable hover>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Nombre
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Día
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Horario
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Escuela
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Estilo
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Instructor Principal
                                </CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow onClick={() => navigate('/clanes/ficha')}> {/* Esto es incorrecto pero es solo para que visualmente se vea lo que quiero hacer. */}
                                { /* Datos Falsos - Clan 1 */ }
                                <CTableDataCell>Rapsodia</CTableDataCell>
                                <CTableDataCell>Lunes</CTableDataCell>
                                <CTableDataCell>20:00 - 22:00</CTableDataCell>
                                <CTableDataCell>Ludolandia</CTableDataCell>
                                <CTableDataCell>Forma 4</CTableDataCell>
                                <CTableDataCell>Carlos Jiménez</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Clan 2 */ }
                                <CTableDataCell>Berserkers</CTableDataCell>
                                <CTableDataCell>Martes</CTableDataCell>
                                <CTableDataCell>20:00 - 22:00</CTableDataCell>
                                <CTableDataCell>Ludolandia</CTableDataCell>
                                <CTableDataCell>Forma 2</CTableDataCell>
                                <CTableDataCell>Darío Jusdado</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Clan 3 */ }
                                <CTableDataCell>Amarok</CTableDataCell>
                                <CTableDataCell>Lunes</CTableDataCell>
                                <CTableDataCell>20:00 - 22:00</CTableDataCell>
                                <CTableDataCell>Tres Cantos</CTableDataCell>
                                <CTableDataCell>Forma 1</CTableDataCell>
                                <CTableDataCell>Raúl Pérez</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Clan 4 */ }
                                <CTableDataCell>Beskari</CTableDataCell>
                                <CTableDataCell>Miércoles</CTableDataCell>
                                <CTableDataCell>20:00 - 23:00</CTableDataCell>
                                <CTableDataCell>Ludolandia</CTableDataCell>
                                <CTableDataCell>Curso Ypsilon</CTableDataCell>
                                <CTableDataCell>José Campos</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Clan 5 */ }
                                <CTableDataCell>Michiclorianos</CTableDataCell>
                                <CTableDataCell>Miércoles</CTableDataCell>
                                <CTableDataCell>19:00 - 21:00</CTableDataCell>
                                <CTableDataCell>Fuenlabrada</CTableDataCell>
                                <CTableDataCell>Forma 1</CTableDataCell>
                                <CTableDataCell>Álvaro Ramos</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Clan 6 */ }
                                <CTableDataCell>Midnight</CTableDataCell>
                                <CTableDataCell>Domingo</CTableDataCell>
                                <CTableDataCell>10:00 - 12:00</CTableDataCell>
                                <CTableDataCell>Delicias</CTableDataCell>
                                <CTableDataCell>Forma 1</CTableDataCell>
                                <CTableDataCell>Raúl Miguélez</CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    )
}

export default Clanes