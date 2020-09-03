import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/styles/components/Modal.scss'

const Modal = (props) => {

  if(!props.isOpen){
    return null;
  }

  if(props.isClose){
    return null;
  }

  return (
    ReactDOM.createPortal(
      <div className='modal'>
          <div className="modal__container">
              {props.children}
          </div>
      </div>,
      document.getElementById('modal')
    )
  )
}

export default Modal;