import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Productos from "../../Productos/Productos";
import { getProducto, filterProductoPorNombre } from '../../../Redux/actions/actions'
import NavBar from '../../NavBar/Navbar'
import s from '../../accionesAdmin/modificarCosas/modificar.module.css'

export default function ModificarProductos() {
  const dispatch = useDispatch();

  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.descripcion));

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);


  let [productoFilter, setProductoFilter] = useState('');


  function handleChange(e) {
    e.preventDefault();
    setProductoFilter(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (productoFilter.length) {
        dispatch(filterProductoPorNombre(productoFilter))
      } else {
        alert('Debe escribir un nombre de un pais')
      }
    }
    catch (err) {
      throw new Error(err)
    }
  }

  function recargar(e) {
    e.preventDefault();
    try {
      dispatch(getProducto());
    } catch (err) {
      throw new Error(err);
    }
  }
  return (
    <div>
      <NavBar />

      <div className={s.contenedorBuscador}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.inputS}
            type="text"
            name="search"
            id="Search"
            placeholder=" Buscar..."
            value={productoFilter}
            onChange={handleChange}
          />
          <div className={s.contenedorBotones}>
            <button className={s.btnBuscar} type="submit" onClick={handleSubmit}>
              Buscar
            </button>
            <button className={s.btnRecargar} type="button" onClick={recargar}>
              Recargar
            </button>
          </div>
        </form>
        <br />

      </div>

      <div>
        {allProductos?.map(e => {
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
  )
}