import React, { useState } from 'react';
import '../assets/styles/components/CardPayment.scss';

const CardPayment = ({ data }) => {
  const [name, setName] = useState('');
  const { price } = data;

  const getValues = (price) => {
    const percentage = 0.1;
    const service = 26000;
    let newPrice = 0;
    if (name > 0) {
      newPrice = price * name;
    } else {
      newPrice = price * 1;
    }

    const iva = newPrice * percentage;
    const valueIva = newPrice + iva;
    const total = newPrice + iva + service;

    return { newPrice, iva, valueIva, service, total };
  };
  const { newPrice, iva, valueIva, service, total } = getValues(price);

  const handleSubmit = (evt) => {
    console.log('handleSubmit -> evt', evt);
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };

  const formattedDate = (date) => {
    return date.slice(0, 10);
  };

  return (
    <section className='payment'>
      <div className='payment__container'>
        <div className='payment__head'>
          <p>${price}</p>
          <span>/ persona</span>
        </div>
        <div className='payment__card'>
          <div className='payment__card--head'>
            <div className='title'>
              <h5>Inicio del evento</h5>
              <h5>Final del evento</h5>
            </div>
            <div className='txt'>
              <p>{formattedDate(data.startDate)}</p>
              <p>{formattedDate(data.endDate)}</p>
            </div>
          </div>
          <div className='payment__card--main'>
            <h5>N° de boletas</h5>
            <form onSubmit={handleSubmit}>
              <input
                className='input-range'
                placeholder='1'
                min='1'
                max={data.ocupation}
                type='number'
                onChange={(e) => setName(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className='payment__details'>
          <div className='payment__details--price'>
            <p>
              ${price} x {name || 1} boletas{' '}
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
          <div className='payment__details--btn'>
            <button type='submit'>Reservar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPayment;
