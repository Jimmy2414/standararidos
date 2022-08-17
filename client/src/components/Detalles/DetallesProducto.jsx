import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detalleProducto } from "../../Redux/actions/actions";
import { NavLink } from 'react-router-dom'
import logo from '../../img/standarLogo.jpg';
import NavMenu from "../NavMenu/Menu";
import Footer from "../Footer/Footer";
import s from '../Detalles/DetallesProducto.module.css'

export default function DetalleProducto(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const id = props.match.params.id

  useEffect(() => {
    dispatch(detalleProducto(id))
  }, [dispatch, id])

  var detalle = useSelector(state => state.detalleProducto)

  console.log(detalle)

  return (
    <div className={s.conetenedorDetalle}>

      <div className={s.contenedorLogo}>
        <img src={logo} alt="" />
      </div>

      <NavMenu />
      <div className={s.contenedorProducto}>
        <div className={s.btnVolver}>
          <NavLink to={'/'}>
            <button>Volver a home</button>
          </NavLink>
        </div>
        <div className={s.contenedorCard} key={detalle.id}>
          <h2 className={s.cardNombre}>{detalle.nombre}</h2>
          <img className={s.cardImg} src={detalle.imagen} alt="fotoProducto" />

          <h3 className={s.cardCategoria}><u>Categoría:</u> {detalle.categoria}</h3>
          <h3 className={s.cardSeccion}><u>Sección:</u> {detalle.seccion}</h3>
          <p className={s.cardDescripcion}><u>Descripción:</u> {detalle.descripcion}</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}