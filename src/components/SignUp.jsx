import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Login.scss';
import { setUser } from '../redux/actions/usersActions';
import Button from './Button';
import Modal from './Modal';

const SignUp = (props) => {
  const [modalIsClose, setModalIsClose] = useState(false);
  const [value, setValues] = useState('');
  const { isOpen } = props;

  const handleCloseModal = (e) => {
    setModalIsClose(true);
    // console.log(modalIsOpen)
  };

  const handleChange = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.setUser(value);
    handleCloseModal();
  };

  return (
    <Modal isOpen={isOpen} isClose={modalIsClose}>
      <div className='login'>
        <Button data='X' onClick={handleCloseModal} />
        <div className='login__form'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type='text' name='name' value={value.name} placeholder='Nombre' onChange={(e) => handleChange(e)} />
            <input type='email' name='email' value={value.email} placeholder='Email' onChange={(e) => handleChange(e)} />
            <input type='password' name='password' value={value.password} placeholder='Contraseña' onChange={(e) => handleChange(e)} />
            <Button data='Registrarse' onClick={handleClick} />
          </form>
        </div>

        <div className='login__remember'>
          <div className='container-Recuerdame'>
            <input type='checkbox' name='' id='' />
            <label htmlFor>Recuérdame</label>
          </div>
          <div className='container-Registro'>{/* <a href=''>Olvidé mi contraseña</a> */}</div>
        </div>
      </div>

      {/* <div className="login__social">
          <div className="login__social--item">
            <figure><img src={googleIcon} alt="" /></figure>
            <p>Iniciar sesión con Gmail</p>
          </div>
          <div className="login__social--item">
            <figure><img src={facebookIcon} alt="" /></figure>
            <p>Iniciar sesión con Facebook</p>
          </div>
        </div> */}

      <div className='login__signup'>
        <p>¿Ya Estas Registrado?</p>
        {/* <a href=''>Iniciar Sesión</a> */}
      </div>
      {/* </div> */}
    </Modal>
  );
};

const mapStateToProps = ({ usersReducer }) => usersReducer;
const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
