import React from 'react';
import '../assets/styles/components/BillDetails.scss';

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
      text1: 'Reserve esto ahora por  $253.200',
      text2: 'Pague el resto el 12 de diciembre', 
      text3: 'Cancelación gratuita por 48 horas',
      text4: 'Si cancelas dentro de las 48 horas despues de haber realizado la reservación, puedes obtener un reembolso total'
    };
  
  return (
    <span className='card'>
        <figure><img src={data.eventUrlImage} alt='Imagen de Evento' /></figure>
        <div className='card__details'>
        <span  >
          <h5>{data.eventTitle}</h5>
          <p >{data.eventLocale}</p>
        </span>
        <span>
          <h5 >Numero de boletas: {data.eventBol}</h5>
          <p >{data.eventDate}</p>
        </span>
        <span className="card__details--total">
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
        </span>
        <span>
          <h5 >{data.text1}</h5>
          <p >{data.text2}</p>
          <h5 >{data.text3}</h5>
          <p >{data.text4}</p>
        </span>
        </div>
    </span>
  );
};

export default BillDetails;