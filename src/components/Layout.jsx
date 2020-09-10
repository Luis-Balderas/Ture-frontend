import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
