import React from 'react';

import Header from './Header.jsx'

function Layout (props) {
    
    // const children = props.children;
    // retornar lo mismo que esta interno en el layout
    return (
        // React.Fragment componente especial para regresar mas de un elemento como si fuera 1
        <React.Fragment>
            <Header />
            {props.children}
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Layout;