import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/pages/Home.scss';
import CardBasic from '../components/CardBasic';
import CardOption from '../components/CardOption';
import { getAllEvents } from '../redux/actions/eventsActions';

const Home = (props) => {
  const { dataEvents } = props;
  const data = [
    {
      id: 1,
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventTitle: 'El llanerazo',
      eventDetails: 'Vive el mayor festival de música llanera',
      eventLocale:
        'https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b',
      eventDisponibility: 'Sin disponibilidad',
      pricePeople: '200.000',
      priceLocation: null,
    },
    {
      id: 2,
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventDetails: 'Plan 2 dias. Estadia opcional. wifi. Zona de lavado. Zona de camping. Desayuno y almuerzo',
      eventLocale:
        'https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b',
      eventTitle: 'El llanerazo',
      eventDisponibility: 'Con disponibilidad',
      pricePeople: '100.000',
      priceLocation: '80.000',
    },
  ];

  const getEvents = async () => {
    await props.getAllEvents();
  };

  useEffect(() => {
    getEvents();
  }, [dataEvents.lenght]);
  if (!dataEvents) {
    return '';
  }
  return (
    <div className='Home'>
      <div className='cards'>
        {dataEvents.map((event) => (
          <CardBasic data={event} key={event._id} />
        ))}
      </div>

      <div className='cards'>
        {data.map((item) => (
          <CardOption item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ eventsReducer }) => eventsReducer;

const mapDispatchToProps = {
  getAllEvents,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
