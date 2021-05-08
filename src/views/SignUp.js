import React, {useState} from 'react'
import Field from '../components/Field'
import Selector from '../components/Selector'

function SignUp() {
  const [userType, setUserType] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const userTypes = [{
    value: "candidate",
    text: "Candidato"
  }, {
    value: "enterprise",
    text: "Empresa"
  }]

  const onSubmit = () => {
    if (password !== password2) {
      console.log("Passwords do not match");
      return;
    }
    var data = {
      userType: userType,
      name: name,
      lastName: lastName,
      email: email,
      password: password
    }
    console.log(data);
  }

  return (
    <div className="container-fluid my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3">
          <form>
            <h3 className="text-center">Registrarse</h3>

            <Selector label="Tipo de usuario" options={userTypes} onChange={setUserType} />
            <Field type="text" id="name" label="Nombre"
              placeholder="Entre 4 y 40 caracteres" onChange={setName} />
            <Field type="text" id="last_name" label="Apellido"
              placeholder="Entre 4 y 30 caracteres" onChange={setLastName} />
            <Field type="email" id="email" label="Correo"
              placeholder="ejemplo@dominio.com" onChange={setEmail} />
            <Field type="password" id="pass" label="Contraseña"
              placeholder="Entre 8 y 24 caracteres" onChange={setPassword} />
            <Field type="password" id="pass2" label="Repetir contraseña"
              placeholder="Entre 8 y 24 caracteres" onChange={setPassword2} />

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
              <button type="submit" className="btn btn info btn-block my-3" onSubmit={onSubmit}>
                Registrarse
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
