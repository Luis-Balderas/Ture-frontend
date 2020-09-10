import React from 'react';
import { connect } from 'react-redux';

import CardsList from '../components/CardsList';
import Mapita from '../components/Mapita';

import '../assets/styles/pages/Events.scss';

const Events = (props) => {

  return (
    <section className='EventsContainer'>
      <div className='container'>
        <div className='locationDetails'>
          <small>Más de 300 experiencias increibles | 31 jul - 20 ago | 1 aventurero</small>
          <h3>
            Aventuras en Ewaso <br /> Kendong
          </h3>
        </div>

        <section className='EventsCardsOption'>
          <CardsList />
        </section>
      </div>

      <section className='mapitaContainer'>
        <Mapita />
      </section>
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.eventsReducer;
};
export default connect(mapStateToProps, {})(Events);
