import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setDataTotal } from '../redux/actions/reservationsActions';

const Price = (props) => {
  const { price, value } = props;
  const getValues = (price) => {
    if (price) {
      const percentage = 0.1;
      const service = 26000;
      let newPrice = 0;
      if (value > 0) {
        newPrice = price * value;
      } else {
        newPrice = price * 1;
      }

      const iva = newPrice * percentage;
      const valueIva = newPrice + iva;
      const total = newPrice + iva + service;

      return { newPrice, iva, valueIva, service, total };
    }
  };
  const { newPrice, iva, valueIva, service, total } = getValues(price);

  useEffect(() => {
    props.setDataTotal(total);
  }, [total]);

  return (
    <>
      <div className='payment__details--price'>
        <p>
          ${price} x {value || 1} boletas{' '}
        </p>
        <p className='value'>${newPrice}</p>
      </div>
      <div className='payment__details--price'>
        <p>IVA(10%)</p>
        <p className='value'>${iva}</p>
      </div>
      <div className='payment__details--price'>
        <p>Valor con IVA</p>
        <p className='value'>${valueIva}</p>
      </div>
      <div className='payment__details--price'>
        <p>Tarifa del servicio</p>
        <p className='value'>${service}</p>
      </div>
      <div className='payment__details--price total'>
        <p>Total</p>
        <p className='value'>${total}</p>
      </div>
    </>
  );
};

const mapStateToProps = ({ eventsReducer, reservationsReducer }) => {
  return {
    events: eventsReducer,
    reservation: reservationsReducer,
  };
};

const mapDispachToProps = {
  setDataTotal,
};

export default connect(mapStateToProps, mapDispachToProps)(Price);
