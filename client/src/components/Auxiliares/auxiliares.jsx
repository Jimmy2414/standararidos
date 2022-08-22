import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducto } from '../../Redux/actions/actions';
import Productos from "../Productos/Productos";
import NavMenu from "../NavMenu/Menu";
import Footer from "../Footer/Footer";
import { useState } from "react";

import logo from '../../img/standarLogo.jpg';
import bannerAux from '../../img/bannerAux.jpg'
import base from '../../img/base.jpg'
import s from '../Auxiliares/auxiliares.module.css'

export default function Auxiliares() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const dispatch = useDispatch();

  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.descripcion));

  const auxiliares = allProductos.filter(e => e.seccion === "Auxiliares")

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div className={s.loaderfondo}>
          <div className={s.loader}>
          </div>
        </div>
      ) : (<div>

        <div className={s.textoArriba}>
          <p>Pilcomayo 3764 - Villa Tesei (Hurlingham) - Provincia de Buenos Aires</p>
          <p>Copyright · 2022 · Standar Aridos</p>
        </div>


        <div className={s.contenedorLogo}>
          <img src={logo} alt="Logo" />
          {/* <h1>STANDAR ARIDOS</h1> */}
        </div>

        <NavMenu />

        <div className={s.layout}>
          <div className={s.titulo}>
            <h1>Auxiliares</h1>
          </div>
          <div className={s.bannerAux}>
            <img src={bannerAux} alt="banner-latex" />
          </div>

          <img className={s.imginfoaux} src={base} alt="base" />
          <div className={s.info}>
            <h3>Base</h3>
            <p>
              Es un auxiliar necesario a la hora de aplicar revestimiento texturado. La base es un recubrimiento previo que sirve para preparar la superficie, brindando una mejor adherencia a sus paredes y optimizando el rendimiento del texturado.
              Es una imprimación que otorga un fondo uniforme, en especial cuando se trata de revestimiento a llana, para nivelar y evitar que se vea el color de la superficie de abajo. La base junto al texturado, garantizan una total impermeabilidad sobre la superficie.</p>
            <p className={s.enRojo}>Dejar secar 24 horas antes del texturado. No colocar sobre revoques recien hechos.</p>

            <h3>Rendimiento:</h3>
            <p>6,2 a 6,5 kg / 12 mts².</p>

            <h3>Presentación:</h3>
            <p>Baldes de 6.5 kg, 15 kg y 30 kg..</p>
          </div>


          <div className={s.contenedorProducto}>
            {auxiliares?.map(e => {

              return (
                <div key={e.id}>
                  <Productos
                    id={e.id}
                    imagen={e.imagen}
                    nombre={e.nombre}
                    descripcion={e.descripcion}
                    categoria={e.categoria}
                    seccion={e.seccion}
                  />
                </div>
              );


            })}
          </div>
        </div>
        <Footer />
      </div>)}

    </div>
  )
}