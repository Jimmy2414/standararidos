import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Productos from "../../Productos/Productos";
import { getProducto, filterProductoPorNombre, modificarProducto } from '../../../Redux/actions/actions'
import NavBar from '../../NavBar/Navbar'
import { Modal, TextField, button, Button } from '@material-ui/core';
import s from '../../accionesAdmin/modificarCosas/modificar.module.css'

export default function ModificarProductos() {
  const dispatch = useDispatch();


  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.descripcion));


  const [putModal, setInputModal] = useState(false)
  const [id, setId] = useState('')
  const [input, setInput] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    seccion: ''
  })
  const [productoFilter, setProductoFilter] = useState('');

  useEffect(() => {
    dispatch(getProducto());
  }, [dispatch]);


  const handleChangeData = e => {
    e.preventDefault();
    const { nombre, value } = e.target;
    setInput({
      ...input, [nombre]: value
    })
  }

  const EditProducto = () => {
    dispatch(modificarProducto(id, input))
      .then(res => dispatch(getProducto()))
      .then(res =>
        alert("producto Modificado"),
        cerrarEditar())
  }

  const cerrarEditar = () => {
    setInputModal(!putModal)
  }

  const bodyEditar = (
    <div className={s.bodyEditar}>
      <h3>Modificar producto:</h3>
      <TextField
        className={s.inputEdit}
        label="Nombre"
        name="nombre"
        onChange={handleChangeData}
        value={input && input.nombre}
      />

      <br />
      <TextField
        className={s.inputEdit}
        label="Descripción"
        name="descripcion"
        onChange={handleChangeData}
        value={input && input.descripcion}
      />
      <br />
      <TextField
        className={s.inputEdit}
        label="Categoria"
        name="categoria"
        onChange={handleChangeData}
        value={input && input.categoria}
      />

      <div className={s.botonesEdit}>
        <Button className={s.botonEdit} onClick={EditProducto}>
          Modificar
        </Button>
        <Button className={s.botonEditCancel} onClick={cerrarEditar}>Cancelar</Button>
      </div>
    </div>
  )

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
        <h2>Modificar Producto</h2>
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
                imagen={e.imagen}
                nombre={e.nombre}
                descripcion={e.descripcion}
                categoria={e.categoria}
                seccion={e.seccion}
              />
              <button onClick={cerrarEditar}>Modificar</button>
            </div>
          );
        })}
      </div>


      <Modal open={putModal} onClose={cerrarEditar}>
        {bodyEditar}
      </Modal>
    </div>
  )
}