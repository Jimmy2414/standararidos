
import NavMenu from "../NavMenu/Menu";
import Footer from '../Footer/Footer';
import logo from '../../img/standarLogo.jpg'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import s from '../contacto/Contacto.module.css'
import Swal from 'sweetalert2';

export const Contacto = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const mensaje = e.target.mensaje.value

    if (nombre === "" || email === "" || mensaje === "") {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Los campos no pueden estar vacios.',
        showConfirmButton: true,
      });
      return
    }
    if (mensaje.length <= 20) {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Por favor, escribe un poco mas en el mensaje',
        showConfirmButton: true,
      });
    }
    else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Mensaje enviado!',
        showConfirmButton: true,
      });
    }
  }





  return (
    <div className={s.contenedorGeneral}>

      <div>
        <div className={s.textoArriba}>
          <p>Pilcomayo 3764 - Villa Tesei (Hurlingham) - Provincia de Buenos Aires</p>
          <p>Copyright · 2022 · Standar Aridos</p>
        </div>

        <div className={s.contenedorLogo}>
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div>
        <NavMenu />
      </div>

      <div className={s.layout}>

        <h2 className={s.mainTitle}>
          CONTACTO
        </h2>

        <div className={s.containerDatos}>
          <div className={s.datos}>
            <h3>Dirección </h3>
            <p>Pilcomayo 3764 - Villa Tesei (Hurlingham) - Provincia de Buenos Aires</p>
          </div>

          <div className={s.datos}>
            <h3>Mail </h3>
            <p>standararidos@hotmail.com</p>
          </div>

          <div className={s.datos}>
            <h3>Teléfono </h3>
            <p>(011) 7034-7165</p>
            <li className={s.wsp}><a href="https://api.whatsapp.com/send?phone=+541170347165&text=¡Hola, tengo una consulta!." target="_blank"><FaWhatsapp /></a></li>
          </div>

          <div className={s.datos}>
            <h3>Redes </h3>
            <ul>
              <li className={s.fb}><a href='https://es-es.facebook.com/standararidos1/' target="_blank"><FaFacebook /></a></li>
              <li className={s.ig}><a href='https://www.instagram.com/standararidos/?hl=es' target="_blank"><FaInstagram /></a></li>

            </ul>
          </div>
        </div>

        <div className={s.info}>
          <p>
            ¿Necesitas precios?, ¿Necesitas saber la disponibilidad de un producto?,
            ¿Necesitas información?
          </p>
        </div>

        <form className={s.form} method='POST' action="https://formsubmit.co/standararidos@hotmail.com" onSubmit={handleSubmit} >
          <h2 className={s.formTitle}>
            ¡Contactate con nosotros!
          </h2>

          <p className={s.textRequired}>* Campo requerido</p>
          <div className={s.formInputs}>
            <label >
              <input className={s.inputsContacto} type="text" name='nombre' placeholder='Nombre: *' />
            </label>

            <label>
              <input className={s.inputsContacto} type="email" name='email' placeholder='Email: *' />
            </label>

            <label>
              <textarea className={s.inputsContacto} name='mensaje' placeholder='Mensaje: *' ></textarea>
            </label>

            <button type='submit'>Enviar</button>
          </div>
        </form>
      </div>

      <Footer />
    </div >
  )
}

// export default Contacto