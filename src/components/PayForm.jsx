import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux';
import '../assets/styles/components/PayForm.scss';
import Button from './Button';
import { setDataForm } from '../redux/actions/reservationsActions';
// import { postReservation } from '../redux/actions/reservationsActions';

const PayForm = (props) => {

  const { dataEvent, total , dataform } = props;
  const [form, setValues] = useState();

  const handleInput = event => {
    setValues({...form,[event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value })
  }

  const reservation = async () => {
    await props.postReservation(dataEvent,total,dataform);
  };
 
  const handleClick = async event => {
    event.preventDefault();
    props.setDataForm(form);
    // reservation();
    // props.history.push('/');
    console.log(dataform)
  }

  return (
    <section className='Reservation__PayForm'>
      <span><h5>Confirmar y Pagar</h5></span>
      <form  action="" className='Reservation__PayForm--items'>
        <div className='Reservation__PayForm--pay'>
          <label>Medio de Pago</label>
          <input
            name="methodPay"
            aria-label="methodPay"
            type="text"
            // placeholder="Tarjeta Débito"
            disabled={true}
            value="Tarjeta Débito">
          </input>
        </div>
        <div>
          <label>Nombre</label>
          <input
            // value={userById.name}
            name="firsName"
            aria-label="firsName"
            type="text" 
            placeholder="Nombre">
          </input>
        </div>
        <div>
          <label>Apellido</label>
          <input 
            name="LastName"
            aria-label="LastName"
            type="text" 
            placeholder="Apellido">
          </input>
        </div>
        <div>
          <label>Informacion de facturación</label>
          <input 
            name="Postal Code"
            aria-label="Postal Code"
            type="text" 
            placeholder="Código Postal">
          </input>
        </div>
        <div>
          <label>Pais/Región</label>
          <input 
            name="country"
            aria-label="country"
            type="text" 
            placeholder="Colombia">
          </input>
        </div>
        <div  className='Reservation__PayForm--pay1'>
          <label>
            <input
              name="checkboxPayUnique"
              type="checkbox"
              disabled={true}
              checked={true}>
            </input>
            <strong>Pago único</strong>
          </label>
          <label>${total}</label>
        </div>
        <div  className='Reservation__PayForm--pay2'>
          <label>
            <input
              name="checkboxPay"
              type="checkbox"
              disabled={true}
              checked={false}>
            </input>
            <strong>Pago fraccionado</strong>
          </label>
          <p>Paga $253,200 Ahora y el resto($168,800) se te cobrará automáticamente a la misma forma de pago el 12 de dic de 2020, sin tarifas adicionales</p>
        </div>
      </form>
      <div className="Reservation__PayForm--button">
        <Button data="Cancelar" onClick={(event) => handleClickCancel(event)}/>
        <Button data="Confirmar" onClick={(event) => handleClick(event)}/>
      </div>
    </section>
  );
};

const mapToStateToProps = ({ reservationsReducer }) => reservationsReducer;
const mapDispatchToProps = {
    setDataForm,
    // postReservation,
};
export default connect(mapToStateToProps, mapDispatchToProps)(PayForm);