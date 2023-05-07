import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Panel de Control',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  //{ //Este componente es solo titulo de una parte.
  //  component: CNavTitle,
  //  name: 'Alumnos',
  //},
  {
    component: CNavItem,
    name: 'ALUMNOS',
    to: '/theme/colors', //Esta es la ruta de destino.
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />, //Este es el icono de la izquierda.
  },
  {
    component: CNavItem,
    name: 'CLANES',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ESCUELAS',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ASISTENCIA',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
]

export default _nav
