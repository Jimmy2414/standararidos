import React from "react";
import { NavLink } from 'react-router-dom'
import s from '../Footer/Footer.module.css';
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {

  return (
    <div className={s.contenedorFooter}>
      <div className={s.footerItems}>
        <div className={s.contacto}>
          <h2>Contacto</h2>
          <ul>
            <li>Tel: <a href="https://api.whatsapp.com/send?phone=+541170347165&text=%C2%A1Hola,%20tengo%20una%20consulta!" target="_blank">(011) 7034-7165</a></li>
            <li>Email: Standararidos@hotmail.com</li>
          </ul>
        </div>

        <div className={s.inicio}>
          <h2>Inicio</h2>
          <ul>
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
        </div>

        <div className={s.redes}>
          <h2>Seguinos en</h2>
          <ul>

            <li><a href="https://es-es.facebook.com/standararidos1/" target="_blank"><FaFacebook /></a></li>



            <li><a href="https://www.instagram.com/standararidos/?hl=es" target="_blank"><FaInstagram /></a></li>

          </ul>
        </div>
      </div>

      <div className={s.infoFinal}>
        {/* <p>Pilcomayo 3764 - Villa Tesei (Hurlingham) - Provincia de Buenos Aires</p>
        <p>Copyright · 2022 · Standar Aridos</p> */}
        <p>Creado por: Lucas Cencig & Juan Muñoz</p>
      </div>
    </div>
  )
}