import React, { useState } from 'react';
import {
    CImage,
    CCol,
    CRow,
    CFormLabel,
    CCard,
    CCardBody,
    CCardHeader,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react';
import YearPicker from 'src/components/YearPicker';
import MonthPicker from 'src/components/MonthPicker';

const FichaAsistencia = () => {
    const [selectedYear, setSelectedYear] = useState('');

    // Función para manejar el cambio de año seleccionado
    const handleYearChange = (year) => {
        setSelectedYear(year);
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <CImage rounded thumbnail src={require('../../assets/images/ana.png').default} width={200} height={200} />
                <h1 style={{ marginLeft: '10px' }}>Ana Lancha Cañas</h1>
            </div>

            <hr />

            <CRow className="mb-3">
                <CCol md="2">
                    <CFormLabel htmlFor="mesAsistencia">Seleccionar Mes:</CFormLabel>
                </CCol>
                <CCol md="4">
                    <MonthPicker />
                </CCol>
                <CCol md="2">
                    <CFormLabel htmlFor="horaFinClan">Seleccionar Año:</CFormLabel>
                </CCol>
                <CCol md="4">
                    <YearPicker onChange={handleYearChange} />
                </CCol>
            </CRow>

            <h4>Resumen</h4>
            <br />

            <CCard>
                <CCardHeader align="middle">
                    <strong>ASISTENCIA - {selectedYear || 'Año no seleccionado'}</strong>
                </CCardHeader>

                <CCardBody>
                    <CTable hover>
                        { /* Header de la tabla*/ }
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col" className="w-auto">
                                    Clan
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col" className="w-auto">
                                    Fecha
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col" className="w-auto">
                                    Estado
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col" className="w-auto">
                                    Observaciones
                                </CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>

                        { /* Body de la tabla*/ }
                        <CTableBody>
                            <CTableRow>
                                { /* Datos Falsos - Falta 1 */ }
                                <CTableDataCell>Black Spiral</CTableDataCell>
                                <CTableDataCell>01/10/2022</CTableDataCell>
                                <CTableDataCell>PRESENTE</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Falta 2 */ }
                                <CTableDataCell>Rapsodia</CTableDataCell>
                                <CTableDataCell>03/10/2022</CTableDataCell>
                                <CTableDataCell>PRESENTE</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Falta 3 */ }
                                <CTableDataCell>Black Spiral</CTableDataCell>
                                <CTableDataCell>08/10/2022</CTableDataCell>
                                <CTableDataCell>RECUPERADA</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Falta 4 */ }
                                <CTableDataCell>Rapsodia</CTableDataCell>
                                <CTableDataCell>10/10/2022</CTableDataCell>
                                <CTableDataCell>PRESENTE</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Falta 5 */ }
                                <CTableDataCell>Black Spiral</CTableDataCell>
                                <CTableDataCell>15/10/2022</CTableDataCell>
                                <CTableDataCell>RECUPERADA</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Falta 6 */ }
                                <CTableDataCell>Rapsodia</CTableDataCell>
                                <CTableDataCell>17/10/2022</CTableDataCell>
                                <CTableDataCell>PRESENTE</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Falta 7 */ }
                                <CTableDataCell>Black Spiral</CTableDataCell>
                                <CTableDataCell>22/10/2022</CTableDataCell>
                                <CTableDataCell>FALTA</CTableDataCell>
                                <CTableDataCell></CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    );
};

export default FichaAsistencia;
