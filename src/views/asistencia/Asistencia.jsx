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

const Asistencia = () => {
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
                            <CTableRow onClick={() => navigate('/escuelas/ficha')}> {/* Esto es incorrecto pero es solo para que visualmente se vea lo que quiero hacer. */}
                                { /* Datos Falsos - Escuela 1 */ }
                                <CTableDataCell>Ludolandia</CTableDataCell>
                                <CTableDataCell>C/ Miguel Fleta, nº4</CTableDataCell>
                                <CTableDataCell>Laura Yepes</CTableDataCell>
                                <CTableDataCell>10</CTableDataCell>
                                <CTableDataCell>12</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Escuela 2 */ }
                                <CTableDataCell>Fuenlabrada</CTableDataCell>
                                <CTableDataCell>C/ Miguel Fleta, nº4</CTableDataCell>
                                <CTableDataCell>Laura Yepes</CTableDataCell>
                                <CTableDataCell>10</CTableDataCell>
                                <CTableDataCell>12</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Escuela 3 */ }
                                <CTableDataCell>Ludolandia</CTableDataCell>
                                <CTableDataCell>Colegio Altamira - C/ Gerona Nº4</CTableDataCell>
                                <CTableDataCell>Alejandro Alonso</CTableDataCell>
                                <CTableDataCell>12</CTableDataCell>
                                <CTableDataCell>2</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Escuela 4 */ }
                                <CTableDataCell>Delicias</CTableDataCell>
                                <CTableDataCell>Centro Deportivo Cultural Delicias - Pº de las Delicias Nº 61</CTableDataCell>
                                <CTableDataCell>Esther Lancha</CTableDataCell>
                                <CTableDataCell>15</CTableDataCell>
                                <CTableDataCell>2</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Escuela 5 */ }
                                <CTableDataCell>Rivas-Vaciamadrid</CTableDataCell>
                                <CTableDataCell>Escena Studio - C/ Cincel Nº 11</CTableDataCell>
                                <CTableDataCell>Bárbara Valverde</CTableDataCell>
                                <CTableDataCell>12</CTableDataCell>
                                <CTableDataCell>1</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                            { /* Datos Falsos - Escuela 6 */ }
                                <CTableDataCell>Tres Cantos</CTableDataCell>
                                <CTableDataCell>Polideportivo La Luz - Avda. La Luz S/N</CTableDataCell>
                                <CTableDataCell>Raúl Pérez</CTableDataCell>
                                <CTableDataCell>8</CTableDataCell>
                                <CTableDataCell>1</CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    )
}

export default Asistencia