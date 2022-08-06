import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../img/standarLogo.jpg';
import bannerUno from '../../img/bannerUno.jpg';
import bannerDos from '../../img/bannerDos.jpg';
import bannerTres from '../../img/bannerTres.jpg';
import Productos from '../Productos/Productos';
import { getProducto } from '../../Redux/actions/actions';
import NavMenu from '../NavMenu/Menu';
import s from '../Landing/Landing.module.css';

export default function Landing() {
  const dispatch = useDispatch();

  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.descripcion));

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  return (
    <div className={s.contenedorLanding}>

      <div className={s.menu}>

        <img src={logo} alt="" />
        <div className={s.menu_landing}>
          <NavMenu />
        </div>
      </div>

      <div className={s.titulo}>
        <h1>Standar Aridos</h1>
      </div>
      <div className={s.textocambiante}>
        <h3 className={s.renova}>¡renová</h3>
        <ul>
          <li>tus Espacios!</li>
          <li>tu Hogar!</li>
          <li>tu Vida!</li>
        </ul>
      </div>

      {/* <div className={s.sliderShow}>
        <div className={s.slides}>
          <div className={s.slide}>
            <a
              href="https://api.whatsapp.com/send?phone=+541170347165&text=¡Hola, Necesito información para empezar mi proyecto!"
              target="_blank"
            >
              <img width="100%" src={bannerUno} />
            </a>
          </div>
          <div className={s.slide}>
            <a href="revest.html" target="_blank">
              <img
                width="100%"
                src={bannerDos}
                alt="consultas standar-aridos"
              />
            </a>
          </div>

          <div className={s.slide}>
            <img
              width="100%"
              src={bannerTres}
              alt="aplicacion standar aridos"
            />
          </div>
        </div>
      </div> */}




      <h3 className={s.title_destacados}>Productos Destacados</h3>

      <div className={s.contenedorProductos}>
        {allProductos?.slice(0, 8).map(e => {
          return (
            <div key={e.id}>
              <Productos
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
  );
}
