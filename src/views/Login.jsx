import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CRow,
  CSpinner,
} from '@coreui/react';

import Button from 'react-bootstrap/esm/Button';
import Feedback from 'react-bootstrap/esm/Feedback';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormControl from 'react-bootstrap/esm/FormControl';

import Form from 'react-bootstrap/esm/Form';
import { Person, Lock } from 'react-bootstrap-icons';

import { useFormik } from 'formik';
import { object, string } from 'yup';
import { getToken, setToken } from 'src/store/appSlice';
import {
  getUser,
} from 'src/store/appSlice';

import {
  useLoginUserMutation,
} from 'src/store/amApiSlice';

export default function Login() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(getUser);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [urlParams] = useSearchParams();
  const [authCode, setAuthCode] = useState("");
  const [login] = useLoginUserMutation();

  const validationSchema = object().shape({
    email: string().default(urlParams.get("email") || "").required().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
    password: string().default('').required(),
  });

  useEffect(() => {
  }, []);

  useEffect(() => {
    if (token) {
        // Try to go back to the place the user was before we redirected
        // him/her to the /login
        navigate(location.state?.from?.pathname || '/');
      }
  }, [token]);

  const formik = useFormik({
    initialValues: validationSchema.getDefault(),
    validationSchema,
    onSubmit: async (values) => {

      login({
        user: {
          email: values.email,
          pass: values.password,
        }
      }).unwrap().then((data) => {
          dispatch(setToken(data));
      }).catch((error) => {
        setMessage(error?.data);
      });


      formik.setSubmitting(false);
    },
  });

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <Form noValidate onSubmit={formik.handleSubmit}>
                    <div className='row'>
                      <div className='col-6'>
                        <div className='row'>
                          <div className='col-12'>
                            <h1>Login</h1>
                            <p className="text-medium-emphasis">Ingresa con tu cuenta</p>
                          </div>

                          <div className='col-12 mb-3'>
                            <div className="input-group">
                              <FormGroup>
                                <FormLabel className="col-form-label">Email</FormLabel>
                                <InputGroup className={formik.touched.email && formik.errors.email && 'is-invalid'}>
                                  <InputGroup.Text><Person size={20} /></InputGroup.Text>
                                  <FormControl
                                    id="email"
                                    placeholder="Correo electrónico"
                                    type="text"
                                    autoComplete="username"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    isInvalid={formik.touched.email && formik.errors.email}
                                  />
                                </InputGroup>
                                {
                                  formik.errors.email ? (
                                    <Feedback type="invalid">{formik.errors.email}</Feedback>
                                  ) : ""
                                }
                              </FormGroup>
                            </div>
                          </div>

                          <div className='col-12 mb-3'>
                            <div className="input-group">
                              <FormGroup>
                                <FormLabel className="col-form-label">Contraseña</FormLabel>
                                <InputGroup className={formik.touched.password && formik.errors.password && 'is-invalid'}>
                                  <InputGroup.Text><Lock size={20} /></InputGroup.Text>
                                  <FormControl
                                    id="password"
                                    placeholder="Contraseña"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    isInvalid={formik.touched.password && formik.errors.password}
                                  />
                                </InputGroup>
                                {
                                  formik.errors.password ? (
                                    <Feedback type="invalid">{formik.errors.password}</Feedback>
                                  ) : ""
                                }
                              </FormGroup>
                            </div>
                          </div>

                          <div className='col-12 mt-4'>
                            <div className='row'>
                              <div className='col-2 me-3'>
                                <Button disabled={formik.isSubmitting} variant="primary" className="px-4" type="submit">
                                  {
                                    formik.isSubmitting && <CSpinner size="sm" className='me-2' />
                                  }
                                  Login
                                </Button>
                              </div>

                              <div className='col-auto d-flex flex-column justify-content-center'>
                                <span className="text-danger">{message}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-6 d-flex'>
                        <div className='row ms-3 ps-3 h-100 align-items-center border-start color-secondary'>
                          <div className='col-12'>
                            <span className='d-block mb-3'>¿Tienes problemas para entrar?</span>
                            <a onClick={() => navigate(`/recover${formik.values.email ? `?email=${formik.values.email}` : ""}`)} className="pointer text-medium-emphasis">Resetea tu contraseña</a>
                          </div>
                        </div>
                      </div>

                    </div>                 
                  </Form>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}