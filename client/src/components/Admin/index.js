
import logo from '../../img/standarLogo.jpg'
import s from '../Admin/Admin.module.css'
import Navbar from '../NavBar/Navbar'
import { useNavigate, Navigate } from 'react-router-dom';


export const Admin = () => {

  let token = localStorage.getItem('token')

  return (
    <div>
      {!token && <Navigate to="/login" />}
      <div className={s.contenedorGeneral}>
        <div className={s.navAdmin}>
          <Navbar />
        </div>

        <div className={s.seccionAdmin}>
          <div>
            <img src={logo} alt="" />
          </div>

          <div className={s.accionesAdmin}>
            <div className={s.ayuda}>
              <h2>ACCIONES DE ADMINISTRADOR:</h2>
              <p>Estas son las opciones que tiene el administrador para poder realizar cualquier tipo de acción: "Subir productos", "Modificar productos" y "Eliminar productos", "Subir ficha técnica", "Eliminar ficha técnica". <br />
                A continuación, se le detallara paso a paso como usar cada una de las acciones.
              </p>

              <h3>Subir productos:</h3>

              <ol>
                <li>1-Dar nombre al producto en el primer campo</li>
                <li>2-Escribir una descripción en el segundo campo</li>
                <li>3-Elegir la sección a la cual pertenece el producto</li>
                <li>4-Escribirle una categoria.</li>
                <li>5-Subir la imagen perteneciente al producto (Acepta archivos: JPG, JPEG, PNG)</li>
              </ol>
              <p>Se cargará el producto en la base de datos y al finalizar dará una alerta diciendo que se subio correctamente.</p>
              <p>Presionar el boton "SUBIR" para finalizar. (Tendra 2 opciones, "GUARDAR" o "CANCELAR")</p>


              <h3>Modificar productos:</h3>
              <ol>
                <li>1-Escribir el nombre producto con el buscador</li>
                <li>2-Presionar "BUSCAR" o presionar la tecla "ENTER"</li>
                <li>3-Presionar en el boton "MODIFICAR" debajo del producto. (Al presionarlo, se abrirá un modal con los campos a cambiar)</li>
                <li>4-Escribir el campo a modificar</li>
              </ol>
              <p>Una vez terminado, seleccionar "MODIFICAR" (Si no se quiere guardar, presionar "CANCELAR")</p>
              <p>El boton "RECARGAR" del buscador, traerá todos los productos una vez más.</p>

              <h3>Eliminar productos:</h3>
              <ol>
                <li>1-Escribir el nombre producto con el buscador</li>
                <li>2-Presionar "BUSCAR" o presionar la tecla "ENTER"</li>
                <li>3-Presionar en el boton "ELIMINAR" debajo del producto. (Al presionarlo, se abrirá un modal con 2 opciones "BORRAR" o "CANCELAR")</li>
              </ol>
              <h5>¡ADVERTENCIA!</h5>
              <p>Una vez eliminado el producto desaparecerá permanentemente de la base de datos. </p>


              <h3>Subir Ficha Técnica:</h3>
              <ol>
                <li>5-Subir la imagen de la ficha técnica (Acepta archivos: JPG, JPEG, PNG)</li>
                <li>3-Elegir la sección a la cual pertenece la ficha técnica</li>
              </ol>
              <p>Se cargará  en la base de datos y al finalizar dará una alerta diciendo que se subio correctamente.</p>
              <p>Presionar el boton "SUBIR FICHA TÉCNICA" para finalizar. (Tendra 2 opciones, "GUARDAR" o "CANCELAR")</p>



              <h3>Eliminar Ficha Técnica:</h3>
              <ol>
                <li>3-Presionar en el boton "ELIMINAR" debajo de la ficha técnica. (Al presionarlo, se abrirá un modal con 2 opciones "BORRAR" o "CANCELAR")</li>
              </ol>
              <h5>¡ADVERTENCIA!</h5>
              <p>Una vez eliminada desaparecerá permanentemente de la base de datos. </p>


              <h6>ACLARACIÓN:</h6>
              <p>Al eliminar una ficha técnica, podra ver que aparece unicamente el título de la ficha técnica, pero
                podrá subir otra foto en su correspondiente sección y se actualizará con la nueva ficha técnica que suba.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}