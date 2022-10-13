import React from 'react'
import Swal from 'sweetalert2';
import { useNavigate, Navigate } from 'react-router-dom';

import logo from '../../img/standarLogo.jpg'

import s from '../LoginAdmin/LoginAdmin.module.css'

const LoginAdmin = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === '' || password === '') {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Los campos no pueden estar vacios',
        showConfirmButton: true,
        timer: 1500,
      });
      return;
    }
    if (email !== 'standar@standararidos.com' || password !== 'standar123') {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Usuario o contraseña incorrectos',
        showConfirmButton: true,
        timer: 1500,
      });
      return;
    }
    else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Iniciando sesion',
        showConfirmButton: false,
        timer: 1500,
      });
      const tokenData = email
      localStorage.setItem('token', tokenData)
      navigate('/admin')
    }
  }

  const home = (e) => {
    navigate('/')
  }

  return (
    <div className={s.contenedorGeneral}>
      <div className={s.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={s.botonHomeClientes}>
        <button onClick={home}>
          Ir a Home de clientes
        </button>
      </div>

      <div className={s.title}>
        <p>Inicia Sesion</p>
      </div>

      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          <h2 className={s.labelEmail}>Email</h2>
          <input className={s.inputEmail} type="email" name='email' />
        </label>

        <label>
          <h2 className={s.labelPass}>Contraseña</h2>
          <input className={s.inputPass} type="password" name='password' />
        </label>

        <button type='submit'>Ingresar</button>
      </form>
    </div>
  )
}

export default LoginAdmin