import React from "react";


import s from '../Productos/Productos.module.css'

export default function Productos({ id, imagen, nombre, seccion, categoria, descripcion }) {



  return (
    <div className={s.contenedorProducto}>
      <div className={s.card} key={id}>
        <img className={s.cardImg} src={imagen} alt="fotoProducto" />
        <h2 className={s.cardNombre}>{nombre}</h2>
        <h3 className={s.cardCategoria}>{categoria}</h3>
        <h3>{seccion}</h3>
        <p className={s.descripcion}>{descripcion}</p>
      </div>
    </div>
  )
}