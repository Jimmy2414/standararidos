import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Productos from "../../Productos/Productos";
import { getProducto, filterProductoPorNombre, deleteProducto } from '../../../Redux/actions/actions'
import NavBar from '../../NavBar/Navbar'
import s from '../eliminarCosas/eliminar.module.css'
import Swal from 'sweetalert2'

export default function EliminarProducto() {
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


  function deleteProductoFn(e) {
    Swal.fire({
      title: '¿Estas segura/o de eliminar este producto?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'BORRAR'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProducto(e))
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Producto Eliminado",
          showConfirmButton: false
        }
        )
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    })


  }


  return (
    <div>
      <NavBar />

      <div className={s.contenedorBuscador}>
        <h2>Eliminar Producto</h2>
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

      <div className={s.productos}>
        {allProductos?.map(e => {
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
              <button onClick={() => deleteProductoFn(e.id)}>Eliminar</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}