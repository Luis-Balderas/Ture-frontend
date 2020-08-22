import React from 'react';

import searchIcon from '../assets/img/search-icon.jpg';

class Search extends React.Component {
    render (){
        return (
            <section className="search">
                <div  className="search__input">
                    <img  src={searchIcon} alt="Search"/>
                    <input type="search" name="" id="" className="search__input--form" placeholder="Buscar..."/>
                </div>

                <div className="search__date">
                    <input type="date" name="" id=""/>
                </div>

                <div className="search__category">
                    <input type="search" name="" id="" placeholder="Categoria"/>
                </div>
            </section>
        );
    }
};

export default Search;

