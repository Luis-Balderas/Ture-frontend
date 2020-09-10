import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import { getUser } from '../redux/actions/usersActions';
import Button from './Button';
import Modal from './Modal';

const LogIn = (props) => {
  const [modalIsClose, setModalIsClose] = useState(false);
  const [form, setValues] = useState('');
  const { isOpen } = props;
  // const { dataUser } = props;

  const handleInput = (event) => {
    setValues({ ...form, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log('handleClick -> form', form);
    setModalIsClose(true);
    props.getUser(form);
    // props.history.push('/');
  };

  const handleCloseModal = (e) => {
    setModalIsClose(true);
  };
  console.log(props);
  return (
    <Modal isOpen={isOpen} isClose={modalIsClose}>
      <div className='login'>
        <Button data='X' onClick={handleCloseModal} />
        <div className='login__form'>
          <form>
            <input
              aria-label='email'
              type='email'
              name='email'
              id=''
              placeholder='Email'
              onChange={(e) => handleInput(e)}
              value={form.email}
            />
            <input
              aria-label='password'
              type='password'
              name='password'
              id=''
              placeholder='Contraseña'
              value={form.password}
              onChange={(e) => handleInput(e)}
            />
          </form>
        </div>

        <div className='login__button'>
          <Button data='Iniciar Sesión' onClick={handleClick} />
        </div>

        <div className='login__remember'>
          <div className='container-Recuerdame'>
            <input type='checkbox' name='' id='' disabled={true} />
            <label htmlFor='true'>Recuérdame</label>
          </div>
          <div className='container-Registro'>
            <a href='olvide.com'>Olvidé mi contraseña</a>
          </div>
        </div>

        {/* <div className="login__social">
          <div className="login__social--item">
            <figure><img src={googleIcon} alt=""/></figure>
            <p>Iniciar sesión con Gmail</p>
          </div>
          <div className="login__social--item">
            <figure><img src={facebookIcon} alt="" /></figure>
            <p>Iniciar sesión con Facebook</p>
          </div>
        </div> */}

        <div className='login__signup'>
          <p>¿No tienes cuenta?</p>
          {/* <Link to='/register'>Registrarse</Link> */}
        </div>
      </div>
    </Modal>
  );
};

const mapToStateToProps = ({ usersReducer }) => usersReducer;
const mapDispatchToProps = {
  getUser,
};
export default withRouter(connect(mapToStateToProps, mapDispatchToProps)(LogIn));
