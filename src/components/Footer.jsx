import React from 'react';
import '../assets/styles/components/Footer.scss';
import Logo from '../assets/img/logo.png';

const Footer = () => (
  <footer className='footer'>
    <ul>
      <li><a>Privacidad</a></li>
      <li><a>Terminos</a></li>
    </ul>
    <p>2020 Ture, inc. Todos los derechos reservados</p>
    <ul>
      <li><a><img src='https://img.icons8.com/windows/32/000000/instagram-new.png'/></a></li>
      <li><a><img src="https://img.icons8.com/ios-glyphs/28/000000/twitter.png"/></a></li>
      <li><a><img src="https://img.icons8.com/android/23/000000/facebook.png"/></a></li>
    </ul>
  </footer>
);

export default Footer;
