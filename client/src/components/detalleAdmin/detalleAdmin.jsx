import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detalleProducto } from "../../Redux/actions/actions";
import Productos from "../Productos/Productos";
import { NavLink } from 'react-router-dom'
import s from '../detalleAdmin/detalleAdmin.module.css'
let idp;
export default function DetalleAdmin() {
  const dispatch = useDispatch();
  console.log(idp)

  const detalleProdu = useSelector(state => state.Productos)


  console.log(detalleProdu)


  let { id } = useParams();
  idp = id;
  console.log(idp)
  const detalleProd = detalleProdu.find(e => e.id === 2)
  console.log(detalleProd.descripcion)

  return (
    <div>
      <div>
        <div className={s.btnVolver}>
          <NavLink to={'/upDate'}>
            <button>Volver atras</button>
          </NavLink>
        </div>
      </div>
      <div className={s.contenedorCard} key={detalleProd.id}>

        <img className={s.cardImg} src={detalleProd.imagen} alt="fotoProducto" />

        <div className={s.info}>
          <h2 className={s.cardNombre}>{detalleProd.nombre}</h2>

          <h3 className={s.cardCategoria}><b>Categoría:</b> {detalleProd.categoria}</h3>
          <h3 className={s.cardSeccion}><b>Sección:</b> {detalleProd.seccion}</h3>
          <p className={s.cardDescripcion}><b>Descripción:</b> {detalleProd.descripcion}</p>
        </div>
      </div>
    </div>
  )
}