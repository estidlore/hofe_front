import React, {useState} from 'react';
import Field from '../components/Field';
import Selector from '../components/Selector';
import { useHistory } from "react-router-dom";
import axios from 'axios'

export default function SignUp() {
  const [userType, setUserType] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const userTypes = [{
    value: "person",
    text: "Candidato"
  }, {
    value: "enterprise",
    text: "Empresa"
  }];

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(password.toString() + " vs " + password2.toString());
    if (password !== password2) {
      console.log("Passwords do not match");
      return;
    }
    var data = {
      "type": "person",
      "id": "1000948840",
      "name": "Wilson Andres",
      "last_name": "Camargo",
      "email": "wilsonanca@icloud.com",
      "password": "iPassword",
      "phone": "3005586516"
    };
    data = JSON.stringify(data);
    console.log("data: " + data);
    axios({
      url: "https://hofe.herokuapp.com/sign_up",
      method: 'POST',
      headers: [
        'Some header'
      ],
      data: data,
    }).then((response) => {
      console.log("response: " + response);
    }).catch((error) => {
      console.log("error: " + error);
    });
    history.push("/");
  }

  return (
    <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
      <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4 p-5 light">
        <form onSubmit={onSubmit}>
          <h3 className="text-center mb-4">Registrarse</h3>

          <Selector label="Tipo de usuario" options={userTypes}
            onChange={(e) => setUserType(e.target.value)} />
          <Field type="text" id="name" label="Nombre"
            placeholder=""
            onChange={(e) => setName(e.target.value)} />
          <Field type="text" id="last_name" label="Apellido"
            placeholder=""
            onChange={(e) => setLastName(e.target.value)} />
          <Field type="email" id="email" label="Correo"
            placeholder="usuario@correo.com"
            onChange={(e) => setEmail(e.target.value)} />
          <Field type="password" id="pass" label="Contraseña"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)} />
          <Field type="password" id="pass2" label="Repetir contraseña"
            placeholder=""
            onChange={(e) => setPassword2(e.target.value)} />

          <div className="text-center">
            <button type="submit" className="btn btn primary btn-block my-3">
              Registrarse
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
