import React from 'react';
import { Link } from 'react-router-dom';

const ButtonsHeader = () => (
  <div className='btnContainer'>
    <div>

      <Link to="/Sing">
      <button
        type='button'
        className='btnContainer-btn'
        // onClick={props.onOpenModal}
      >
        <p>Iniciar Sesión</p>

      </button>
      </Link>
      {/* <LoginModal
                    isOpen={props.modalIsOpen}
                    onClose={props.onCloseModal}
                    onLogin={props.onLogin}
                /> */}
    </div>
    <div>
    <Link to="/Login">
      <button
        type='button'
        // onClick={props.onOpenModal}
        className='btnContainer-btn'
      >
        Registrarse
      </button>
      </Link>
      {/* <RegisterModal
                    isOpen={props.modalIsOpen}
                    onClose={props.onCloseModal}
                    onRegister={props.onRegister}
                /> */}
    </div>
  </div>
);

export default ButtonsHeader;
