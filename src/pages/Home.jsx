import React from 'react';
import '../assets/styles/pages/Home.scss';
import CardBasic from '../components/CardBasic';
import CardOption from '../components/CardOption';

const Home = () => {
  const data = [
    {
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
    <div className='Home'>
      <CardBasic data={data[0]} />
      <div className='cards'>
        {data.map((item) => (
          <CardOption item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
