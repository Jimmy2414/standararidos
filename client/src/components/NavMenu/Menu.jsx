import React from "react";
import { NavLink } from 'react-router-dom'
import s from '../NavMenu/Menu.module.css'

export default function NavMenu() {

  return (
    <div className={s.navMenu}>
      <nav>
        <ul>
          <NavLink to={'/'}>
            <li>Home</li>
          </NavLink>

          <NavLink to={'/revestimientos-texturados'}>
            <li>Revestimientos Texturados</li>
          </NavLink>

          <NavLink to={'/latex-color'}>
            <li>Látex color</li>
          </NavLink>

          <NavLink to={'/membranas'}>
            <li>Membranas</li>
          </NavLink>

          <NavLink to={'/preparacion-de-la-superficie'}>
            <li>Preparación de la superficie</li>
          </NavLink>

          <NavLink to={'/auxilires'}>
            <li>Auxiliares</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}