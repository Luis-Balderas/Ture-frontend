import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Modal from './Modal.jsx'

import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/img/googleIcon.svg';
import facebookIcon from '../assets/img/facebookIcon.svg';

import { getUser } from '../redux/actions/usersActions';

const LogIn = (props) => {

  const [modalIsClose, setModalIsClose] = useState(false);
  const [form, setValues] = useState();

  const { dataUser } = props;

  const handleInput = event => {
    setValues({ ...form, [event.target.name]: event.target.value })
  }

  const handleClick = () => {
    event.preventDefault();
    props.getUser(form);
    // props.history.push('/');
  }

  const handleCloseModal = e => {
    setModalIsClose(true)
  }

  console.log(dataUser)

  return <Modal isOpen={props.isOpen} isClose={modalIsClose}>
    <div className="login">
      <button onClick={handleCloseModal}><strong>X</strong></button>
      <div className="login__form">
        <form>
          <input
            aria-label="email"
            type="email"
            name="email"
            id=""
            placeholder="Email"
            onChange={handleInput} />
          <input
            aria-label="password"
            type="password"
            name="password"
            id=""
            placeholder="Contraseña"
            onChange={handleInput} />
        </form>
      </div>

      <div className="login__button">
        <button onClick={handleClick}>
          Iniciar Sesión
          </button>
      </div>

      <div className="login__remember">
        <div className="container-Recuerdame">
          <input type="checkbox" name="" id="" disabled={true} />
          <label>Recuérdame</label>
        </div>
        <div className="container-Registro">
          <a href="">Olvidé mi contraseña</a>
        </div>
      </div>

      {/* <div className="login__social">
          <div className="login__social--item">
            <figure><img src={googleIcon} alt=""/></figure>
            <p>Iniciar sesión con Gmail</p>
          </div>
          <div className="login__social--item">
            <figure><img src={facebookIcon} alt="" /></figure>
            <p>Iniciar sesión con Facebook</p>
          </div>
        </div> */}

      <div className="login__signup">
        <p>¿No tienes cuenta?</p>
        <a href="">Registrarse</a>
      </div>
    </div>
  </Modal>
};

const mapToStateToProps = ({ usersReducer }) => usersReducer;
const mapDispatchToProps = {
  getUser,
};
export default connect(mapToStateToProps, mapDispatchToProps)(LogIn);