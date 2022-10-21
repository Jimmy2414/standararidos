import React, { useState, useEffect } from 'react'
import { storage } from '../../../Firebase/firebase';
import Swal from 'sweetalert2'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useDispatch, useSelector } from 'react-redux';
import { postFichaTecnica, getUrl, getFichaTecnica } from '../../../Redux/actions/actions';
// import validations from './validations';

import NavBar from '../../NavBar/Navbar'


import s from '../fichasTecnicas/fichatecnica.module.css'


const Fichatecnica = () => {
  const dispatch = useDispatch();
  const URL = useSelector(state => state.URL);
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0);
  const [fichaTecnica, setFichaTecnica] = useState({
    seccion: '',
  });
  console.log(fichaTecnica);
  const [file, setFile] = useState('');

  const allFichasTecnicas = useSelector(state => state.FichaTecnica)
  console.log(allFichasTecnicas)

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

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   dispatch(getFichaTecnica());

  // }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fichaTecnica.seccion.length > 0) {
      setFile('');
      Swal.fire({
        title: 'Quieres guardar la ficha tecnica?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        denyButtonText: 'No guardar',
      }).then(result => {
        if (result.isConfirmed) {
          const totalFichaTecnica = {
            ...fichaTecnica,
            imagen: URL,
          };
          console.log(totalFichaTecnica);
          Swal.fire('Creado!', 'Ok.', 'success');
          setTimeout(() => {
            dispatch(postFichaTecnica(totalFichaTecnica));
            // window.location.reload();
          }, 500);
        } else if (result.isDenied) {
          Swal.fire('Los cambios no se guardaron', '', 'info');
        }
      });
    } else {
      alert('No se llenaron todos los campos');
    }
  }


  function handleSelectSeccion(e) {
    setFichaTecnica({ ...fichaTecnica, seccion: e.target.value });
  }

  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  return (
    <div>
      <NavBar />
      <h2>Fichas Técnicas</h2>
      <form onSubmit={handleSubmit}>
        <input className={s.inputFichas} onChange={handleChange} type="file" placeholder="Sube imagen de la ficha técnica" />
        <progress
          className={s.barradecarga}
          value={progress}
          max="100"
        />
        <div >
          {parseInt(progress) === -2 ? 0 : parseInt(progress)} %
        </div>


        <label>¿A qué seccion se va a agregar la ficha técnica?</label>
        <select className={s.selectorFichas} onChange={handleSelectSeccion}>
          <option value="">Sección</option>
          <option value="ficha tecnica llana">Revestimiento texturado a LLANA</option>
          <option value="ficha tecnica rodillo">Revestimiento texturado a RODILLO</option>
          <option value="ficha tecnica membrana">Membrana en pasta</option>
        </select>
        <button>Subir Ficha Técnica</button>
      </form>


      <hr />

      {allFichasTecnicas?.map(e => {
        return (
          <div key={e.id}>
            <p>{e.seccion}</p>
          </div>
        )
      })}
      <div className={s.contenedorFichasHechas}>
        <div>
          <h2>Revestimiento texturado - A Llana</h2>
          <div>
            {
              <img className={s.sinImagen} src='https://baltrion.es/wp-content/uploads/sin-IMAGEN.jpg' />
                ?
                <img className={s.sinImagen} src='https://baltrion.es/wp-content/uploads/sin-IMAGEN.jpg' />
                :
                <img src='' alt='' />
            }
          </div>
          <button>Eliminar</button>
        </div>

        <div>
          <h2>Revestimiento texturado - A Rodillo</h2>
          <div>
            {
              <img className={s.sinImagen} src='https://i.postimg.cc/CxHWvLFF/ficha.jpg' />
                ?
                <img className={s.sinImagen} src='https://i.postimg.cc/CxHWvLFF/ficha.jpg' />
                :
                <img src='' alt='' />
            }
          </div>
          <button>Eliminar</button>
        </div>

        <div>
          <h2>Membrana en pasta</h2>
          <div>
            {
              <img className={s.sinImagen} src='https://baltrion.es/wp-content/uploads/sin-IMAGEN.jpg' />
                ?
                <img className={s.sinImagen} src='https://baltrion.es/wp-content/uploads/sin-IMAGEN.jpg' />
                :
                <img src='' alt='' />
            }
          </div>
          <button>Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default Fichatecnica