import React, { useState } from 'react';
import '../assets/styles/components/CardPayment.scss';

const CardPayment = () => {
  const [name, setName] = useState('');
  console.log('CardPayment -> name', name);

  const handleSubmit = (evt) => {
    console.log('handleSubmit -> evt', evt);
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };

  return (
    <section className='payment'>
      <div className='payment__container'>
        <div className='payment__head'>
          <p>$180000</p>
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
          <div className='payment__details__price'>
            <p>$180000 x {name || 1} boletas </p>
            <p>${180000 * (name || 1)}</p>
          </div>
          <div className='payment__details__price'>
            <p>$180000 x {name || 1} boletas </p>
            <p>${180000 * (name || 1)}</p>
          </div>
          <div className='payment__details__price'>
            <p>$180000 x {name || 1} boletas </p>
            <p>${180000 * (name || 1)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPayment;
