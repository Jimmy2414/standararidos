import React from "react";
import s from '../NavBar/Navbar.module.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

  return (
    <div className={s.contenedorGeneral}>
      <div>
        <nav>
          <ul>
            <NavLink to={'/admin'}>
              <li>Admin</li>
            </NavLink>

            <NavLink to={'/upLoad'}>
              <li>Subir producto</li>
            </NavLink>

            <NavLink to={'/upDate'}>
              <li>Modificar producto</li>
            </NavLink>

            <NavLink to={'/delete'}>
              <li>Eliminar producto</li>
            </NavLink>
          </ul>
        </nav>


      </div>
    </div>
  )
}