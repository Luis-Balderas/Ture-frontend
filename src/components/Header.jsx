import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import '../assets/styles/components/Header.scss';
import ButtonsHeader from './ButtonsHeader';
import Search from './SearchHeader';

const Header = () => (
  <header className='header'>
    <Link className='brand text-reset text-decoration-none' to='/'>
      <img className='brand__logo' src={Logo} alt='Logo' />
      <h1>Ture</h1>
    </Link>
    <Search />
    <ButtonsHeader />
  </header>
);

export default Header;
