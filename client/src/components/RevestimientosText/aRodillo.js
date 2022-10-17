import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducto } from '../../Redux/actions/actions';
import Productos from "../Productos/Productos";
import NavMenu from "../NavMenu/Menu";
import { NavLink } from 'react-router-dom'
import Footer from "../Footer/Footer";
import { useState } from "react";
import Paginacion from "../Paginado/paginado";

import logo from '../../img/standarLogo.jpg'
import bannerRevest from '../../img/bannerRevest.jpg'
import aRodillo from '../../img/arodillo.jpg'
import aLlanna from '../../img/allana.jpg'
import s from '../RevestimientosText/revestimientos.module.css'
import sa from '../Auxiliares/auxiliares.module.css'
import arrowRight from '../../img/arrowRight.svg'
import arrowDown from '../../img/arrowDown.svg'

import { Helmet } from 'react-helmet'

export default function Arodillo(props) {

  const [icon, setIcon] = useState(true)
  function changeToCross(e) {
    if (e.target) {
      setIcon(!icon)
    }
  }

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

  const auxiliares = allProductos.filter(e => e.seccion === "Auxiliares")



  const [curretPage, setCurrentPage] = useState(1);
  const [productosPorPagina, setcountriesPorPagina] = useState(10);
  const indexProductLast = curretPage * productosPorPagina;
  const indexProductFirst = indexProductLast - productosPorPagina;
  const productoRevest = allProductos.filter(e => e.seccion === "Revestimiento Texturado rodillo").slice(
    indexProductFirst,
    indexProductLast
  );
  const fichaTecnica = allProductos.filter(e => e.seccion === "ficha tecnica rodillo")

  const paginado = pageNumber => {
    let page = curretPage;
    // if (pageNumber === 'inicio') {
    //   setCurrentPage(1);
    // } 
    //  if (pageNumber === 'final') {
    //   setCurrentPage(Math.ceil(allProductos.length / productosPorPagina));
    // } 
    if (
      pageNumber === 'siguiente' &&
      curretPage < Math.ceil(allProductos.length / productosPorPagina)
    ) {
      page = curretPage + 1;
      setCurrentPage(page);
    } else if (pageNumber === 'anterior' && curretPage > 1) {
      page = curretPage - 1;
      setCurrentPage(page);
    } else if (typeof pageNumber === 'number') {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Revestimientos Texturados - Rodillo | Standar Aridos</title>

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
      {

        loading ? (
          <div className={s.loaderfondo}>
            <div className={s.loader}>
            </div>
          </div>
        ) :
          (
            <div>

              <div>
                <div className={s.textoArriba}>
                  <p>Pilcomayo 3764 - Villa Tesei (Hurlingham) - Provincia de Buenos Aires</p>
                  <p>Copyright · 2022 · Standar Aridos</p>
                </div>



                <div className={s.contenedorLogo}>
                  <img src={logo} alt="Logo" />
                  {/* <h1>STANDAR ARIDOS</h1> */}
                </div>
              </div>


              <NavMenu />

              <div className={s.layout}>

                <div className={s.titulo}>
                  <h1>Revestimientos texturados a Rodillo</h1>
                </div>

                <div className={s.bannerRevest}>
                  <img src={bannerRevest} alt="banner-revestimientos-texturados" />
                </div>


                <div className={s.descripcionRevest}>
                  <p>Revestimiento compuesto a base de resinas acrílicas y cargas minerales, que aportan resistencia a los diversos agentes climáticos y gran impermeabilidad. Decora las superficies y las protege a lo largo del tiempo. Según la forma de aplicación, existen dos tipos, a llana y a rodillo. Es de uso interior y exterior.</p>
                </div>

                <div className={s.layoutDos}>
                  <div className={s.aRodillo}>
                    <img src={aRodillo} alt="a-rodillo" />
                    <div className={s.info}>
                      <h3>Revestimiento rodillado (a rodillo)</h3>
                      <p>Revestimiento de contextura espesa y maleable, que se aplica con rodillo, el cual dependiendo del largo brinda una textura pronunciada, o más planchada, con uno de pelo corto. Otorga gran uniformidad, creando una película protectora en la superficie. Presentado en baldes de 15 y 30 kg.</p>

                      <h3>Rendimiento</h3>
                      <p>2,2 a 2,5 kg de producto cubren 1 mt². Dependiendo del estado de la superficie y la forma de aplicación.</p>

                      <h3>Recomendaciones</h3>
                      <p>No colocar con pronóstico de lluvia durante las próximas 72 horas. En revoques nuevos, dejar fraguar la superficie durante 45 días.</p>
                    </div>
                  </div>

                  {/* <div className={s.aLlana}>
                    <img src={aLlanna} alt="a-rodillo" />
                    <div className={s.info}>
                      <h3>Revestimiento Rulato Travertino (con llana)</h3>
                      <p>Revestimiento de aplicación con llana metálica y plástica, que forma una capa de grosor medio o fino según el grano de la piedra. La textura media, brinda un efecto visual bien definido al hacer el rayado. Con textura fina, el dibujo es más sutil y la carga sobre la superficie más liviana. El revestimiento junto a la base, garantizan una total impermeabilidad, con mejor adherencia y visualmente uniforme en color.</p>

                      <h3>Rendimiento</h3>
                      <p>2,2 a 2,5 kg de producto cubren 1 mt². Dependiendo del estado de la superficie y la forma de aplicación.</p>

                      <h3>Recomendaciones</h3>
                      <p>No colocar con pronóstico de lluvia durante las próximas 72 horas. En revoques nuevos, dejar fraguar la superficie durante 45 días.</p>
                    </div>
                  </div> */}

                  {/* FICHA TECNICA */}
                  <label htmlFor="fichatecnica" className={s.labelFichaTecnica} onClick={changeToCross}>
                    {icon === true
                      ?
                      <h3>Ficha Tecnica<img className={s.arrow_faq} src={arrowRight} alt="arrow_faq" />  </h3>
                      :
                      <h3>Ficha Tecnica <img className={s.arrow_faq} src={arrowDown} alt="arrow_faq" /> </h3>}
                  </label>
                  <input type="checkbox" id="fichatecnica" className={s.checkbox_faq} />


                  <div className={s.faq_answered}>
                    <img src={'http://www.ejemplode.com/images/uploads/escritos/ficha-tecnica-nutrimental_1.jpg?1478222168874'} alt="ficha tecnica" />
                  </div>



                </div>


                <h2>AUXILIARES</h2>
                <div className={s.contenedorProductoAux}>

                  <div className={s.contenedorProducto}>
                    {auxiliares?.map(e => {

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
                  <hr className={s.hr} />
                </div>


                <h2>REVESTIMIENTOS</h2>
                <div className={s.contenedorProducto}>
                  {productoRevest?.map(e => {

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
              <Paginacion
                curretPage={curretPage}
                productosPorPagina={productosPorPagina}
                allProductos={allProductos.length}
                paginado={paginado}
              />
              <Footer />
            </div>)}
    </div>
  )
}