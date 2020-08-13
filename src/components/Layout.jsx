import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  // const children = props.children;
  // retornar lo mismo que esta interno en el layout
  return (
    // React.Fragment componente especial para regresar mas de un elemento como si fuera 1
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
