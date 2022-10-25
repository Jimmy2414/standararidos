import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteState } from '../../Redux/actions/actions';
import s from '../detalleAdmin/detalleAdmin.module.css';
import { useState } from 'react';

export default function DetalleAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productod, setProductod] = useState();
  const [id2, setId2] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const detalleProdu = useSelector(state => state.Productos);


  function buscar() {
    setId2(id);
    let detalle = detalleProdu.find(e => e.id === id2 * 1);
    setProductod(detalle);
  }

  useEffect(() => {
    buscar();
  });
  function volver() {
    navigate('/upDate');
    setProductod('');
    window.location.reload();
    dispatch(deleteState());
  }
  return (
    <div>
      <div>
        <div className={s.btnVolver}>
          <button onClick={volver}>Volver atras</button>
        </div>
      </div>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className={s.contenedorCard}>
          <img
            className={s.cardImg}
            src={productod ? productod.imagen : <p>not found</p>}
            alt="fotoProducto"
          />

          <div className={s.info}>
            <h2 className={s.cardNombre}>
              {productod ? productod.nombre : <p>sin nombre</p>}
            </h2>

            <h3 className={s.cardCategoria}>
              <b>Categoría:</b>{' '}
              {productod ? productod.categoria : <p>sin categoria</p>}
            </h3>
            <h3 className={s.cardSeccion}>
              <b>Sección:</b>{' '}
              {productod ? productod.seccion : <p>sin seccion</p>}
            </h3>
            <p className={s.cardDescripcion}>
              <b>Descripción:</b>{' '}
              {productod ? productod.descripcion : <p>sin descripcion</p>}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
