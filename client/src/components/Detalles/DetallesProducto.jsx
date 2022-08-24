import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detalleProducto } from '../../Redux/actions/actions';
import { NavLink } from 'react-router-dom';
import logo from '../../img/standarLogo.jpg';
import NavMenu from '../NavMenu/Menu';
import Footer from '../Footer/Footer';
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
  // const id = props.match.params.id

  useEffect(() => {
    dispatch(detalleProducto(id));
  }, [dispatch, id]);

  var detalle = useSelector(state => state.detalleProducto);

  console.log(detalle);

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

              <div className={s.cardDescripcionTotal}>
                <p className={s.cardDescripcion}>
                  <b>Descripción</b> {detalle.descripcion}
                </p>
              </div>

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
      </div>

      {/* <Footer /> */}
    </div>
  );
}
