import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import '../assets/styles/components/Header.scss';
import ButtonsHeader from './ButtonsHeader';
import Search from './SearchHeader';

const Header = () => (
  <header className='header'>
    <Link className='header__brand' to='/'>
      <img src={Logo} alt='Logo Ture' />
      <p>Ture</p>
    </Link>
    <Search />
    <ButtonsHeader />
  </header>
);

export default Header;
