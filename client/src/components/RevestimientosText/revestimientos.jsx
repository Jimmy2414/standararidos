import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducto } from '../../Redux/actions/actions';
import Productos from "../Productos/Productos";
import NavMenu from "../NavMenu/Menu";
import { NavLink } from 'react-router-dom'
import Footer from "../Footer/Footer";
import { useState } from "react";

import logo from '../../img/standarLogo.jpg'
import bannerRevest from '../../img/bannerRevest.jpg'
import aRodillo from '../../img/arodillo.jpg'
import aLlanna from '../../img/allana.jpg'
import s from '../RevestimientosText/revestimientos.module.css'

export default function Revestimientos(props) {
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

  const productoRevest = allProductos.filter(e => e.seccion === "Revestimiento Texturado")


  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  return (
    <div>

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
                  <h1>Revestimientos texturados</h1>
                </div>
                <div className={s.bannerRevest}>
                  <img src={bannerRevest} alt="banner-revestimientos-texturados" />
                </div>

                <div className={s.descripcionRevest}>
                  <p>Revestimiento compuesto a base de resinas acrílicas y cargas minerales, que aportan resistencia a los diversos agentes climáticos y gran impermeabilidad. Decora las superficies y las protege a lo largo del tiempo. Según la forma de aplicación, existen dos tipos, a llana y a rodillo. Es de uso interior y exterior.</p>
                </div>

                <div className={s.aRodillo}>
                  <img src={aRodillo} alt="a-rodillo" />
                  <div className={s.info}>
                    <h3>Revestimiento rodillado (a rodillo):</h3>
                    <p>Revestimiento de contextura espesa y maleable, que se aplica con rodillo, el cual dependiendo del largo brinda una textura pronunciada, o más planchada, con uno de pelo corto. Otorga gran uniformidad, creando una película protectora en la superficie. Presentado en baldes de 15 y 30 kg.</p>

                    <h3>Rendimiento:</h3>
                    <p>2,2 a 2,5 kg de producto cubren 1 mt². Dependiendo del estado de la superficie y la forma de aplicación.</p>

                    <h3>Recomendaciones:</h3>
                    <p>No colocar con pronóstico de lluvia durante las próximas 72 horas. En revoques nuevos, dejar fraguar la superficie durante 45 días.</p>
                  </div>
                </div>

                <div className={s.aLlana}>
                  <img src={aLlanna} alt="a-rodillo" />
                  <div className={s.info}>
                    <h3>Revestimiento Rulato Travertino (con llana):</h3>
                    <p>Revestimiento de aplicación con llana metálica y plástica, que forma una capa de grosor medio o fino según el grano de la piedra. La textura media, brinda un efecto visual bien definido al hacer el rayado. Con textura fina, el dibujo es más sutil y la carga sobre la superficie más liviana. El revestimiento junto a la base, garantizan una total impermeabilidad, con mejor adherencia y visualmente uniforme en color.</p>

                    <h3>Rendimiento:</h3>
                    <p>2,2 a 2,5 kg de producto cubren 1 mt². Dependiendo del estado de la superficie y la forma de aplicación.</p>

                    <h3>Recomendaciones:</h3>
                    <p>No colocar con pronóstico de lluvia durante las próximas 72 horas. En revoques nuevos, dejar fraguar la superficie durante 45 días.</p>
                  </div>
                </div>




                <div className={s.contenedorProducto}>
                  {productoRevest?.map(e => {

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