import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getFichaTecnica } from '../../../Redux/actions/actions'
import s from '../FichasTecnicasSubidas/FichasTecnicasSubidas.module.css'

const FichasTecnicasSubidas = () => {

  const dispatch = useDispatch()
  const allFichasTecnicas = useSelector(state => state.FichaTecnica)
  console.log(allFichasTecnicas)

  useEffect(() => {
    dispatch(getFichaTecnica())
  }, [dispatch])

  return (
    <div>
      {allFichasTecnicas?.map(e => {
        return (
          <div key={e.id}>
            <img src={e.imagen} />
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

export default FichasTecnicasSubidas