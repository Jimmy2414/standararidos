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
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
let idp;
export default function ModificarProductos() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const BeforeProduct = useSelector(state => state.ProductoBefore);

  const allProductos = useSelector(state => state.Productos);


  const [putModal, setInputModal] = useState(false);

  let { id } = useParams();
  idp = id;


  const [input, setInput] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    seccion: '',
  });
  const [productoFilter, setProductoFilter] = useState('');

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

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
        Swal.fire('Debe escribir el nombre de un producto.');
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

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  };
  const EditProducto = () => {
    dispatch(modificarProducto(id, input))
      .then(res => dispatch(getProducto()))
      .then(res =>
        Swal.fire('¡Producto modificado!'));
    window.location.reload();
    navigate('/upDate');
  };

  const cerrar = () => {
    setInputModal(false);
    window.location.reload();
  };

  const abrir = () => {

    setTimeout(() => {
      dispatch(productoBefore(idp));
    }, 1000);

    Swal.fire({
      title: 'Seguro que deseas editar?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'si',
      denyButtonText: `no`,
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setInputModal(!putModal);

        setInput({
          nombre: BeforeProduct.nombre,
          descripcion: BeforeProduct.descripcion,
          categoria: BeforeProduct.categoria,
          seccion: BeforeProduct.seccion,
        });

      } else if (result.isDenied) {
        Swal.fire('Los cambios no se guardaron.', '', 'info');
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

      <div className={s.contenedorProductos}>
        {loading ? (
          <div className={s.loaderfondo}>
            <div className={s.loader}></div>
          </div>
        ) : (
          <div className={s.productos}>
            {allProductos?.map(e => {
              return (
                <div key={e.id}>
                  <NavLink to={`/admin/detalle/${e.id}`}>
                    <Productos
                      id={e.id}
                      imagen={e.imagen}
                      nombre={e.nombre}
                      descripcion={e.descripcion}
                      categoria={e.categoria}
                      seccion={e.seccion}
                    />
                  </NavLink>
                  <div className={s.btnModificar}>
                    <Link to={'/upDate/' + e.id}>
                      <button onClick={abrir}>Modificar</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Modal open={putModal} onClose={cerrarEditar}>
        {bodyEditar}
      </Modal>
    </div>
  );
}
