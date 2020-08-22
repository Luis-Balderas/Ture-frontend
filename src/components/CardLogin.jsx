import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => (
    <section class="card-Inicio">
    <section class="registro-Conteiner">

            <div class="conteiner-Inputs">
                <input type="email" name="" id="" placeholder="Email" />
                <input type="password" name="" id="" placeholder="Contraseña" />
             </div>

             
            <div clas="contenier-Button">
                <button>
                        Registrarse
                </button>
            </div>

            <div className="Link">
                <div className="conteiner-Recuerdame">
                    <input type="checkbox" name="" id="" />
                    <label>Recuerdame</label>
                </div>
    
                <div className="contenier-Registro">
                    <h4><a href="">Olvide mi contraseña</a></h4>
                </div>    
            </div>


            <div className="conteiner-Img">
                <div className="img-Google">
                    <img src="./img/google.png" alt="" />
                    <h4>Registrarse con Google</h4>
                </div>
                <div className="img-Facebook">
                    <img src="./img/facebook.png" alt="" />
                    <h4>Registrarse con Facebook</h4>
                </div>
            </div>

            <div className="link-Registrar">
                <h5>¡No tienes cuenta?</h5>
                 <a href="">Registrarse</a>
            </div>

    </section>
</section>
);

export default Login;