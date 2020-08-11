import React from 'react';


class ButtonsHeader extends React.Component {
    render (){
        return (
            <div className="btnContainer">
                <div>
                    <button 
                        className="btnContainer-btn"
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
                        // onClick={props.onOpenModal}
                        className="btnContainer-btn">
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
    }
};

export default ButtonsHeader;