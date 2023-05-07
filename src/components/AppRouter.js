import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'src/store/appSlice';

export default function AppRouter() {
  const token = useSelector(getToken);

  const RequireAuth = ({ children }) => {
    //TODO: Check roles and navigation.
    //You should not be able to navigate to pages your role is not allowed.
    const location = useLocation();
    return token ? children : <Navigate state={{ from: location }} to="/login" replace />;
  };

  // Containers
  const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'));

  // Pages
  const Login = React.lazy(() => import('../views/Login'));

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route path="/*" name="Home" element={
            <RequireAuth>
              <DefaultLayout />
            </RequireAuth>
          } />

          <Route path="/login" name="Login" element={<Login />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}