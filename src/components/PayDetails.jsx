import React from 'react';
import '../assets/styles/components/PayDetails.scss';

import PayDetailsItem from './PayDetailsItem';

const PayDetails = () => {
   const data = [
    {
      label1: 'Medio de Pago',
      label2: 'Nombre',
      label3: 'Apellido',
      label4: 'Informacion de facturación',
      label5: 'Pais/Región',
      label6: 'Pago único',
      label7: 'Pago fraccionado',
      text7: 'Paga $253,200 Ahora y el resto($168,800) se te cobrará automáticamente a la misma forma de pago el 12 de dic de 2020, sin tarifas adicionales'
    },
    {
      labelplaceholder1: 'Crédito',
      labelplaceholder2: 'Nombre',
      labelplaceholder3: 'apellido',
      labelplaceholder4: 'codigo Postal',
      labelplaceholder5: 'Colombia'
    },
  ];

  return (
    <section className='PayDetails'>
        <span><h4>Confirmar y Pagar</h4></span>
        <PayDetailsItem data={data[0]}/>
    </section>
  );
};

export default PayDetails;
