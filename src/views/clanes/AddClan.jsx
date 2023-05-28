import React from 'react'
import { 
    CForm, 
    CFormInput,
    CFormLabel,
    CRow,
    CCol,
    CButton
} from '@coreui/react'
import HourPicker from 'src/components/HourPicker';
import WeekdayPicker from 'src/components/WeekdayPicker';

const handleConfirm = () => {
    if (window.confirm('¿Estás seguro de que deseas guardar los cambios?')) {

      // Agregar lógica para guardar alumnos en BD
      window.location.href = '/clanes'; // Redirecciona a la lista de alumnos
    }
  };

const AddClan = () => {
    return (
        <>
            <CForm>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="nombreClan">Nombre:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='nombre_clan'
                            placeholder='Nombre del Clan'
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="diaClan">Día de la semana:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <WeekdayPicker />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="horaInicioClan">Hora Inicio:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <HourPicker className='hora_inicio' />
                    </CCol>
                    <CCol md="2">
                        <CFormLabel htmlFor="horaFinClan">Hora Fin:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <HourPicker className='hora_fin' />
                    </CCol>
                </CRow>

                <CRow className="mb-3">
                    <CCol col="4">
                        <CFormLabel htmlFor="escuela">Escuela:</CFormLabel>
                    </CCol>
                    <CCol col="4">
                        <select className="escuela" aria-label="Seleccionar la escuela">
                            <option selected value="ludolandia">Ludolandia</option>
                            <option value="delicias">Delicias</option>
                            <option value="fuenlabrada">Fuenlabrada</option>
                            <option value="rivas">Rivas-Vaciamadrid</option>
                            <option value="tres_cantos">Tres Cantos</option>
                            <option value="guadalajara">Guadalajara</option>
                            <option value="mostoles">Móstoles</option>
                            <option value="collado">Collado-Villalba</option>
                        </select>
                    </CCol>
                    <CCol col="4">
                        <CFormLabel htmlFor="estilo">Estilo:</CFormLabel>
                    </CCol>
                    <CCol col="4">
                        <select className="estilo" aria-label="Seleccionar estilo">
                            <option selected value="f1">Forma 1</option>
                            <option value="f2">Forma 2</option>
                            <option value="ypsilon">Curso Ypsilon</option>
                            <option value="sl-f3">Sable Largo - Forma 3</option>
                            <option value="sl-f4">Sable Largo - Forma 4</option>
                            <option value="sl-f5">Sable Largo - Forma 5</option>
                            <option value="da-f3">Dagas - Forma 3</option>
                            <option value="da-f4">Dagas - Forma 4</option>
                            <option value="da-f5">Dagas - Forma 5</option>
                            <option value="st-f3">Saberstaff - Forma 3</option>
                            <option value="st-f4">Saberstaff - Forma 4</option>
                            <option value="st-f5">Saberstaff - Forma 5</option>                            
                        </select>
                    </CCol>
                    <CCol col="4">
                        <CFormLabel htmlFor="instructor">Instructor:</CFormLabel>
                    </CCol>
                    <CCol col="4">
                        <select className="instructor" aria-label="Seleccionar al instructor">
                            <option selected value="alastor">Alejandro Alonso</option>
                            <option value="culito">Álvaro Ramos</option>
                            <option value="belen">Belén Peñalver</option>
                            <option value="carlos">Carlos Jiménez</option>
                            <option value="dario">Darío Jusdado</option>
                            <option value="esther">Esther Lancha</option>
                            <option value="cameron">Fernando Ortego</option>
                            <option value="campos">José Campos</option>
                            <option value="maru">Maria Eugenia Álvarez</option>
                            <option value="miguelez">Raúl Miguélez</option>
                            <option value="snipis">Raúl Pérez</option>
                            <option value="santi">Santiago Martínez</option>
                            <option value="xurra">Víctor Díaz</option>
                            <option value="yhoel">Yhoel Powosino</option>
                        </select>
                    </CCol>
                </CRow>
            </CForm>
            <CButton color="primary" onClick={handleConfirm}>
                Guardar y volver a la lista de clanes
            </CButton>
        </>
    )
}

export default AddClan
