import React from 'react';

const PayDetailsItem = ({data}) => {
  const { label1, label2, label3, label4, label5, label6 ,label7,  text7 } = data;
  return (
      <div className='PayDetails__items'>
        <span className='PayDetails__items--pay'>
           <p>{label1}</p>
           <form><input type="text" placeholder="Tarjeta Débito"></input></form>
        </span>
        <span>
          <p>{label2}</p>
          <form><input type="text" placeholder="Nombre"></input></form>
        </span>
        <span>
          <p>{label3}</p>
          <form><input type="text" placeholder="Apellido"></input></form>
        </span>
        <span>
          <p>{label4}</p>
          <form><input type="text" placeholder="Código Postal"></input></form>
        </span>
        <span>
          <p>{label5}</p>
          <form><input type="text" placeholder="Colombia"></input></form>
        </span>
        <span  className='PayDetails__items--pay1'>
          {/* <input type="checkbox" id="cbox2" value="second_checkbox"></input> */}
          <p>{label6}</p>
        </span>
        <span  className='PayDetails__items--pay2'>
           {/* <input type="checkbox"> </input> */}
          <p>{label7}</p>
          <p>{text7}</p>
        </span>
        <span className="PayDetails__items--button">
          <button type='button'>
            <p>Cancelar</p>
          </button>
          <button type='button'>
            <p>Confirmar</p>
          </button>
        </span>
      </div>
  );
};

export default PayDetailsItem;
