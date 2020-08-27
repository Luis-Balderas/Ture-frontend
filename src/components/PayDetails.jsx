import React from 'react';
import '../assets/styles/components/PayDetails.scss';

// import PayDetailsItem from './PayDetailsItem';

const PayDetails = () => {

  return (
    <section className='Reservation__PayDetails'>
        <span><h5><strong>Confirmar y Pagar</strong></h5></span>
        <div className='Reservation__PayDetails--items'>
        <div className='Reservation__PayDetails--pay'>
           <p>Medio de Pago</p>
           <form><input type="text" placeholder="Tarjeta Débito"></input></form>
        </div>
        <div>
          <p>Nombre</p>
          <form><input type="text" placeholder="Nombre"></input></form>
        </div>
        <div>
          <p>Apellido</p>
          <form><input type="text" placeholder="Apellido"></input></form>
        </div>
        <div>
          <p>Informacion de facturación</p>
          <form><input type="text" placeholder="Código Postal"></input></form>
        </div>
        <div>
          <p>Pais/Región</p>
          <form><input type="text" placeholder="Colombia"></input></form>
        </div>
        <div  className='Reservation__PayDetails--pay1'>
          <label><input name="isGoing" type="checkbox"  disabled={true} checked={true}/><strong>Pago único</strong></label>
          <p>$442.000</p>
        </div>
        <div  className='Reservation__PayDetails--pay2'>
         <label><input name="isGoing" type="checkbox"  disabled={true} checked={false} /><strong>Pago fraccionado</strong></label>
          <p>Paga $253,200 Ahora y el resto($168,800) se te cobrará automáticamente a la misma forma de pago el 12 de dic de 2020, sin tarifas adicionales</p>
        </div>
        <div className="Reservation__PayDetails--button">
          <button type='button'>
            <p>Cancelar</p>
          </button>
          <button type='button'>
            <p>Confirmar</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PayDetails;
