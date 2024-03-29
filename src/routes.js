import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Alumnos = React.lazy(() => import('./views/alumnos/Alumnos'))
const detalleAlumno = React.lazy(() => import('./views/alumnos/detalleAlumno'))
const Clanes = React.lazy(() => import('./views/clanes/Clanes'))
const AddClan = React.lazy(() => import('./views/clanes/AddClan'))
const FichaClan = React.lazy(() => import('./views/clanes/FichaClan'))
const Escuelas = React.lazy(() => import('./views/escuelas/Escuelas'))
const AddEscuela = React.lazy(() => import('./views/escuelas/AddEscuela'))
const FichaEscuela = React.lazy(() => import('./views/escuelas/FichaEscuela'))
const Asistencia = React.lazy(() => import('./views/asistencia/Asistencia'))
const FichaAsistencia = React.lazy(() => import('./views/asistencia/FichaAsistencia'))
const PasarLista = React.lazy(() => import('./views/asistencia/PasarLista'))
const Recuperaciones = React.lazy(() => import('./views/asistencia/Recuperaciones'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/alumnos', name: 'Alumnos', element: Alumnos },
  { path: '/alumnos/:dni', name: 'Editar alumno', element: detalleAlumno },
  { path: '/clanes', name: 'Clanes', element: Clanes },
  { path: '/clanes/add', name: 'AddClan', element: AddClan },
  { path: '/clanes/ficha', name: 'FichaClan', element: FichaClan },
  { path: '/escuelas', name: 'Escuelas', element: Escuelas },
  { path: '/escuelas/add', name: 'AddEscuela', element: AddEscuela },
  { path: '/escuelas/ficha', name: 'FichaEscuela', element: FichaEscuela },
  { path: '/asistencia', name: 'Asistencia', element: Asistencia },
  { path: '/asistencia/ficha', name: 'FichaAsistencia', element: FichaAsistencia },
  { path: '/asistencia/lista', name: 'PasarLista', element: PasarLista },
  { path: '/asistencia/recuperaciones', name: 'Recuperaciones', element: Recuperaciones },
]

export default routes
