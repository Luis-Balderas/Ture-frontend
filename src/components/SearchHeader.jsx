import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import searchIcon from '../assets/img/search-icon.svg';

const Search = (props) => {
  const today = '2020-09-09';
  const future = '2020-09-24';
  const [search, setSearch] = useState({
    seeker: '',
    dateToday: '',
    dateEnd: '',
  });

  const handleClick = () => {

    props.history.push('/events');

  };

  return (
    <form
      className='header__search'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >

      <input
        className='header__search--input'
        type='search'
        onChange={(e) => {
          setSearch({
            ...search,
            [e.target.name]: e.target.value,
          });
        }}
        name='seeker'
        id=''
        placeholder='Buscar evento'
        value={search.seeker}
      />

      <input
        className='header__search--date'
        type='date'
        name='dateToday'
        id='headerDate'
        onChange={(e) => {
          setSearch({
            ...search,
            [e.target.name]: e.target.value,
          });
        }}
        defaultValue={today}
        min={today}
      />

      <input
        className='header__search--dateEnd'
        type='date'
        name='dateEnd'
        onChange={(e) => {
          setSearch({
            ...search,
            [e.target.name]: e.target.value,
          });
        }}
        id='headerDate'
        defaultValue={future}
      />

      <button
        className='header__search--button'
        type='submit'
        onClick={handleClick}
      >
        <img src={searchIcon} alt='Search Event' />
      </button>

    </form>
  );
};

export default withRouter(Search);