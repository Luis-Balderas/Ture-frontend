import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Modal from './Modal.jsx'

import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/img/googleicon.svg';
import facebookIcon from '../assets/img/facebookicon.svg';

const SignUp = (props) => {

  const [modalIsClose, setModalIsClose] = useState(false);

  const handleCloseModal = e => {
    setModalIsClose(true)
    // console.log(modalIsOpen)
  }

  return <Modal isOpen={props.isOpen} isClose={modalIsClose}>
    <div className="login">
        <button onClick={handleCloseModal}><strong>X</strong></button>
        <div className="login__form">
          <form>
            <input type="text" name="" id="" placeholder="Nombre" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Contraseña" />
          </form>
        </div>

        <div className="login__button">
          <button>
            Registrarse
          </button>
        </div>

        <div className="login__remember">
          <div className="container-Recuerdame">
            <input type="checkbox" name="" id="" />
            <label>Recuérdame</label>
          </div>
          <div className="container-Registro">
            <a href="">Olvidé mi contraseña</a>
          </div>
        </div>

        {/* <div className="login__social">
          <div className="login__social--item">
            <figure><img src={googleIcon} alt="" /></figure>
            <p>Iniciar sesión con Gmail</p>
          </div>
          <div className="login__social--item">
            <figure><img src={facebookIcon} alt="" /></figure>
            <p>Iniciar sesión con Facebook</p>
          </div>
        </div> */}

        <div className="login__signup">
          <p>¿Ya Estas Registrado?</p>
          <a href="">Iniciar Sesión</a>
        </div>
    </div>
  </Modal>
};

export default SignUp;