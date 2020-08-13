import React from 'react';

const ButtonsHeader = () => (
  <div className='btnContainer'>
    <div>
      <button
        type='button'
        className='btnContainer-btn'
        // onClick={props.onOpenModal}
      >
        <p>Iniciar Sesión</p>
      </button>
      {/* <LoginModal
                    isOpen={props.modalIsOpen}
                    onClose={props.onCloseModal}
                    onLogin={props.onLogin}
                /> */}
    </div>
    <div>
      <button
        type='button'
        // onClick={props.onOpenModal}
        className='btnContainer-btn'
      >
        Registrarse
      </button>
      {/* <RegisterModal
                    isOpen={props.modalIsOpen}
                    onClose={props.onCloseModal}
                    onRegister={props.onRegister}
                /> */}
    </div>
  </div>
);

export default ButtonsHeader;
