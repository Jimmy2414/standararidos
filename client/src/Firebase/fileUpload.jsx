import React from 'react';
import { storage } from './firebase';
import Swal from 'sweetalert2';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/NavBar/Navbar';
import { postProducto, getUrl } from '../Redux/actions/actions';
import logo from '../img/standarLogo.jpg';
import validations from './validations';
import s from '../components/accionesAdmin/subirCosas/Subir.module.css';
import { uploadFile } from '../Firebase/firebase';

export default function FileUpload() {
  const dispatch = useDispatch();
  const URL = useSelector(state => state.URL);
  const [check, setCheck] = useState(false)
  const [progress, setProgress] = useState(0);
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    seccion: '',
    categoria: '',
  });
  const [file, setFile] = useState('');

  const [error, setError] = useState({});
  useEffect(() => {
    if (file) {
      const storageRef = ref(storage, '/StandarAridos/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress1 =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress1 - 2);
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
        },
        error => {
          switch (error.code) {
            case 'storage/unauthorized':
              break;
            case 'storage/canceled':
              break;
            case 'storage/unknown':
              break;
            default:
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Imagen subida correctamente',
              showConfirmButton: false,
              timer: 1500,
            });
            dispatch(getUrl(downloadURL));
            setProgress(100);
          });
        }
      );
    }
  }, [file]);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      producto.nombre.length > 0 &&
      typeof producto.categoria === 'string' &&
      producto.categoria.length > 0 &&
      producto.seccion.length > 0
    ) {
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
          const totalProducto = {
            ...producto,
            imagen: URL,
          };
          dispatch(postProducto(totalProducto));
          Swal.fire('Enviado!', 'Ok.', 'success');
          setTimeout(() => {
            window.location.reload();
          }, 500);
        } else if (result.isDenied) {
          Swal.fire('Los cambios no se guardaron', '', 'info');
        }
      });
    } else {
      Swal.fire({
        title: '¡No se llenaron todos los campos!',
        icon: 'error',
        button: 'Ok.'
      })
    }
  }
  function handleChangeProduct(e) {
    setProducto({ ...producto, [e.target.name]: e.target.value });
    setError(
      validations({
        ...producto,
        [e.target.nombre]: e.target.value,
      })
    );
  }

  function handleSelectSeccion(e) {
    setProducto({ ...producto, seccion: e.target.value });
  }

  const checkbox = () => {
    setCheck(true)
  }

  const closeCheck = () => {
    setCheck(false)
  }

  return (
    <div>
      <NavBar />
      <div className={s.contenedorGeneral}></div>

      <div className={s.accionesAdmin}>
        <div className={s.formContainer}>
          <h1 className={s.titSubir}>
            <i>Subir Producto</i>
          </h1>
          <form className={s.form} onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="nombre"
                id=""
                placeholder="Nombre del producto:"
                onChange={handleChangeProduct}
              />
              {error.nombre && <span className={s.error}>{error.nombre}</span>}
            </div>
            <div className={s.divtextarea}>
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
              <label>Seccion a la que pertenezca el producto:</label>
              <select onChange={handleSelectSeccion}>
                <option value="">Sección</option>
                <option value="Revestimiento Texturado llana">
                  Revestimiento texturado a Llana
                </option>
                <option value="Revestimiento Texturado rodillo">
                  Revestimiento texturado a Rodillo
                </option>

                <option value="Látex Interior">Látex Interior</option>
                <option value="Látex Interior Lavable">Látex Interior Lavable</option>
                <option value="Látex Interior Satinado">Látex Interior Satinado</option>
                <option value="Látex Interior Cielorraso">Látex Interior Cielorraso</option>
                <option value="Látex Interior color">Látex Interior color</option>
                <option value="Látex Exterior">Látex Exterior</option>
                <option value="Látex Exterior Impermeabilizante">Látex Exterior Impermeabilizante</option>

                <option value="Membranas">Membranas</option>
                <option value="Fijadores">Fijadores</option>
                <option value="Enduidos">Enduidos</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Auxiliares">Auxiliares</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                name="categoria"
                placeholder="Categoría"
                onChange={handleChangeProduct}
              />
              {error.categoria && (
                <span className={s.error}>{error.categoria}</span>
              )}
            </div>
            <div>
              <label>Subir imagen</label>
              <input type="file" name="imagen" onChange={handleChange} />
              {/* <input type="file" name="imagen" onChange={e => uploadFile(e.target.files[0])} /> */}
              <div className={s.carga}>
                <progress
                  className={s.barradecarga}
                  value={progress}
                  max="100"
                />
                <div className={s.porcentaje}>
                  {parseInt(progress) === -2 ? 0 : parseInt(progress)} %
                </div>
              </div>
            </div>

            <button type="submit">Subir</button>
          </form>
        </div>
      </div>
    </div>
  );
}
