import React from 'react';
// import '../assets/styles/components/PayDetailsItem.scss';

const BillDetailsItems = ({data}) => {
  const { label2, label3, label4, label5, label6 ,label7,  textbutton1, textbutton2} = data;
  return (
      <div className='PayDetails__items'>
        <span className='PayDetails__items--pay'>
           <p>{label1}</p>
           <form><input type="text" placeholder="Tarjeta Débito"></input></form>
        </span>
      </div>
  );
};

export default BillDetailsItems;
