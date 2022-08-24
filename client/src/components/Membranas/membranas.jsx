import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducto } from '../../Redux/actions/actions';
import Productos from "../Productos/Productos";
import NavMenu from "../NavMenu/Menu";
import Footer from "../Footer/Footer";
import { useState } from "react";
import logo from '../../img/standarLogo.jpg';
import { NavLink } from 'react-router-dom'
import bannerMembranas from '../../img/bannerMembranas.jpg'

import s from '../Membranas/membranas.module.css'

export default function Membranas() {
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 100);
  // }, []);

  const dispatch = useDispatch();

  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.descripcion));

  const membranas = allProductos.filter(e => e.seccion === "Membranas")

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
      ) : (
        <div>
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
              <h1>Membranas</h1>
            </div>
            <div className={s.bannerMembranas}>
              <img src={bannerMembranas} alt="banner-latex" />
            </div>

            <div className={s.info}>
              <h3>Nivel de tránsito</h3>
              <p>Bajo.
                Es transitable por lo cual se puede caminar sobre ella. Se puede aplicar en techos, terrazas y balcones; así como muros y superficies con filtraciones.</p>

              <h3>Aplicación</h3>
              <p>Es de fácil aplicación, se coloca como una pintura, con un rodillo o pincel o soplete. Puede darle varias manos para asegurarse de cubrir la totalidad de la superficie. Debe dejarse secar al menos 24 horas antes de aplicar la siguiente mano, dependiendo de las condiciones climáticas, para lograr la adherencia al sustrato. Y luego, dejar secar al tacto entre las siguientes manos.</p>

              <h3>Colores disponibles</h3>
              <p>Blanco y rojo.</p>

              <h3>Presentación</h3>
              <p>Baldes de 1, 4, 10 y 20 kg.</p>
            </div>


            <div className={s.contenedorProducto}>
              {membranas?.map(e => {

                return (
                  <div key={e.id}>
                    <NavLink to={`/search/${e.id}`}>
                      <Productos
                        id={e.id}
                        imagen={e.imagen}
                        nombre={e.nombre}
                        descripcion={e.descripcion}
                        categoria={e.categoria}
                        seccion={e.seccion}
                      />
                    </NavLink>
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