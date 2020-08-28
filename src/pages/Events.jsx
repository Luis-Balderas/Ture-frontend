import React from 'react';
import '../assets/styles/pages/Events.scss';
import { Link } from 'react-router-dom';
import CardOption from '../components/CardOption';
import Mapita from '../components/Mapita';

const Events = () => {
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
    {
      id: 3,
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventDetails: 'Plan 2 dias. Estadia opcional. wifi. Zona de lavado. Zona de camping. Desayuno y almuerzo',
      eventLocale:
        'https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b',
      eventTitle: 'El llanerazo',
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
      eventTitle: 'El llanerazo',
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
      eventTitle: 'El llanerazo',
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
          {data.map((item) => {
            return (
              <Link className='text-reset text-decoration-none' to={`/event/${item.id}`}>
                <CardOption key={item.id} item={item} />
              </Link>
            );
          })}
        </section>
      </div>

      <section className='mapitaContainer'>
        <Mapita />
      </section>
    </section>
  );
};

export default Events;
