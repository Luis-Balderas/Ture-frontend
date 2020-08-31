import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import '../assets/styles/components/Header.scss';
import Button from './Button';
import Search from './SearchHeader';

const Header = () => (
  <header className='header'>
    <Link className='header__brand' to='/'>
      <img src={Logo} alt='Logo Ture' />
      <p>Ture</p>
    </Link>
    <Search />
    <div className="header__button">
      <Button data="Iniciar Sesión" />
      <Button data="Registrarse" />
    </div>
  </header>
);

export default Header;
