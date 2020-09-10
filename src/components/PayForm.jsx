import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../assets/styles/components/PayForm.scss';
import { setDataForm } from '../redux/actions/reservationsActions';
import Button from './Button';
// import { postReservation } from '../redux/actions/reservationsActions';

const PayForm = (props) => {
  const { reservation, events } = props;
  const { total } = reservation;
  const [value, setValues] = useState({});

  const handleInput = (event) => {
    setValues({
      ...value,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (value.country) {
      props.setDataForm(value);
      alert(`${value.firstName} gracias por tu compra \n Vuelve pronto.`);
      events.isReservation = false;
      props.history.push('/');
    }
  };

  const handleClickCancel = (event) => {
    event.preventDefault();
    alert('Cancelaste tu reserva.Vuelve pronto.');
    events.isReservation = false;
    props.props.history.push('/');
  };
  return (
    <section className='Reservation__PayForm'>
      <span>
        <h5>Confirmar y Pagar</h5>
      </span>
      <form className='Reservation__PayForm--items'>
        <div className='Reservation__PayForm--pay'>
          <label htmlFor='methodPay'>Medio de Pago</label>
          <input id='methodPay' name='methodPay' aria-label='methodPay' type='text' disabled={true} value='Tarjeta Débito' />
        </div>
        <div>
          <label htmlFor='firstName'>Nombre</label>
          <input
            value={value.firstName}
            id='firstName'
            name='firstName'
            aria-label='firstName'
            type='text'
            placeholder='Nombre'
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor='lastName'>Apellido</label>
          <input
            name='lastName'
            value={value.lastName}
            id='lastName'
            aria-label='lastName'
            type='text'
            placeholder='Apellido'
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor='code'>Informacion de facturación</label>
          <input
            name='code'
            value={value.code}
            id='code'
            aria-label='code'
            type='text'
            placeholder='Código Postal'
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor='country'>Pais/Región</label>
          <input name='country' value={value.country} aria-label='country' type='text' placeholder='Colombia' onChange={handleInput} />
        </div>
        <div className='Reservation__PayForm--pay1'>
          <label htmlFor='checkboxPayUnique'>
            <input name='checkboxPayUnique' type='checkbox' disabled={true} checked={true} />
            <strong>Pago único</strong>
          </label>
          <p>${total}</p>
        </div>
        <div className='Reservation__PayForm--pay2'>
          <label htmlFor='checkboxPay'>
            <input name='checkboxPay' type='checkbox' disabled={true} checked={false} />
            <strong>Pago fraccionado</strong>
          </label>
          <p>
            Paga ${total * 0.4} Ahora y el resto(${total * 0.6}) se te cobrará automáticamente a la misma forma de pago el 12 de dic de
            2020, sin tarifas adicionales
          </p>
        </div>
      </form>
      <div className='Reservation__PayForm--button'>
        <Button data='Cancelar' onClick={handleClickCancel} />
        <Button data='Confirmar' onClick={handleClick} />
      </div>
    </section>
  );
};

const mapStateToProps = ({ eventsReducer, reservationsReducer }) => {
  return {
    events: eventsReducer,
    reservation: reservationsReducer,
  };
};
const mapDispatchToProps = {
  setDataForm,
  // postReservation,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PayForm));
