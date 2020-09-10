import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/pages/Home.scss';
import CardBasic from '../components/CardBasic';
import { getAllEvents } from '../redux/actions/eventsActions';

const Home = (props) => {
  const { dataEvents } = props;
  const getEvents = async () => {
    await props.getAllEvents();
  };

  useEffect(() => {
    getEvents();
  }, [dataEvents.lenght]);
  if (!dataEvents) {
    return '';
  }
  console.log('Home -> props', props);
  return (
    <div className='Home'>
      <section className='mainTitle'>
        <h1>Estas son algunas de nuestras próximas experiencias</h1>
      </section>
      <section>
        <div className='nextEvents'>
          {dataEvents.map((event,index) =>{
            if(index>=3){
              return false
            }
            return (
              <div>
                <div>
                  <CardBasic data={event} key={`${event._id}cc`} />
                  {console.log(`${event._id}cc`)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className='Categories'>
        <div className='mainCategory'>
            <h4>Tenemos un gran catalogo de numerosas aventuras para que vivas al maximo cada segundo de tu vida, prueba con las mejor calificadas.</h4>
            <div className='mainCategory-card'>
            {dataEvents.map((event,index) => {
              if(index===5){
                return(
                  <CardBasic data={event} key={event._id} />
                )
              }else{
                return false
              }
            })}
            </div>
        </div>
        <div className='otherCategories'>
          <div>
            {dataEvents.map((event, index) => {
              if (index === 0) {
                return <CardBasic data={event} key={event._id + 3} />;
              }
              {
                console.log(event._id + 3);
              }
            })}
          </div>
          <div>
            {dataEvents.map((event, index) => {
              if (index === 1) {
                return <CardBasic data={event} key={event._id + 4} />;
              }
              {
                console.log(event._id + 4);
              }
            })}
          </div>
          <div>
            {dataEvents.map((event, index) => {
              if (index === 2) {
                return <CardBasic data={event} key={event._id + 5} />;
              }
            })}
          </div>
          <div>
            {dataEvents.map((event, index) => {
              if (index === 3) {
                return <CardBasic data={event} key={event._id + 6} />;
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({ eventsReducer }) => eventsReducer;

const mapDispatchToProps = {
  getAllEvents,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
