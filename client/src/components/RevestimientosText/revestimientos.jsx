import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducto } from '../../Redux/actions/actions';
import Productos from "../Productos/Productos";
import NavMenu from "../NavMenu/Menu";
import Footer from "../Footer/Footer";
import { useState } from "react";

export default function Revestimientos() {


  const dispatch = useDispatch();

  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.descripcion));

  const productoRevest = allProductos.filter(e => e.seccion === "Revestimiento Texturado")

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);

  return (
    <div>
      <NavMenu />

      <div>
        <h1>Revestimientos texturados</h1>
      </div>
      <div >
        {productoRevest?.map(e => {

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

      <Footer />
    </div>
  )
}