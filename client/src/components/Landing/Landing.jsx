import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../img/standarLogo.jpg';

import Productos from '../Productos/Productos';
import { getProducto, deleteState } from '../../Redux/actions/actions';
import NavMenu from '../NavMenu/Menu';
import Footer from '../Footer/Footer';
import s from '../Landing/Landing.module.css';
import fotoNosotros from '../../img/fotonosotros1.jpg'
import { NavLink } from 'react-router-dom';

import { Helmet } from 'react-helmet'

export default function Landing() {
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const dispatch = useDispatch();

  const allProductos = useSelector(state => state.Productos);

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);
  useEffect(() => {
    dispatch(deleteState());
  });

  return (
    <div>
      <Helmet>
        <title>Revestimiento texturado y Pinturas | Standar Aridos</title>
        <meta name="description" content="Revestimiento texturado y pinturas. Todo lo que necesitas para renovar tu hogar. Látex, enduido plástico, fijador sellador y membrana en pasta. ​Envíos." />
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

        <link rel="shortcut icon" href="img/favicon2.jpg" type="image/x-icon" />

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
      {loading ? (
        <div className={s.loaderfondo}>
          <div className={s.loader}></div>
        </div>
      ) : (
        <div className={s.contenedorLanding}>
          <div className={s.textoArriba}>
            <p>
              Pilcomayo 3764 - Villa Tesei (Hurlingham) - Provincia de Buenos
              Aires
            </p>
            <p>Copyright · 2022 · Standar Aridos</p>
          </div>

          <div className={s.contenedorLogo}>
            <img src={logo} alt="Logo" />
          </div>

          <div className={s.menu_landing}>
            <NavMenu />
          </div>

          <div className={s.carouselImg}>
            <ul>
              <li></li>
            </ul>
          </div>

          <div className={s.seccionQuienesSomos}>
            <img src={fotoNosotros} alt="" />
            <div className={s.titulo}>
              <span><p className={s.quienessomos}>STANDAR ARIDOS</p>  Somos una marca joven con el objetivo de desarrollar productos para todo aquel que quiera remodelar y acondicionar su hogar, a su manera. <br />
                Nos dedicamos a fabricar y comercializar, productos para la construcción que sirvan para todo tipo de necesidades, y además brindar un aspecto decorativo característico al tanto de las tendencias emergentes. Ejemplo de ello, son los revestimientos texturados, un producto intrínseco a nuestra marca. <br />
                Constantemente, buscamos mejorar nuestras fórmulas de manera que se adecúen aún más a las expectativas de nuestros clientes. <br />
                Apuntamos a lograr, día a día, un producto de suma calidad y resistencia. </span>
            </div>
          </div>

          <h3 className={s.title_destacados}>Productos Recientes</h3>
          <p className={s.aclaracion}>
            Clickea sobre el producto para ver el detalle
          </p>
          <div className={s.contenedorProductos}>
            {allProductos
              ?.reverse()
              .slice(0, 6)
              .map(e => {
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

          <Footer />
        </div>
      )}
    </div>
  );
}
