import React from 'react';

import searchIcon from '../assets/img/search-icon.svg';

const Search = () => {

  return (
    <section className="header__search">
      <div  className="header__search--input">
          <form><input type="search" name="" id="" placeholder="Buscar evento"/></form>
      </div>
      <div className="header__search--date">
          <form><input type="date" name="" id="headerDate" /></form>
      </div>
      <img  src={searchIcon} alt="Search Event"/>
    </section>
  );
};

export default Search;

