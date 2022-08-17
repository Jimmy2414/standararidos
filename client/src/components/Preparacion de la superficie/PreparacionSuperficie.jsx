import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducto } from '../../Redux/actions/actions';
import Productos from "../Productos/Productos";
import NavMenu from "../NavMenu/Menu";
import Footer from "../Footer/Footer";
import { useState } from "react";


import bannerPrepSup from '../../img/bannerPrepSup.jpg'
import s from '../Preparacion de la superficie/PreparacionSuperficie.module.css'

export default function PreparacionSuperficie() {


  const dispatch = useDispatch();

  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.descripcion));

  const prepSuper = allProductos.filter(e => e.seccion === "Preparación de la superficie")

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  return (
    <div>
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
    </div>
  )
}