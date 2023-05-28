import React from 'react'
import { 
    CCard, 
    CCardBody, 
    CCardHeader, 
    CTable, 
    CTableBody, 
    CTableDataCell, 
    CTableHead, 
    CTableHeaderCell, 
    CTableRow,
 } from '@coreui/react'
import { useNavigate } from 'react-router-dom';

const Asistencia = () => {
    const navigate = useNavigate();
    return (
        <>
            <CCard>
                <CCardHeader align="middle">
                    <strong>Faltas de Asistencia</strong>
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
                                    Faltas Totales
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    % Faltas
                                </CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow onClick={() => navigate('/asistencia/ficha')}> {/* Esto es incorrecto pero es solo para que visualmente se vea lo que quiero hacer. */}
                                { /* Datos Falsos - Alumno 1 */ }
                                <CTableDataCell>Abel Cid Outlaw</CTableDataCell>
                                <CTableDataCell>Beskari</CTableDataCell>
                                <CTableDataCell>0</CTableDataCell>
                                <CTableDataCell>0</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 2 */ }
                                <CTableDataCell>Ana Lancha Cañas</CTableDataCell>
                                <CTableDataCell>Rapsodia</CTableDataCell>
                                <CTableDataCell>17</CTableDataCell>
                                <CTableDataCell>39%</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 3 */ }
                                <CTableDataCell>Antonio Guillo Saez</CTableDataCell>
                                <CTableDataCell>Black Spiral</CTableDataCell>
                                <CTableDataCell>4</CTableDataCell>
                                <CTableDataCell>15%</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Alumno 4 */ }
                                <CTableDataCell>Carlos Fernández Escobar</CTableDataCell>
                                <CTableDataCell>Rapsodia</CTableDataCell>
                                <CTableDataCell>26</CTableDataCell>
                                <CTableDataCell>37%</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Alumno 5 */ }
                                <CTableDataCell>Ariadna Zamora Solana</CTableDataCell>
                                <CTableDataCell>Legión 404</CTableDataCell>
                                <CTableDataCell>47</CTableDataCell>
                                <CTableDataCell>85%</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Alumno 6 */ }
                                <CTableDataCell>Asier Gómez Caballero</CTableDataCell>
                                <CTableDataCell>Michiclorianos</CTableDataCell>
                                <CTableDataCell>3</CTableDataCell>
                                <CTableDataCell>11%</CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    )
}

export default Asistencia
