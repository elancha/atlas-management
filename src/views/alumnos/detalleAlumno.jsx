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
import PaymentPicker from 'src/components/PaymentPicker';
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
                    <CCol md="2">
                        <CFormLabel htmlFor="clanPpal">Clan Principal:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <ClanPicker formik={formik} fieldName='clanPrincipal'></ClanPicker>
                    </CCol>
                </CRow>

                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="d1">Doblaje 1:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <ClanPicker formik={formik} fieldName='doblaje1'></ClanPicker>
                    </CCol>
                </CRow>

                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="d2">Doblaje 2:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <ClanPicker formik={formik} fieldName='doblaje2'></ClanPicker>
                    </CCol>
                </CRow>

                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="d3">Doblaje 3:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <ClanPicker formik={formik} fieldName='doblaje3'></ClanPicker>
                    </CCol>
                </CRow>

                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="d4">Doblaje 4:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <ClanPicker formik={formik} fieldName='doblaje4'></ClanPicker>
                    </CCol>
                </CRow>

                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="d5">Doblaje 5:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <ClanPicker formik={formik} fieldName='doblaje5'></ClanPicker>
                    </CCol>
                </CRow>

                <hr />

                {/* ========== TIPO DE PAGO ========== */}

                <CRow className="mb-3">
                    <CCol md="2">
                        <CFormLabel htmlFor="pago">Tipo de Pago:</CFormLabel>
                    </CCol>
                    <CCol md="10">
                        <PaymentPicker formik={formik} fieldName='tipoPago'></PaymentPicker>
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
                <CButton color="primary" disabled={formik.isSubmitting} type="submit" className='float-end mb-3'>
                    {
                        formik.isSubmitting && <CSpinner size="sm" className='me-2' />
                    }
                    Guardar
                </CButton>
                <CButton color="danger" disabled={formik.isSubmitting} type="submit" className='float-end mb-3' style={{ marginRight: '10px' }}>
                    {
                        formik.isSubmitting && <CSpinner size="sm" className='me-2' />
                    }
                    Eliminar
                </CButton>
            </Form>

        </>
    )
}

export default AddAlumno
