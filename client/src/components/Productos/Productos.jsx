import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

import s from '../Productos/Productos.module.css'

export default function Productos({ id, imagen, nombre, seccion, categoria, descripcion }) {




  return (
    <div className={s.contenedorProducto}>
      <NavLink to={'/search/' + id}>

        <div className={s.card} key={id}>

          <img className={s.cardImg} src={imagen || 'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1'} alt="fotoProducto" />

          <h2 className={s.cardNombre}>{nombre}</h2>
          {/* 
          <h3 className={s.cardCategoria}><u>Categoría</u>: {categoria}</h3>
          <h3 className={s.cardSeccion}><u>Sección</u>: {seccion}</h3>
          <p className={s.cardDescripcion}><u>Descripción</u>: {descripcion.split(' ').slice(0, 20).join(' ') + ' ...'}</p> */}


        </div>

      </NavLink>


    </div>

  )
}