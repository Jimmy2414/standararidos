import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducto } from '../../Redux/actions/actions';
import Productos from "../Productos/Productos";
import NavMenu from "../NavMenu/Menu";
import Footer from "../Footer/Footer";
import { useState } from "react";
import s from '../LatexColor/latex.module.css'

export default function LatexColor() {


  const dispatch = useDispatch();

  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.descripcion));

  const latexColor = allProductos.filter(e => e.seccion === "Látex Color")

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  return (
    <div>
      <NavMenu />

      <div className={s.layout}>
        <div>
          <h1>Látex Color</h1>
        </div>
        <div className={s.contenedorProducto}>
          {latexColor?.map(e => {

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