import React from 'react';

import searchIcon from '../assets/img/search-icon.jpg';

class Search extends React.Component {
    render (){
        return (
            <section className="search">
                <div  className="search__input">
                    <img  src={searchIcon} alt="Search"/>
                    <input type="text" className="search__input--form" placeholder="Buscar..."/>
                </div>

                <div className="search__date">
                    31 Jul - 20 Ago
                </div>

                <div className="search__category">
                    1 Aventurero
                </div>
            </section>
        );
    }
};

export default Search;

