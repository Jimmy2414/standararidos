import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducto } from '../../Redux/actions/actions';
import Productos from "../Productos/Productos";
import NavMenu from "../NavMenu/Menu";
import Footer from "../Footer/Footer";
import { useState } from "react";

import logo from '../../img/standarLogo.jpg';
import bannerPrepSup from '../../img/bannerPrepSup.jpg'
import s from '../Preparacion de la superficie/PreparacionSuperficie.module.css'

export default function PreparacionSuperficie() {

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

  const prepSuper = allProductos.filter(e => e.seccion === "Preparación de la superficie")

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  return (
    <div>

      {loading ? (
        <div className={s.loaderfondo}>
          <div className={s.loader}>
          </div>
        </div>) : (<div>
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
              <h1>Preparación de la superficie</h1>
            </div>
            <div className={s.bannerPrepSup}>
              <img src={bannerPrepSup} alt="banner-latex" />
            </div>
            <div className={s.contenedorProducto}>
              {prepSuper?.map(e => {

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