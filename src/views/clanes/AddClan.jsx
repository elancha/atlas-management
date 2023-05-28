import React from 'react'
import { 
    CForm, 
    CFormInput,
    CFormTextarea,
    CFormLabel,
    CRow,
    CCol,
} from '@coreui/react'
import { CButton } from '@coreui/react';

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

                {/* ========== DATOS DEL ALUMNO ========== */}

                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="nombre">Nombre:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='nombre'
                            placeholder='Nombre del Clan'
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="dia">Día de la semana:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <select className="form-select" aria-label="Seleccionar dia de la semana">
                            <option selected value="lunes">Lunes</option>
                            <option value="martes">Martes</option>
                            <option value="miercoles">Miércoles</option>
                            <option value="jueves">Jueves</option>
                            <option value="viernes">Viernes</option>
                            <option value="sabado">Sábado</option>
                            <option value="domingo">Domingo</option>
                        </select>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="dni">Hora Inicio:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <select className="form-select" aria-label="Seleccionar hora de inicio">
                            <option selected value="ini_1000">10:00</option>
                            <option value="ini_1030">10:30</option>
                            <option value="ini_1100">11:00</option>
                            <option value="ini_1130">11:30</option>
                            <option value="ini_1200">12:00</option>
                            <option value="ini_1230">12:30</option>
                            <option value="ini_1300">13:00</option>
                            <option value="ini_1330">13:30</option>
                            <option value="ini_1400">14:00</option>
                            <option value="ini_1430">14:30</option>
                            <option value="ini_1500">15:00</option>
                            <option value="ini_1530">15:30</option>
                            <option value="ini_1600">16:00</option>
                            <option value="ini_1630">16:30</option>
                            <option value="ini_1700">17:00</option>
                            <option value="ini_1730">17:30</option>
                            <option value="ini_1800">18:00</option>
                            <option value="ini_1830">18:30</option>
                            <option value="ini_1900">19:00</option>
                            <option value="ini_1930">19:30</option>
                            <option value="ini_2000">20:00</option>
                            <option value="ini_2030">20:30</option>
                            <option value="ini_2100">21:00</option>
                            <option value="ini_2130">21:30</option>
                            <option value="ini_2200">22:00</option>
                            <option value="ini_2230">22:30</option>
                            <option value="ini_2300">23:00</option>
                            <option value="ini_2330">23:30</option>
                            <option value="ini_0000">00:00</option>
                        </select>
                    </CCol>
                    <CCol md="2">
                        <CFormLabel htmlFor="fechaNac">Hora Fin:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                    <select className="form-select" aria-label="Seleccionar hora de fin">
                            <option selected value="fin_1000">10:00</option>
                            <option value="fin_1030">10:30</option>
                            <option value="fin_1100">11:00</option>
                            <option value="fin_1130">11:30</option>
                            <option value="fin_1200">12:00</option>
                            <option value="fin_1230">12:30</option>
                            <option value="fin_1300">13:00</option>
                            <option value="fin_1330">13:30</option>
                            <option value="fin_1400">14:00</option>
                            <option value="fin_1430">14:30</option>
                            <option value="fin_1500">15:00</option>
                            <option value="fin_1530">15:30</option>
                            <option value="fin_1600">16:00</option>
                            <option value="fin_1630">16:30</option>
                            <option value="fin_1700">17:00</option>
                            <option value="fin_1730">17:30</option>
                            <option value="fin_1800">18:00</option>
                            <option value="fin_1830">18:30</option>
                            <option value="fin_1900">19:00</option>
                            <option value="fin_1930">19:30</option>
                            <option value="fin_2000">20:00</option>
                            <option value="fin_2030">20:30</option>
                            <option value="fin_2100">21:00</option>
                            <option value="fin_2130">21:30</option>
                            <option value="fin_2200">22:00</option>
                            <option value="fin_2230">22:30</option>
                            <option value="fin_2300">23:00</option>
                            <option value="fin_2330">23:30</option>
                            <option value="fin_0000">00:00</option>
                        </select>
                    </CCol>
                </CRow>

                <CRow className="mb-3">
                    <CCol col="4">
                        <CFormLabel htmlFor="dni">Escuela:</CFormLabel>
                    </CCol>
                    <CCol col="4">
                        <select className="form-select" aria-label="Seleccionar la escuela">
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
                        <CFormLabel htmlFor="fechaNac">Estilo:</CFormLabel>
                    </CCol>
                    <CCol col="4">
                        <select className="form-select" aria-label="Seleccionar estilo">
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
                        <select className="form-select" aria-label="Seleccionar al instructor">
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
