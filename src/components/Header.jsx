import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import '../assets/styles/components/Header.scss';
import Button from './Button';
import Search from './SearchHeader';
import LogIn from './LogIn';

const Header = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = e => {
    setModalIsOpen(true)
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
          onClick={handleOpenModal}>
          Iniciar Sesión
        </button>
        <LogIn
          isOpen={modalIsOpen}
        />
        <Button data="Registrarse" />
      </div>
    </header>
  );
}

export default Header;