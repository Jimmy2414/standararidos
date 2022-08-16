import React from "react";
import s from '../Footer/Footer.module.css';

export default function Footer() {

  return (
    <div className={s.contenedorFooter}>
      <div className={s.footerItems}>
        <div className={s.contacto}>
          <h2>Contacto</h2>
          <ul>
            <li>Tel: (011) 7034-7165</li>
            <li>Email: Standararidos@hotmail.com</li>
          </ul>
        </div>

        <div className={s.inicio}>
          <h2>Inicio</h2>
          <ul>
            <li>Revestimientos Texturados</li>
            <li>Látex color</li>
            <li>Membranas</li>
            <li>Preparación de la superficie</li>
            <li>Auxiliares</li>
          </ul>
        </div>

        <div className={s.redes}>
          <h2>Seguinos en</h2>
          <ul>
            <li>Facebook:</li>
            <li>Instagram:</li>
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