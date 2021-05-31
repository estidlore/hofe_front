import React, {useState} from 'react'
import Field from '../components/Field'

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    var data = {
      email: email,
      password: password
    }
    console.log(data);
  };

  return (
    <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
      <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4 p-5 light">
        <form action="/login">
          <h3 className="text-center">Iniciar Sesión</h3>

          <Field type="email" id="email" label="Correo"
            placeholder="Ingrese su correo" onChange={setEmail} />
          <Field type="password" id="pass" label="Contraseña"
            placeholder="Ingrese su contraseña" onChange={setPassword} />

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input m-1" id="remember" />
              <label className="custom-control-label my-2" htmlFor="remember">Recuerdame</label>
            </div>
          </div>

          <p className="forgot-password">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>

          <div className="text-center">
            <button type="submit" className="btn btn-block primary my-3" onSubmit={onSubmit}>
              Iniciar Sesión
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
