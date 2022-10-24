import React, { useState, useEffect } from 'react'
import { storage } from '../../../Firebase/firebase';
import Swal from 'sweetalert2'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useDispatch, useSelector } from 'react-redux';
import { postFichaTecnica, getUrl, getFichaTecnica, deleteFichaTecnica } from '../../../Redux/actions/actions';
// import validations from './validations';

import NavBar from '../../NavBar/Navbar'


import s from '../fichasTecnicas/fichatecnica.module.css'
import { NavLink } from 'react-router-dom';


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

  useEffect(() => {

    dispatch(getFichaTecnica());


  }, [dispatch])

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
          // Swal.fire('Creado!', 'Ok.', 'success');
          dispatch(postFichaTecnica(totalFichaTecnica));
          setTimeout(() => {
            window.location.reload()
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


  function handleSelectSeccion(e) {
    setFichaTecnica({ ...fichaTecnica, seccion: e.target.value });
  }

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function deleteFichaTecnicaFn(e) {
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
        dispatch(deleteFichaTecnica(e))
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


  const fichTecnicallana = allFichasTecnicas.filter(e => e.seccion === "ficha tecnica llana")
  const fichTecnicaRodillo = allFichasTecnicas.filter(e => e.seccion === "ficha tecnica rodillo")
  const fichTecnicaMembrana = allFichasTecnicas.filter(e => e.seccion === "ficha tecnica membrana")


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
        <button className={s.botonSubir}>Subir Ficha Técnica</button>
      </form>

      <hr />

      <div className={s.contenedorFichasHechas}>
        <div>
          <h2>Revestimiento texturado - A Llana</h2>
          {fichTecnicallana?.map(e => {
            console.log(fichTecnicallana[0].imagen)
            {
              return (
                <div className={s.ficha} key={e.id}>

                  <img src={e.imagen} />

                  <button onClick={() => deleteFichaTecnicaFn(e.id)}>Eliminar</button>
                </div>
              )
            }
          })}

        </div>

        <div>
          <h2>Revestimiento texturado - A Rodillo</h2>
          {fichTecnicaRodillo?.map(e => {
            {
              return (
                <div className={s.ficha} key={e.id}>

                  <img src={e.imagen} />

                  <button onClick={() => deleteFichaTecnicaFn(e.id)}>Eliminar</button>
                </div>
              )
            }
          })}
        </div>

        <div>
          <h2>Membrana en pasta</h2>
          {fichTecnicaMembrana?.map(e => {
            {
              return (
                <div className={s.ficha} key={e.id}>

                  <img src={e.imagen} />

                  <button onClick={() => deleteFichaTecnicaFn(e.id)}>Eliminar</button>
                </div>
              )
            }

          })}

        </div>
      </div>


    </div>
  )
}

export default Fichatecnica