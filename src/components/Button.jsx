import React from 'react';
import '../assets/styles/components/Button.scss';

const Button = (props) => {
  const { data, onClick } = props;

  return (
    <div className='btnContainer'>
      <button type='button' className='btnContainer__btn' onClick={onClick}>
        {data}
      </button>
    </div>
  );
};

export default Button;
