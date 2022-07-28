import React from 'react';
import { storage } from './firebase';
import Swal from 'sweetalert2';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from '../components/NavBar/Navbar';
import { postProducto } from '../Redux/actions/actions';
import logo from '../img/standarLogo.jpg';
import s from '../components/accionesAdmin/subirCosas/Subir.module.css';

export default function FileUpload() {
  const dispatch = useDispatch();
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    seccion: '',
    categoria: '',
    imagen: 'ggg',
  });
  const [file, setFile] = useState('');
  console.log(producto);
  useEffect(() => {
    if (file) {
      const storageRef = ref(storage, '/StandarAridos/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', snapshot => {
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      });
    }
  }, [file]);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setFile('');
    Swal.fire({
      title: 'Quieres guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      denyButtonText: `NO guardar`,
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(postProducto(producto));
        Swal.fire('Enviado!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Los cambios no se guardaron', '', 'info');
      }
    });
    // Swal.fire({
    //   position: 'center',
    //   icon: 'success',
    //   title: 'Your work has been saved',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
  }
  function handleChangeProduct(e) {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <NavBar />
      <div className={s.contenedorGeneral}></div>

      <div className={s.accionesAdmin}>
        <img src={logo} alt="" />
        <div className={s.formContainer}>
          <form onSubmit={handleSubmit}>
            <h1 className={s.titSubir}>
              <i>Subir Producto</i>
            </h1>
            <div>
              <input
                type="text"
                name="nombre"
                id=""
                placeholder="Nombre del producto:"
                onChange={handleChangeProduct}
              />
            </div>

            <div>
              <textarea
                name="descripcion"
                id=""
                cols="100"
                rows="10"
                placeholder="Descripción del producto:"
                onChange={handleChangeProduct}
              ></textarea>
            </div>

            <div>
              {/* <label>Seccion a la que pertenezca el producto:</label>
              <select>
                <option value="">Revestimiento texturado</option>
                <option value="">Látex color</option>
                <option value="">Membranas</option>
                <option value="">Preparación de la superficie</option>
                <option value="">Auxiliares</option>
              </select> */}
              <input
                type="text"
                name="seccion"
                onChange={handleChangeProduct}
              />
            </div>

            <div>
              <input
                type="text"
                name="categoria"
                placeholder="Categoría"
                onChange={handleChangeProduct}
              />
            </div>

            <div>
              <label>Subir imagen</label>
              <input type="file" name="imagen" onChange={handleChange} />
            </div>

            <button type="submit">Subir</button>
          </form>
        </div>
      </div>
      {/* <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />

        <button type='submit' >enviar</button>
      </form> */}
    </div>
  );
}
