import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <ul>
      <li>
        <a href='https://localhost:8000'>Privacidad</a>
      </li>
      <li>
        <a href='https://localhost:8000'>Terminos</a>
      </li>
    </ul>

    <p>2020 Ture, inc. Todos los derechos reservados</p>

    <ul>
      <li>
        <a href='https://localhost:8000'>
          <img src='https://img.icons8.com/windows/32/000000/instagram-new.png' alt='icon facebook' />
        </a>
      </li>
      <li>
        <a href='https://localhost:8000'>
          <img src='https://img.icons8.com/ios-glyphs/28/000000/twitter.png' alt='icon twitter' />
        </a>
      </li>
      <li>
        <a href='https://localhost:8000'>
          <img src='https://img.icons8.com/android/23/000000/facebook.png' alt='icon facebook' />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
