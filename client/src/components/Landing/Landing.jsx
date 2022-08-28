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
  console.log(allProductos.map(e => e.descripcion));

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);
  useEffect(() => {
    dispatch(deleteState());
  });
  // const sortProducts = allProductos.sort((a, b) =>
  //   a.id - b.id
  // )

  return (
    <div>
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
            {/* <h1>STANDAR ARIDOS</h1> */}
          </div>

          <div className={s.menu_landing}>
            <NavMenu />
          </div>

          <div className={s.carouselImg}>
            <ul>
              <li></li>
              {/* <li></li> */}
              {/* <li></li> */}
            </ul>
          </div>

          {/* <div className={s.textocambiante}>
        <h3 className={s.renova}>¡renová</h3>
        <ul>
          <li>tus Espacios!</li>
          <li>tu Hogar!</li>
          <li>tu Vida!</li>
        </ul>
      </div> */}
          <div className={s.seccionQuienesSomos}>
            <img src={fotoNosotros} alt="" />
            <div className={s.titulo}>
              <span><p className={s.quienessomos}>STANDAR ARIDOS</p>  Somos una marca joven con el objetivo de desarrollar productos para todo aquel que quiera remodelar y acondicionar su hogar, a su manera. <br />
                Nos dedicamos a fabricar y comercializar, productos para la construcción que sirvan para todo tipo de necesidades, y además brindar un aspecto decorativo característico al tanto de las tendencias emergentes. Ejemplo de ello, son los revestimientos texturados, un producto intrínseco a nuestra marca. <br />
                Constantemente, buscamos mejorar nuestras fórmulas de manera que se adecúen aún más a las expectativas de nuestros clientes. <br />
                Apuntamos a lograr, día a día, un producto de suma calidad y resistencia. </span>
            </div>
          </div>

          <h3 className={s.title_destacados}>Productos Destacados</h3>
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
