import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Alumnos = React.lazy(() => import('./views/alumnos/Alumnos'))
const AddAlumno = React.lazy(() => import('./views/alumnos/AddAlumno'))
const FichaAlumno = React.lazy(() => import('./views/alumnos/FichaAlumno'))
const Clanes = React.lazy(() => import('./views/clanes/Clanes'))
const AddClan = React.lazy(() => import('./views/clanes/AddClan'))
const FichaClan = React.lazy(() => import('./views/clanes/FichaClan'))
const Escuelas = React.lazy(() => import('./views/escuelas/Escuelas'))
const Asistencia = React.lazy(() => import('./views/asistencia/Asistencia'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/alumnos', name: 'Alumnos', element: Alumnos },
  { path: '/alumnos/add', name: 'AddAlumno', element: AddAlumno },
  { path: '/alumnos/ficha', name: 'FichaAlumno', element: FichaAlumno },
  { path: '/clanes', name: 'Clanes', element: Clanes },
  { path: '/clanes/add', name: 'AddClan', element: AddClan },
  { path: '/clanes/ficha', name: 'FichaClan', element: FichaClan },
  { path: '/escuelas', name: 'Escuelas', element: Escuelas },
  { path: '/asistencia', name: 'Asistencia', element: Asistencia },
]

export default routes
