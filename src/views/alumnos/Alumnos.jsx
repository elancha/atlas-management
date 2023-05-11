import { CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'

const Alumnos = () => {
    return (
        <>
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
                            
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    )
}

export default Alumnos