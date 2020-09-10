import React from 'react';
import { connect } from 'react-redux';

import CardsList from '../components/CardsList';
import Mapita from '../components/Mapita';

import '../assets/styles/pages/Events.scss';

const Events = (props) => {

  console.log(props);

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
      eventTitle: 'La maca',
      eventDisponibility: 'Con disponibilidad',
      pricePeople: '100.000',
      priceLocation: '80.000',
    },
    {
      id: 3,
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventDetails: 'Plan 2 dias. Estadia opcional. wifi. Zona de lavado. Zona de camping. Desayuno y almuerzo',
      eventLocale:
        'https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b',
      eventTitle: 'El perro',
      eventDisponibility: 'Con disponibilidad',
      pricePeople: '100.000',
      priceLocation: '80.000',
    },
    {
      id: 4,
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventDetails: 'Plan 2 dias. Estadia opcional. wifi. Zona de lavado. Zona de camping. Desayuno y almuerzo',
      eventLocale:
        'https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b',
      eventTitle: 'El erizo',
      eventDisponibility: 'Con disponibilidad',
      pricePeople: '100.000',
      priceLocation: '80.000',
    },
    {
      id: 5,
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventDetails: 'Plan 2 dias. Estadia opcional. wifi. Zona de lavado. Zona de camping. Desayuno y almuerzo',
      eventLocale:
        'https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b',
      eventTitle: 'El llanerazo monstruo',
      eventDisponibility: 'Con disponibilidad',
      pricePeople: '100.000',
      priceLocation: '80.000',
    },
  ];

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
          <CardsList data={data} />
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
