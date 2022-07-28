import React from "react";
import logo from '../../img/standarLogo.jpg'
import s from '../Admin/Admin.module.css'
import Navbar from '../NavBar/Navbar'


export default function Admin() {

  return (
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis velit esse ad placeat quibusdam voluptatibus totam molestiae iste? Corporis libero facere amet repellat labore ea a ut soluta doloribus rerum?</p>

            <h3>Subir productos:</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio saepe illum, voluptatum qui officia consequuntur eos eaque, doloremque aliquam expedita adipisci provident. Voluptas vel ullam aliquid odit distinctio exercitationem totam.</p>

            <h3>Modificar productos:</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam dolores sed quisquam ratione consequatur, explicabo eos quis mollitia? Ab eaque at sint velit maxime natus exercitationem expedita ad earum laboriosam?</p>

            <h3>Eliminar productos:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam inventore impedit eaque rem doloribus eum ea in quo possimus numquam suscipit, quidem fugiat dicta debitis animi. Tempore, consectetur itaque.</p>
          </div>
        </div>
      </div>
    </div>
  )
}