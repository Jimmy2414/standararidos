import React from "react";
import '../components/styles.css'
import logo from '../img/standarLogo.jpg'


export default function HeaderComponent() {
  return (
    <header className="main-header">
      <figure className="logo-container">
        <img src={logo}></img>
      </figure>

      <nav >
        <ul className="main-navigation">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}