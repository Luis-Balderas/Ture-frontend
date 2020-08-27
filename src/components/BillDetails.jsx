import React from 'react';
import '../assets/styles/components/BillDetails.scss';
import localeIcon from '../assets/img/locale.svg'

const BillDetails = () => {
   const data = 
    {
      eventUrlImage: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
      eventTitle: 'El llanerazo',
      eventLocale: 'Ewaso',
      eventBol: '2',
      eventDate: '31 jul -20 ago',
      eventTotalNeto: '$180.000',
      eventIva: '$36.000',
      eventWithIva: '396.000',
      eventTarifa: '$26.000',
      enventTotal: '$422.000',
      valuetext1: '$253.200',
      text2: 'Pague el resto el 12 de diciembre', 
      text3: 'Cancelación gratuita por 48 horas',
      text4: 'Si cancelas dentro de las 48 horas despues de haber realizado la reservación, puedes obtener un reembolso total'
    };
  
  return (
    <section className='Reservation__card'>
        <figure><img src={data.eventUrlImage} alt='Imagen de Evento' /></figure>
        <div className='Reservation__card--details'>
        <div  >
          <h5>{data.eventTitle}</h5>
          {/* <figure><img src={localeIcon} alt='Imagen de Evento' /></figure> */}
          <p >{data.eventLocale}</p>
        </div>
        <div>
          <h5 >Numero de boletas: {data.eventBol}</h5>
          <p >{data.eventDate}</p>
        </div>
        <div className="Reservation__card--total">
          <p> $ 180.000 x 2 Boletas</p>
          <p >{data.eventTotalNeto}</p>
          <p> IVA (10%)</p>
          <p >{data.eventIva}</p>
          <p>Valor con Iva</p>
          <p >{data.eventWithIva}</p>
          <p> Tarifa del servicio </p>
          <p >{data.eventTarifa}</p>
          <h5>Total</h5>
          <h5>{data.enventTotal}</h5>
        </div>
        <div>
          <h5 >Reserve esto ahora por {data.valuetext1}</h5>
          <p >{data.text2}</p>
          <h5 >{data.text3}</h5>
          <p >{data.text4}</p>
        </div>
        </div>
    </section>
  );
};

export default BillDetails;