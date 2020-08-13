import React from 'react';

import Header from './Header';
import Footer from './Footer';
import CardBasic from './CardBasic';
import CardOption from './CardOption';

function Layout (props) {
    // const children = props.children;
    // retornar lo mismo que esta interno en el layout
    return (
        // React.Fragment componente especial para regresar mas de un elemento como si fuera 1
        <React.Fragment>
            <Header />
            {props.children}
            <CardBasic eventUrlImage='https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg' eventTitle='El llanerazo' eventDetails='Vive el mayor festival de música llanera' eventLocale='https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b' />
            <CardOption eventDetails='Plan 2 dias. Estadia opcional. wifi. Zona de lavado. Zona de camping. Desayuno y almuerzo' eventLocale='https://www.airbnb.com.co/rooms/20870347?location=granada&previous_page_section_name=1000&federated_search_id=26052e9b-59dc-4591-b857-ff2ea50a585b' eventTitle='El llanerazo' eventDisponibility='Con disponibilidad' pricePeople='100.000'  priceLocation='80.000' eventUrlImage='https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg' />
            <Footer />
        </React.Fragment>
    )
}

export default Layout;
