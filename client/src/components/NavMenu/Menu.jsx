import React from "react";
import { NavLink } from 'react-router-dom'
import s from '../NavMenu/Menu.module.css'
import { FaBars, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";


export default function NavMenu() {

  const [icon, setIcon] = useState(true)
  function changeToCross(e) {
    if (e.target) {
      setIcon(!icon)
    }
  }

  return (
    <div className={s.menu_container}>

      <label htmlFor="menu" className={s.button_menu} onClick={changeToCross}>
        {
          icon === true
            ?
            <div id="icon__menu" className={s.iconoMenu} href="#"><FaBars /></div>
            :
            <div id="icon__menu" className={s.iconoMenu} href="#"><FaChevronLeft /> </div>

        }
      </label>
      <input type="checkbox" id="menu" className={s.button_menu_input} />

      <div className={s.navMenu}>
        <nav>
          <ul>
            <NavLink to={'/'}>
              <li>Home</li>
            </NavLink>


            <li className={s.menuDesplegableRevest}>
              Revestimiento Texturado ▼
              <ul>
                <NavLink to={'/revestimiento-llana'}>
                  <li>A Llana</li>
                </NavLink>

                <NavLink to={'/revestimiento-rodillo'}>
                  <li>A Rodillo</li>
                </NavLink>
              </ul>
            </li>

            <li className={s.menuDesplegable}>
              Pinturas ▼
              <ul>
                <NavLink to={'/latex-interior'}>
                  <li>Látex Interior</li>
                </NavLink>

                <NavLink to={'/latex-interior-lavable'}>
                  <li>Látex Interior Lavable</li>
                </NavLink>

                <NavLink to={'/latex-interior-satinado'}>
                  <li>Látex Interior Satinado</li>
                </NavLink>

                <NavLink to={'/latex-interior-cielorraso'}>
                  <li>Látex Interior Cielorraso</li>
                </NavLink>

                <NavLink to={'/latex-interior-color'}>
                  <li>Látex Interior Color</li>
                </NavLink>

                <NavLink to={'/latex-exterior'}>
                  <li>Látex Exterior</li>
                </NavLink>

                <NavLink to={'/latex-exterior-impermeabilizante'}>
                  <li>Látex Exterior Impermeabilizante</li>
                </NavLink>
              </ul>
            </li>

            <li className={s.menuDesplegableDos}>Techos y Superficies ▼
              <ul>
                <NavLink to={'/fijadores'}>
                  <li>Fijador</li>
                </NavLink>

                <NavLink to={'/enduidos'}>
                  <li>Enduido</li>
                </NavLink>

                <NavLink to={'/membranas'}>
                  <li>Membranas</li>
                </NavLink>

                <NavLink to={'/accesorios'}>
                  <li>Accesorios</li>
                </NavLink>
              </ul>
            </li>

            <NavLink to={'/contacto'}>
              <li className={s.contacto}>Contacto</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  )
}