import React, { useEffect, useState } from 'react'
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


import { apiSlice } from 'src/store/apiSlice';

const Alumnos = () => {
    const navigate = useNavigate();
    const [getAlumnos, { isFetching }] = apiSlice.useLazyGetAlumnosQuery();
    const [alumnos, setAlumnos] = useState([]);

    const fetchData = () => {
        getAlumnos({}).then((response) => {
    
          let alumnos = response.data || [];
    
          if(!alumnos) return;
    
          setAlumnos(alumnos);
        });
      }
    
      useEffect(() => {
        fetchData();
      }, []);


    return (
        <>
            <CContainer className="d-grid gap-2 d-md-flex justify-content-md-end p-2">
                <CButton className="me-md-2" color="primary" type="button" onClick={() => navigate('/alumnos/add')}>
                    Añadir Alumno
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
                            {
                              alumnos.length > 0 && 
                                alumnos.map((alumno) => (
                                    <CTableRow key={alumno.dni} onClick={() => navigate(`/alumnos/${alumno.dni}`)}> {/* Esto es incorrecto pero es solo para que visualmente se vea lo que quiero hacer. */}
                                        <CTableDataCell>{alumno.nombre}</CTableDataCell>
                                        <CTableDataCell>{alumno.apellidos}</CTableDataCell>
                                        <CTableDataCell>{alumno.dni}</CTableDataCell>
                                        <CTableDataCell>{alumno.fechaNac}</CTableDataCell>
                                        <CTableDataCell>{alumno.clanPrincipal}</CTableDataCell>
                                    </CTableRow>
                                ))
                            }
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    )
}

export default Alumnos