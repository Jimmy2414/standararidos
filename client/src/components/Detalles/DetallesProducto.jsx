import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detalleProducto } from '../../Redux/actions/actions';
import { NavLink } from 'react-router-dom';
import logo from '../../img/standarLogo.jpg';
import NavMenu from '../NavMenu/Menu';
import Footer from '../Footer/Footer';
import { FaWhatsapp } from "react-icons/fa";
import s from '../Detalles/DetallesProducto.module.css';

export default function DetalleProducto(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    dispatch(detalleProducto(id));
  }, [dispatch, id]);

  var detalle = useSelector(state => state.detalleProducto);


  return (
    <div className={s.conetenedorDetalle}>
      <div className={s.textoArriba}>
        <p>
          Pilcomayo 3764 - Villa Tesei (Hurlingham) - Provincia de Buenos Aires
        </p>
        <p>Copyright · 2022 · Standar Aridos</p>
      </div>
      <div className={s.contenedorLogo}>
        <img src={logo} alt="logo" />
      </div>

      <NavMenu />
      <div className={s.contenedorProducto}>
        <div className={s.btnVolver}>
          <NavLink to={'/'}>
            <button>Volver a home</button>
          </NavLink>
        </div>
        {loading ? (
          <h2>Cargando...</h2>
        ) : (
          <div className={s.contenedorCard} key={detalle.id}>
            <img
              className={s.cardImg}
              src={detalle.imagen}
              alt="fotoProducto"
            />

            <div className={s.info}>
              <h2 className={s.cardNombre}>{detalle.nombre}</h2>

              {detalle.descripcion ? (
                <div className={s.cardDescripcionTotal}>
                  <p className={s.cardDescripcion}>
                    <b>Descripción</b> {detalle.descripcion}
                  </p>
                </div>
              ) : (
                <div></div>
              )}

              <div className={s.cardCategoriaTotal}>
                <h3 className={s.cardCategoria}>
                  <b>Categoría</b> {detalle.categoria}
                </h3>
              </div>
              <h3 className={s.cardSeccion}>
                <b>Sección</b> {detalle.seccion}
              </h3>
            </div>
          </div>
        )}
        <div className={s.interes}>
          <p>¿Te interesa este producto?</p>
          <p>Envianos un mensaje para saber su disponibilidad o consultar lo que necesites...</p>
          <p className={s.wsp}><a className={s.wspA} href="https://api.whatsapp.com/send?phone=+541170347165&text=¡Hola, tengo una consulta!." target="_blank"><FaWhatsapp /></a></p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
