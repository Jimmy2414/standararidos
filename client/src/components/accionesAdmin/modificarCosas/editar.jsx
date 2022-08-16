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

export default function EditarProducto() {
  const [putModal, setInputModal] = useState(false);
  const dispatch = useDispatch();
  const BeforeProduct = useSelector(state => state.ProductoBefore);
  const [input, setInput] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    seccion: '',
  });
  // FUNCIONES MODAL
  const handleChangeData = e => {
    e.preventDefault();

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };
  const EditProducto = () => {
    dispatch(modificarProducto(BeforeProduct.id, input))
      .then(res => dispatch(getProducto()))
      .then(res => alert('producto Modificado'));
    // window.location.reload()
  };

  const cerrar = () => {
    setInputModal(false).then(window.location.reload());
  };

  const abrir = () => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        setInputModal(!putModal);

        setInput({
          nombre: BeforeProduct.nombre,
          descripcion: BeforeProduct.descripcion,
          categoria: BeforeProduct.categoria,
          seccion: BeforeProduct.seccion,
        });
        console.log(input);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };
  const cerrarEditar = () => {
    setInputModal(!putModal);
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

  return (
    <div>
      {BeforeProduct.map(e => {
        return <p>{e.nombre}</p>;
      })}{' '}
      <Modal open={putModal} onClose={cerrarEditar}>
        {bodyEditar}
      </Modal>
    </div>
  );
}
