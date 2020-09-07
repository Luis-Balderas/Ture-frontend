import React from 'react';

import searchIcon from '../assets/img/search-icon.jpg';


const Search = () => {
  const events = [
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
      dateEvent: '2020-08-30'
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
      dateEvent: '2020-08-31'
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
      dateEvent: '2020-09-01'
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
      dateEvent: '2020-09-02'
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
      dateEvent: '2020-08-31'
    },
  ];

  const [query, setQuery] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState(events);


  const results = events.filter(event => {
    return event.eventTitle.toLowerCase().includes(query.toLowerCase());
  });
  console.log(results);

  return (
    <form className="search">
      <div className="search__input">
        <img src={searchIcon} alt="Search" />
        <input type="search"
          name="title"
          id=""
          className="search__input--form"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <div className="search__date">
        <input
          type="date"
          name="date"
          id=""
        />
      </div>

      <div className="search__category">
        <input type="search"
          name="category"
          id=""
          placeholder="Categoria"
        />
      </div>
    </form>
  );
}


export default Search;

