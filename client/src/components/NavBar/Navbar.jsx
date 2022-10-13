import React from "react";
import s from '../NavBar/Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useNavigate, Navigate } from 'react-router-dom';

export default function NavBar() {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear('token')
    setTimeout(() => {
      navigate('/login')
    }, 500)
  }

  const home = (e) => {
    navigate('/')
  }


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

            <li onClick={home}>
              Ir a Home de clientes
            </li>

            <li onClick={logout} className={s.logout}>
              Cerrar Sesión
            </li>
          </ul>
        </nav>



      </div>


    </div>
  )
}