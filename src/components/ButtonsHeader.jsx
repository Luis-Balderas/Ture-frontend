import React from 'react';
import { Link } from 'react-router-dom';

const ButtonsHeader = () => (
  <div className='header__button'>
    <div>
      <Link to="/Sing">
      <button
        type='button'
        className='header__button--btn'>
      Iniciar Sesión
      </button>
      </Link>
    </div>
    <div>
    <Link to="/Login">
      <button
        type='button'
        className='header__button--btn'>
        Registrarse
      </button>
      </Link>
    </div>
  </div>
);

export default ButtonsHeader;
