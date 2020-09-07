import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Button.scss'

const Button = (props) => {
  const {data} = props;

  return (
    <div className='btnContainer'>
      <button
        type='button'
        className='btnContainer__btn'
      >
      {data}
      </button>
    </div>
  );
}

export default Button;
