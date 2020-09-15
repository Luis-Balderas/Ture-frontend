import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/pages/Home.scss';
import CardBasic from '../components/CardBasic';
import { getAllEvents, getEventsRecents } from '../redux/actions/eventsActions';

const Home = (props) => {
  const { dataEvents, eventsRecents } = props;

  const getEvents = async () => {
    await props.getAllEvents();
    await props.getEventsRecents();
  };

  useEffect(() => {
    getEvents();
  }, [dataEvents.lenght]);
  if (!dataEvents || !eventsRecents) {
    return '';
  }
  return (
    <div className='Home'>
      <section className='mainTitle'>
        <h1>Estas son algunas de nuestras experiencias</h1>
      </section>
      <section>
        <div className='nextEvents'>
          {dataEvents.map((event, index) => (
            <>{index >= 3 ? null : <CardBasic data={event} key={event.id} />}</>
          ))}
        </div>
      </section>

      <section className='Categories'>
        <div className='mainCategory'>
          <h4>
            Tenemos un gran catalogo de numerosas aventuras para que vivas al maximo cada segundo de tu vida, prueba con las mejor
            calificadas.
          </h4>
          <div className='mainCategory-card'>
            <CardBasic data={eventsRecents[0]} key={eventsRecents[0]._id} />;
          </div>
        </div>
        <div className='otherCategories'>
          {eventsRecents.map((event, index) => (
            <CardBasic data={event} key={event._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({ eventsReducer }) => eventsReducer;

const mapDispatchToProps = {
  getAllEvents,
  getEventsRecents,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
