import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import '../assets/styles/components/Header.scss';
import Button from './Button';
import Search from './SearchHeader';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Header = () => {

  const [modalLoginIsOpen, setModalIsOpen] = useState(false);
  const [modalSignUpIsOpen , setModalSignUpIsOpen ] = useState(false);

  const handleOpenLoginModal = e => {
    setModalSignUpIsOpen(false);
    setModalIsOpen(true)
    // console.log(modalIsOpen)
  }

  const handleOpenSignModal = e => {
    setModalIsOpen(false);
    setModalSignUpIsOpen(true)
    // console.log(modalIsOpen)
  }

  return (
    <header className='header fadeInDown'>
      <Link className='header__brand' to='/'>
        <img src={Logo} alt='Logo Ture' />
        <p>Ture</p>
      </Link>
      <Search />
      <div className="header__button" >
        <button
          onClick={handleOpenLoginModal}>
          Iniciar Sesión
        </button>
        <LogIn
          isOpen={modalLoginIsOpen}
        />
        <button
          onClick={handleOpenSignModal}>
          Registrarse
        </button>
        <SignUp
            isOpen={modalSignUpIsOpen}
        />
      </div>
    </header>
  );
}

export default Header;