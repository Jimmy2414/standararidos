import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Productos from '../../Productos/Productos';
import {
  getProducto,
  filterProductoPorNombre,
  modificarProducto,
  productoBefore,
} from '../../../Redux/actions/actions';
import NavBar from '../../NavBar/Navbar';
import { Modal, TextField, button, Button } from '@material-ui/core';
import s from '../../accionesAdmin/modificarCosas/modificar.module.css';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function ModificarProductos() {
  const dispatch = useDispatch();
  const BeforeProduct = useSelector(state => state.ProductoBefore);
  const allProductos = useSelector(state => state.Productos);
  console.log(allProductos.map(e => e.id));

  const [putModal, setInputModal] = useState(false);
  let key = useParams();
  console.log(key.id);

  let id = allProductos.find(e => e.id);
  console.log(id)

  const [input, setInput] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    seccion: '',
  });
  const [productoFilter, setProductoFilter] = useState('');

  useEffect(() => {
    dispatch(getProducto());

    // dispatch(productoBefore())
  }, [dispatch]);


  // FUNCIONES DE RETURN
  function handleChange(e) {
    e.preventDefault();
    setProductoFilter(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (productoFilter.length) {
        dispatch(filterProductoPorNombre(productoFilter));
      } else {
        alert('Debe escribir el nombre de un producto');
      }
    } catch (err) {
      throw new Error(err);
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


  // FUNCIONES MODAL
  const handleChangeData = e => {
    e.preventDefault();
    dispatch(productoBefore(key.id))
    console.log(key.id)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };
  const EditProducto = () => {
    console.log(key.id)
    dispatch(modificarProducto(key.id, input))
      .then(res => dispatch(getProducto()))
      .then(res => alert('producto Modificado'),);
    // window.location.reload()
  };

  const cerrar = () => {

    setInputModal(false).then(window.location.reload())
  };

  const abrir = () => {

    // dispatch(productoBefore(key.id));
    setInputModal(!putModal);
  };
  const cerrarEditar = () => {
    setInputModal(!putModal);
    dispatch(productoBefore(id));
    setInput({
      nombre: BeforeProduct.nombre,
      descripcion: BeforeProduct.descripcion,
      categoria: BeforeProduct.categoria,
      seccion: BeforeProduct.seccion,
    });
    console.log(input);
  };



  // MODAL
  const bodyEditar = (
    <div className={s.bodyEditar}>
      <h3>Modificar producto:</h3>
      <TextField
        className={s.inputEdit}
        label="Nombre"
        name="nombre"
        onChange={handleChangeData}
      />

      <br />
      <TextField
        className={s.inputEdit}
        label="Descripción"
        name="descripcion"
        onChange={handleChangeData}
      />
      <br />
      <TextField
        className={s.inputEdit}
        label="Categoria"
        name="categoria"
        onChange={handleChangeData}
      />

      <div className={s.botonesEdit}>
        <Button className={s.botonEdit} onClick={EditProducto}>
          Modificar
        </Button>
        <Button className={s.botonEditCancel} onClick={cerrar}>
          Cancelar
        </Button>
      </div>
    </div>
  );

  // RETURN
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
            <button
              className={s.btnBuscar}
              type="submit"
              onClick={handleSubmit}
            >
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
              <Link to={'/upDate/' + e.id}>
                <button onClick={abrir}>Modificar</button>
              </Link>
            </div>
          );
        })}
      </div>

      <Modal open={putModal} onClose={cerrarEditar}>
        {bodyEditar}
      </Modal>
    </div>
  );
}
