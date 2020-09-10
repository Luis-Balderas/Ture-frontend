import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../assets/styles/components/CardPayment.scss';
import { setDataEvent } from '../redux/actions/reservationsActions';
import Button from './Button';
import Price from './Price';

const CardPayment = (props) => {
  const [value, setValue] = useState(1);
  const { events, reservation } = props;
  const {
    events: { eventById },
  } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleClick = (e) => {
    const eventData = {
      event: { ...eventById },
      value,
    };
    props.setDataEvent(eventData);
    events.isReservation = true;
    props.history.push('/reservation');
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
              <p>{reservation.event.value}</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  className='input-range'
                  placeholder='1'
                  min='1'
                  max={eventById.ocupation}
                  disabled={events.isReservation}
                  type='number'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </form>
            )}
          </div>
        </div>
        <div className='payment__details'>
          <Price price={eventById.price} value={events.isReservation ? reservation.event.value : value} events={events} />
          {events.isReservation ? (
            <div className='isReservation'>
              <div className='item'>
                <p className='bold'>Reserve esto ahora por ${reservation.event.value * eventById.price * 0.4}</p>
                <p>Page el resto el 12 de diciembre</p>
              </div>
              <div className='item'>
                <p className='bold'>Cancelación gratuita por 48 horas </p>
                <p>Si cancelas dentro de las 48 horas después de haber realizado la reservación, puedes obterner un reembolso total.</p>
              </div>
            </div>
          ) : (
            <div className='payment__details--btn'>
              <Button data='Reservar' type='submit' onClick={(e) => handleClick(e)} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.eventsReducer,
    reservation: state.reservationsReducer,
  };
};

const mapDispatchToProps = {
  setDataEvent,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardPayment));
