import React, { useState, useEffect } from 'react'
import { 
    CForm, 
    CFormInput,
    CFormTextarea,
    CFormLabel,
    CRow,
    CCol,
    CFormCheck,
    CSpinner,
} from '@coreui/react'
import Joi from 'joi';
import { CButton } from '@coreui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { pushToast } from 'src/store/appSlice';
import { apiSlice } from 'src/store/apiSlice';
import ClanPicker from 'src/components/ClanPicker'; 
import {
    useInsertAlumnoMutation,
    useUpdateAlumnoMutation,
  } from 'src/store/amApiSlice';

const alumnoValidationSchema = Joi.object({
    id: Joi.string(),
    dni: Joi.string().required(),
    nombre: Joi.string().required(),
    apellidos: Joi.string().required(),
    fechaNac: Joi.date(),
    email: Joi.string(),
    tel1: Joi.string(),
    tel2: Joi.string(),
    direccion: Joi.string(),
    localidad: Joi.string(),
    provincia: Joi.string(),
    cp: Joi.string(),
    pais: Joi.string(),
    observaciones: Joi.string(),
    clanPrincipal: Joi.string(),
  });

const AddAlumno = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { dni } = useParams();

    const [getAlumno, { isFetching }] = apiSlice.useLazyGetAlumnoQuery();
    const [insertAlumno] = useInsertAlumnoMutation();
    const [updateAlumno] = useUpdateAlumnoMutation();

    useEffect(() => {
        if(dni === 'add'){
            const newAlumno = alumnoValidationSchema.validate({}, {abortEarly: false}).value;
            formik.setValues(newAlumno);
        } else {
            getAlumno({
                dni,
              }).then(response => {
                if(response.isSuccess) {
                  let data = structuredClone(response.data);
                  formik.setValues(data);
                }
              })
        }
    }, [dni]);


    const formik = useFormik({
        initialValues: alumnoValidationSchema.validate({}, {abortEarly: false}).value,
        validate: (values) => {
          const res = alumnoValidationSchema.validate(values, {
            allowUnknown: true,
            abortEarly: false,
          }).error;
          return res;
        },
        onSubmit: (values) => saveAlumno(values),
      });

      const saveAlumno = async (data) => {
        const { id } = data;
    
        let promise;
        if (id) {
          promise = updateAlumno({
            alumno: data,
            dni: data.dni,
          });
        } else {
          promise = insertAlumno({
            alumno: data,
          });
        }
    
        promise.unwrap().then((alumno) => {
        dispatch(pushToast({
            body: "Cambios realizados correctamente",
            color: "success",
            }));
          if(!id) {
            navigate(`/alumnos/${alumno.dni}`);
          }
        }).catch(err => {
            dispatch(pushToast({
                body: err?.data || "Ha ocurrido un error guardando los cambios",
                color: "danger",
              }));
        });
      };
    return (
        <>
            <Form 
                onSubmit={formik.handleSubmit} 
                noValidate 
                onKeyDown={(e) => {
                  if ((e.charCode || e.keyCode) === 13) {
                    e.preventDefault();
                  }
                }}>

                {/* ========== DATOS DEL ALUMNO ========== */}

                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="nombre">Nombre:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='nombre'
                            placeholder='Nombre completo'
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="apellidos">Apellidos:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='apellidos'
                            placeholder='Apellidos'
                            onChange={formik.handleChange}
                            value={formik.values.apellidos}
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="dni">DNI / Pasaporte:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="text"
                            id="dni"
                            placeholder="DNI / Pasaporte"
                            onChange={formik.handleChange}
                            value={formik.values.dni}
                        />
                    </CCol>
                    <CCol md="2">
                        <CFormLabel htmlFor="fechaNac">Fecha de Nacimiento:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="date"
                            id="fechaNac"
                            onChange={formik.handleChange}
                            value={formik.values.fechaNac}
                        />
                    </CCol>
                 </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="email">E-Mail:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type="email"
                            id="email"
                            placeholder="email@correo.com"
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="tel1">Teléfono Principal:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="tel"
                            id="tel1"
                        />
                    </CCol>
                    <CCol md="2">
                        <CFormLabel htmlFor="tel2">Teléfono Secundario:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="tel"
                            id="tel2"
                        />
                    </CCol>
                 </CRow>
                 <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="direccion">Dirección:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='direccion'
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="cp">Código Postal:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="text"
                            id="cp"
                        />
                    </CCol>
                    <CCol md="2">
                        <CFormLabel htmlFor="poblacion">Población:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="text"
                            id="poblacion"
                        />
                    </CCol>
                 </CRow>
                <CRow className="mb-3">
                    <CFormTextarea
                        id="patologia"
                        label="Patología médica a destacar:"
                        rows={3} />
                </CRow>

                <hr />

                {/* ========== DATOS DEL TUTOR LEGAL ========== */}

                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="nombreTutor">Datos del Tutor Legal:</CFormLabel>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="nombreTutor">Nombre:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='nombreTutor'
                            placeholder='Nombre completo'
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="apellidosTutor">Apellidos:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormInput
                            type='text'
                            id='apellidosTutor'
                            placeholder='Apellidos'
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="dni">DNI / Pasaporte:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="text"
                            id="dni"
                            placeholder="DNI / Pasaporte"
                        />
                    </CCol>
                    <CCol md="2">
                        <CFormLabel htmlFor="telTutor">Teléfono de Contacto:</CFormLabel>
                    </CCol>
                    <CCol md="4">
                        <CFormInput
                            type="tel"
                            id="telTutor"
                        />
                    </CCol>
                 </CRow>

                <hr />
                <hr />

                {/* ========== CLASES LUDOLANDIA ========== */}

                <CRow className="mb-3">
                    <CCol>
                        <ClanPicker formik={formik} fieldName='clanPrincipal'></ClanPicker>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol>
                        <CFormLabel>Clases Ludolandia:</CFormLabel>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="rapsodia"
                            label="Rapsodia - Lunes 20:00-22:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="heiko"
                            label="Heiko - Jueves 20:00-22:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="doble_nada"
                            label="Doble o Nada - Viernes 20:00-22:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="black_spiral"
                            label="Black Spiral - Sábado 12:00-14:00"
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="berserkers"
                            label="Berserkers - Martes 20:00-22:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="villaego"
                            label="T. Tecnificación - Jueves 20:00-22:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="gorgonas"
                            label="Gorgonas - Sábado 10:00-12:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="combate"
                            label="Taller Combate - Domingo 12:00-14:00"
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="legion"
                            label="Legión 404 - Miércoles 20:00-22:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="senkai"
                            label="Senkai - Viernes 18:00-20:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="cerbero"
                            label="Cerbero - Sábado 10:00-12:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="xforce"
                            label="X-Force - Domingos 14:00-16:00"
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="beskari"
                            label="Beskari - Miércoles 20:00-23:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="gancho"
                            label="El Gancho - Viernes 20:00-22:00"
                        />
                    </CCol>
                </CRow>

                <hr />

                {/* ========== CLASES DELICIAS ========== */}

                <CRow className="mb-3">
                    <CCol>
                        <CFormLabel>Clases Delicias:</CFormLabel>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="spec3"
                            label="Spec-3 - Jueves 20:00-22:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="midnight"
                            label="Midnight - Domingo 10:00-12:00"
                        />
                    </CCol>
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="combate_delicias"
                            label="Taller Combate - Domingo 12:00-14:00"
                        />
                    </CCol>
                </CRow>

                <hr />

                {/* ========== CLASES FUENLABRADA ========== */}

                <CRow className="mb-3">
                    <CCol>
                        <CFormLabel>Clases Fuenlabrada:</CFormLabel>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="michiclorianos"
                            label="Michiclorianos - Miércoles 19:00-21:00"
                        />
                    </CCol>
                </CRow>

                <hr />

                {/* ========== CLASES RIVAS ========== */}

                <CRow className="mb-3">
                    <CCol>
                        <CFormLabel>Clases Rivas-Vaciamadrid:</CFormLabel>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="black_flag"
                            label="Black Flag - Jueves 19:30-21:30"
                        />
                    </CCol>
                </CRow>

                <hr />

                {/* ========== CLASES TRES CANTOS ========== */}

                <CRow className="mb-3">
                    <CCol>
                        <CFormLabel>Clases Tres Cantos:</CFormLabel>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md="3">
                        <CFormCheck
                            type="checkbox"
                            id="amarok"
                            label="Amarok - Lunes 20:00-22:00"
                        />
                    </CCol>
                </CRow>

                <hr />

                {/* ========== TIPO DE PAGO ========== */}

                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel>Tipo de Pago:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <div>
                            <CFormCheck
                                type="radio"
                                id="una_cuota"
                                name="cuota"
                                value="una_cuota"
                                label="Una Cuota"
                            />
                            <CFormCheck
                                type="radio"
                                id="dos_cuota"
                                name="cuota"
                                value="una_cuota"
                                label="Dos Cuotas"
                            />
                            <CFormCheck
                                type="radio"
                                id="tres_cuotas"
                                name="cuota"
                                value="tres_cuotas"
                                label="Tres Cuotas"
                            />
                            <CFormCheck
                                type="radio"
                                id="mensual"
                                name="cuota"
                                value="mensual"
                                label="Mensual"
                            />
                        </div>
                    </CCol>
                </CRow>

                {/* ========== OBSERVACIONES ========== */}

                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="observaciones">Observaciones:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <CFormTextarea
                            id="observaciones"
                            rows={3}
                     />
                    </CCol>
                </CRow>
                <CButton color="primary" disabled={formik.isSubmitting} type="submit" >
                    {
                        formik.isSubmitting && <CSpinner size="sm" className='me-2' />
                    }
                    Guardar
                </CButton>
            </Form>

        </>
    )
}

export default AddAlumno
