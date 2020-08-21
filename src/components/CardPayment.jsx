import React, { useState } from 'react';
import '../assets/styles/components/CardPayment.scss';

const CardPayment = () => {
  const [name, setName] = useState('');
  const value = 180000;
  const porcentage = 0.1;
  const tarifa = 26000;

  const handleSubmit = (evt) => {
    console.log('handleSubmit -> evt', evt);
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };

  return (
    <section className='payment'>
      <div className='payment__container'>
        <div className='payment__head'>
          <p>${value}</p>
          <span>/ persona</span>
        </div>
        <div className='payment__card'>
          <div className='payment__card--head'>
            <div className='title'>
              <h5>Inicio del evento</h5>
              <h5>Final del evento</h5>
            </div>
            <div className='txt'>
              <p>31 jul</p>
              <p>31 jul</p>
            </div>
          </div>
          <div className='payment__card--main'>
            <h5>N° de boletas</h5>
            <form onSubmit={handleSubmit}>
              <input className='input-range' placeholder='1' min='1' max='30' type='number' onChange={(e) => setName(e.target.value)} />
            </form>
          </div>
        </div>
        <div className='payment__details'>
          <div className='payment__details--price'>
            <p>
              ${value} x {name || 1} boletas{' '}
            </p>
            <p className='value'>${value * (name || 1)}</p>
          </div>
          <div className='payment__details--price'>
            <p>IVA(10%)</p>
            <p className='value'>${value * (name || 1) * porcentage}</p>
          </div>
          <div className='payment__details--price'>
            <p>Valor con IVA</p>
            <p className='value'>${value * (name || 1) + value * (name || 1) * porcentage}</p>
          </div>
          <div className='payment__details--price'>
            <p>Valor con IVA</p>
            <p className='value'>$26000</p>
          </div>
          <div className='payment__details--price total'>
            <p>Total</p>
            <p className='value'>${value * (name || 1) + value * (name || 1) * porcentage + tarifa}</p>
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
