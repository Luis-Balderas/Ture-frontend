import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/CardPayment.scss';

const CardPayment = (props) => {
  const [value, setValue] = useState(1);
  const { events } = props;
  const {
    events: { eventById },
  } = props;

  const getValues = () => {
    if (eventById) {
      const { price } = eventById;
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
  const { newPrice, iva, valueIva, service, total } = getValues();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleClick = (e) => {
    events.isReservation = true;
    props.props.history.push('/reservation');
    // const eventData = {
    //   value,
    //   total,
    // };
    // reservation.setEvents(eventData);
  };

  const formattedDate = (date) => {
    if (date !== undefined) {
      return date.slice(0, 10);
    }
  };
  return (
    <section className='payment'>
      <div className='payment__container'>
        <div className='payment__head'>
          {events.isReservation ? (
            <div className='payment__image'>
              <div className='payment__image--description'>
                <h5>{eventById.name}</h5>
                <div className='description__location'>
                  <figure>
                    <img src='https://icons-for-free.com/iconfiles/png/512/location-131965017472890605.png' alt='icon location' />
                  </figure>
                  <p className='location'>{eventById.location}</p>
                </div>
              </div>
              <figure className='title'>
                <img src={eventById.images[0]} alt={eventById.name} />
              </figure>
            </div>
          ) : (
            <>
              <p>${eventById.price}</p>
              <span>/ persona</span>
            </>
          )}
        </div>
        <div className='payment__card'>
          <div className='payment__card--head'>
            <div className='title'>
              <h5>Inicio del evento</h5>
              <h5>Final del evento</h5>
            </div>
            <div className='txt'>
              <p>{formattedDate(eventById.startDate)}</p>
              <p>{formattedDate(eventById.endDate)}</p>
            </div>
          </div>
          <div className='payment__card--main'>
            <h5>N° de boletas</h5>
            {events.isReservation ? (
              <p>{value}</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  className='input-range'
                  placeholder='1'
                  min='1'
                  max={eventById.ocupation}
                  disabled={events.isReservation}
                  type='number'
                  onChange={(e) => setValue(e.target.value)}
                />
              </form>
            )}
          </div>
        </div>
        <div className='payment__details'>
          <div className='payment__details--price'>
            <p>
              ${eventById.price} x {value || 1} boletas{' '}
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
          {events.isReservation ? (
            <p>Hola</p>
          ) : (
            <div className='payment__details--btn'>
              <button type='submit' onClick={(e) => handleClick(e)}>
                Reservar
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const mapToStateToProps = (state) => {
  return {
    events: state.eventsReducer,
  };
};

const mapDispatchToProps = {};

export default connect(mapToStateToProps, mapDispatchToProps)(CardPayment);
