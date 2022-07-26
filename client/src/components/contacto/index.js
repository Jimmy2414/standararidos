
import NavMenu from "../NavMenu/Menu";
import Footer from '../Footer/Footer';
import logo from '../../img/standarLogo.jpg'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import s from '../contacto/Contacto.module.css'
import Swal from 'sweetalert2';

export const Contacto = () => {

  const handleName = (e) => {
    e.preventDefault()

    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const mensaje = e.target.mensaje.value

    if (nombre === "") {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Los campos no pueden estar vacios.',
        showConfirmButton: true,
      });
      return
    }
  }

  const handleEmail = (e) => {
    e.preventDefault()

    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const mensaje = e.target.mensaje.value

    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "") {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Los campos no pueden estar vacios.',
        showConfirmButton: true,
      });
      return
    }
    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'El formato de email es invalido.',
        showConfirmButton: true,
      });
      return
    }
  }

  const handleMessage = (e) => {
    e.preventDefault()

    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const mensaje = e.target.mensaje.value

    if (mensaje === "") {
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
  }

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
      console.log(nombre, email, mensaje)
    }
  }


  const alertSuccess = function (e) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Mensaje enviado!',
      showConfirmButton: true,
    });

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
            <p>Pilcomayo 3764 - Villa Tesei (Hurlingham)</p>
            <p>Provincia de Buenos Aires</p>
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
            {/* <h3>Redes </h3> */}
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


        <form className={s.form} action="https://formsubmit.co/d8500e2d1c09704a9b642a3f9563fb7c" method='POST' onSubmit={alertSuccess} >
          <h2 className={s.formTitle}>
            ¡Contactate con nosotros!
          </h2>

          <p className={s.textRequired}>* Campo requerido</p>
          <div className={s.formInputs}>
            <label htmlFor="nombre">
              <input onClick={handleName} className={s.inputsContacto} type="text" name='nombre' placeholder='Nombre: *' required />
            </label>

            <label htmlFor="email">
              <input className={s.inputsContacto} type="email" name='email' placeholder='Email: *' required />
            </label>

            <label htmlFor="mensaje">
              <textarea onSubmit={handleMessage} className={s.inputTextarea} name='mensaje' placeholder='Mensaje: *' required></textarea>
            </label>


            <button className={s.buttonSend} type="submit" value="send" placeholder="Enviar Mail.">ENVIAR</button>
            {/* onSubmit={handleSubmit} */}
            <input type="hidden" name="_captcha" value="false" />
          </div>
          {/* <button  type="submit">Enviar</button> */}
        </form>

      </div>

      <Footer />
    </div >
  )
}

// export default Contacto