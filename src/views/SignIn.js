import React from 'react'
import Field from '../components/Field'

function SignIn() {
  return (
    <div>
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3">
            <form>
              <h3>Iniciar Sesión</h3>

              <Field type="email" name="Email" />
              <Field type="password" name="Password" />

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input m-1" id="remember" />
                  <label className="custom-control-label my-2" htmlFor="remember">Recuerdame</label>
                </div>
              </div>
              <p className="forgot-password text-right">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </p>

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block my-3">Iniciar Sesión</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
