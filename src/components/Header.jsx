import React from 'react';
import { Link } from 'react-router-dom'

import '../assets/styles/components/Header.scss';
import Logo from '../assets/img/logo.png';

import Search from './SearchHeader'
import ButtonsHeader from './ButtonsHeader'

class Header extends React.Component {
    render (){
        return (
            <header className="header">
                <Link className="brand" to="/">
                    <img className="brand__logo" src={Logo} alt="Logo"/>
                    <h1>Ture</h1>
                </Link>
                <Search />
                <ButtonsHeader />
            </header>
        );
    }
};

export default Header;