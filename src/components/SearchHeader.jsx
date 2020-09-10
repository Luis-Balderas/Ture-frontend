import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { filterEventByDates, filterEventByName, filterEventByLocation, getAllEvents } from '../redux/actions/eventsActions';
import searchIcon from '../assets/img/search-icon.svg';

const Search = (props) => {
  const today = '2020-09-09';
  const future = '2020-09-24';
  const [search, setSearch] = useState({
    seeker: '',
    dateToday: '',
    dateEnd: '',
  });

  const getEvents = async () => {
    if (search.seeker.length > 5) {
      await props.filterEventByName(search.seeker);
    } else {
      await props.filterEventByName('Festival');
    }
  };

  useEffect(() => {
    getEvents();

  }, []);

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

const mapStateToProps = ({ eventsReducer }) => eventsReducer;

const mapDispatchToProps = {
  filterEventByDates,
  filterEventByName,
  filterEventByLocation,
  getAllEvents,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
