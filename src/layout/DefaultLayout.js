import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

import {
  CToaster,
  CToast,
  CToastBody,
  CToastClose,
} from '@coreui/react';

import {
  getToasts,
  clearToasts,
} from 'src/store/appSlice';

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const toasts = useSelector(getToasts);
  const [toast, setToast] = useState();


  useEffect(() => {
    if(toasts.length == 0) return;

    toasts.forEach(t => {
      setToast(
        <CToast
          autohide={true}
          delay={10000}
          visible={true}
          className="align-items-center"
          color={t.color}
        >
          <div className="d-flex">
            <CToastBody>{t.body}</CToastBody>
            <CToastClose className="me-2 m-auto" />
          </div>
        </CToast>
      )
    });
    dispatch(clearToasts());
  }, [toasts]);
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
      <CToaster push={toast} placement="top-end"></CToaster>
    </div>
  )
}

export default DefaultLayout
