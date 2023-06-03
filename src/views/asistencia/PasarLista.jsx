import React, { useState } from 'react';
import { 
    CButton, 
    CModal, 
    CModalBody, 
    CModalFooter, 
    CModalHeader ,
    CModalTitle,
    CCard,
    CCardHeader,
    CCardBody,
    CTableRow,
    CTableDataCell,
    CTable,
    CTableHead,
    CTableHeaderCell,
    CTableBody,
    CContainer
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import AsistenciaPicker from 'src/components/AsistenciaPicker';

const PasarLista = () => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate();
    const handleConfirm = () => {
        setVisible(false);
        navigate('/asistencia/recuperaciones');
    };
    const handleCancel = () => {
        setVisible(false);
        navigate('/asistencia');
    };

    return (
        <>
            <CContainer className="d-grid gap-2 d-md-flex justify-content-md-end p-2">
                <CButton onClick={() => setVisible(!visible)}>Guardar Asistencia</CButton>
            </CContainer>
            
            <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>Guardar Asistencia</CModalTitle>
                </CModalHeader>
                <CModalBody>¿Hay personas recuperando en tu clase?</CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={handleConfirm}>
                         Sí
                    </CButton>
                    <CButton color="danger" onClick={handleCancel}>No</CButton>
                </CModalFooter>
            </CModal>
            <CCard>
                <CCardHeader align="middle">
                    <strong>Clan Beskari</strong>
                </CCardHeader>
                <CCardBody>
                    <CTable hover>
                        <CTableHead>
                            <CTableRow>
                            <CTableHeaderCell scope='col' className='w-auto'>
                                    Asistencia
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Nombre
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Horario
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Clan
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Escuela
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Estilo
                                </CTableHeaderCell> 
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Clases Totales
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Pendientes de Recuperar
                                </CTableHeaderCell>
                                <CTableHeaderCell scope='col' className='w-auto'>
                                    Faltas Totales
                                </CTableHeaderCell>                               
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow> {/* Esto es incorrecto pero es solo para que visualmente se vea lo que quiero hacer. */}
                                { /* Datos Falsos - Alumno 1 */ }
                                <CTableDataCell><AsistenciaPicker className='asistencia'/></CTableDataCell>
                                <CTableDataCell>Abel Cid Outlaw</CTableDataCell>
                                <CTableDataCell>Miércoles - 20:00-23:00</CTableDataCell>
                                <CTableDataCell>Beskari</CTableDataCell>
                                <CTableDataCell>Ludolandia</CTableDataCell>
                                <CTableDataCell>Ypsilon</CTableDataCell>
                                <CTableDataCell className="text-center">40</CTableDataCell>
                                <CTableDataCell className="text-center">0</CTableDataCell>
                                <CTableDataCell className="text-center">3</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 2 */ }
                                <CTableDataCell><AsistenciaPicker className='asistencia'/></CTableDataCell>
                                <CTableDataCell>Alberto Urueña García</CTableDataCell>
                                <CTableDataCell>Miércoles - 20:00-23:00</CTableDataCell>
                                <CTableDataCell>Beskari</CTableDataCell>
                                <CTableDataCell>Ludolandia</CTableDataCell>
                                <CTableDataCell>Ypsilon</CTableDataCell>
                                <CTableDataCell className="text-center">35</CTableDataCell>
                                <CTableDataCell className="text-center">9</CTableDataCell>
                                <CTableDataCell className="text-center">10</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 3 */ }
                                <CTableDataCell><AsistenciaPicker className='asistencia'/></CTableDataCell>
                                <CTableDataCell>Bárbara Valverde Matanza</CTableDataCell>
                                <CTableDataCell>Miércoles - 20:00-23:00</CTableDataCell>
                                <CTableDataCell>Staff</CTableDataCell>
                                <CTableDataCell>Ludolandia</CTableDataCell>
                                <CTableDataCell>Ypsilon</CTableDataCell>
                                <CTableDataCell className="text-center">35</CTableDataCell>
                                <CTableDataCell className="text-center">0</CTableDataCell>
                                <CTableDataCell className="text-center">8</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 4 */ }
                                <CTableDataCell><AsistenciaPicker className='asistencia'/></CTableDataCell>
                                <CTableDataCell>Carlos Alberto Montoya Fermosel</CTableDataCell>
                                <CTableDataCell>Miércoles - 20:00-23:00</CTableDataCell>
                                <CTableDataCell>Beskari</CTableDataCell>
                                <CTableDataCell>Ludolandia</CTableDataCell>
                                <CTableDataCell>Ypsilon</CTableDataCell>
                                <CTableDataCell className="text-center">40</CTableDataCell>
                                <CTableDataCell className="text-center">4</CTableDataCell>
                                <CTableDataCell className="text-center">2</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 5 */ }
                                <CTableDataCell><AsistenciaPicker className='asistencia'/></CTableDataCell>
                                <CTableDataCell>Celia Alonso Callejón</CTableDataCell>
                                <CTableDataCell>Miércoles - 20:00-23:00</CTableDataCell>
                                <CTableDataCell>Staff</CTableDataCell>
                                <CTableDataCell>Ludolandia</CTableDataCell>
                                <CTableDataCell>Ypsilon</CTableDataCell>
                                <CTableDataCell className="text-center">70</CTableDataCell>
                                <CTableDataCell className="text-center">0</CTableDataCell>
                                <CTableDataCell className="text-center">0</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                { /* Datos Falsos - Alumno 6 */ }
                                <CTableDataCell><AsistenciaPicker className='asistencia'/></CTableDataCell>
                                <CTableDataCell>Diana Martínez Valle</CTableDataCell>
                                <CTableDataCell>Miércoles - 20:00-23:00</CTableDataCell>
                                <CTableDataCell>Doblaje</CTableDataCell>
                                <CTableDataCell>Ludolandia</CTableDataCell>
                                <CTableDataCell>Ypsilon</CTableDataCell>
                                <CTableDataCell className="text-center">15</CTableDataCell>
                                <CTableDataCell className="text-center">0</CTableDataCell>
                                <CTableDataCell className="text-center">0</CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    );
};

export default PasarLista;
