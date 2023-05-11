import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilUser,
  cilGroup,
  cilLibraryBuilding,
  cilBell,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'
//import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react' -> Este es el import para los grupos de navegacion, titulos, etc.

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  //{ //Este componente es solo titulo de una parte.
  //  component: CNavTitle,
  //  name: 'Alumnos',
  //},
  {
    component: CNavItem,
    name: 'Alumnos',
    to: '/alumnos', //Esta es la ruta de destino.
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />, //Este es el icono de la izquierda.
  },
  {
    component: CNavItem,
    name: 'Clanes',
    to: '/clanes',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Escuelas',
    to: '/escuelas',
    icon: <CIcon icon={cilLibraryBuilding} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Asistencia',
    to: '/asistencia',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
]

export default _nav
