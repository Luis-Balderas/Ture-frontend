import React from 'react';
import '../assets/styles/components/PayForm.scss';

const PayForm = () => {

  return (
    <section className='Reservation__PayForm'>
      <span><h5>Confirmar y Pagar</h5></span>
      <form  action="" className='Reservation__PayForm--items'>
        <div className='Reservation__PayForm--pay'>
          <p>Medio de Pago</p>
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
          <p>Nombre</p>
          <input
            // value={userById.name}
            name="firsName"
            aria-label="firsName"
            type="text" 
            placeholder="Nombre">
          </input>
        </div>
        <div>
          <p>Apellido</p>
          <input 
            name="LastName"
            aria-label="LastName"
            type="text" 
            placeholder="Apellido">
          </input>
        </div>
        <div>
          <p>Informacion de facturación</p>
          <input 
            name="Postal Code"
            aria-label="Postal Code"
            type="text" 
            placeholder="Código Postal">
          </input>
        </div>
        <div>
          <p>Pais/Región</p>
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
          <p>$442.000</p>
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
        {/* <Button data="Confirmar" onClick={handleClick} /> */}
        <button type='button'>
          <p>Cancelar</p>
        </button >
        <button type='button'>
          <p>Confirmar</p>
        </button >
      </div>
    </section>
  );
};

export default PayForm;
