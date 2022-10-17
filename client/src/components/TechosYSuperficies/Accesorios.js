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

import { Helmet } from 'react-helmet'

import s from '../Membranas/membranas.module.css'

const Accesorios = () => {
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

  const membranas = allProductos.filter(e => e.seccion === "Accesorios")

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Accesorios | Standar Aridos</title>
        <meta name="description" content="Todo lo que necesitas para preparar una pared, superficie o espacio, acorde a tus preferencias. Enduido, fijador sellador y látex, para interior y exterior." />
        <meta name="keywords" content="revestimientos texturados, latex color, enduido, base, membranas, hogar, pinturas, envios, standar aridos" />
        <meta name="sitedomain" content="www.standararidos.com" />
        <meta name="organization" content="standar aridos" />
        <meta name="robots" content="index,follow" />
        <meta name="revisit-after" content="5days" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="www.standararidos.com" />

        <link rel="apple-touch-icon" sizes="57x57" href="" />

        <meta name="twitter:card" content="website" />
        <meta name="twitter:title" content="standar aridos" />
        <meta name="twitter:description" content="Revestimiento texturado y pinturas. Todo lo que necesitas para renovar tu hogar. Látex, enduido plástico, fijador sellador y membrana en pasta. ​Envíos." />
        <meta name="twitter:site" content="www.standararidos.com" />
        <meta name="twitter:image" content="img/standarLogo.jpg" />

        <meta property="og:title" content="Revestimiento texturado y Pinturas | Standar Aridos" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.standararidos.com" />
        <meta property="og:image" content="img/standarLogo.jpg" />
        <meta property="og:description" content="Revestimiento texturado y pinturas. Todo lo que necesitas para renovar tu hogar. Látex, enduido plástico, fijador sellador y membrana en pasta. ​Envíos." />

        <meta itemprop="name" content="Revestimiento texturado y Pinturas | Standar Aridos" />
        <meta itemprop="name" content="Revestimiento texturado y pinturas. Todo lo que necesitas para renovar tu hogar. Látex, enduido plástico, fijador sellador y membrana en pasta. ​Envíos." />
        <meta itemprop="image" content="img/standarLogo.jpg" />


        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

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
          <h1>Accesorios</h1>
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
    </div>
  )
}

export default Accesorios