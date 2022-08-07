import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detalleProducto } from "../../Redux/actions/actions";
import NavMenu from "../NavMenu/Menu";
import Footer from "../Footer/Footer";
import s from '../Detalles/DetallesProducto.module.css'

export default function DetalleProducto(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(detalleProducto(id))
  }, [dispatch, id])

  let detalle = useSelector(state => state.detalleProducto)


  return (
    <div className={s.conetenedorDetalle}>
      <NavMenu />
      <div className={s.contenedorProducto}>
        <div className={s.card} key={detalle.id}>
          <img className={s.cardImg} src={detalle.imagen} alt="fotoProducto" />
          <h2 className={s.cardNombre}>{detalle.nombre}</h2>

          <h3 className={s.cardCategoria}><u>Categoría</u>: {detalle.categoria}</h3>
          <h3 className={s.cardSeccion}><u>Sección</u>: {detalle.seccion}</h3>
          <p className={s.cardDescripcion}><u>Descripción</u>: {detalle.descripcion.split(' ').slice(0, 19).join(' ') + ' ...'}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}