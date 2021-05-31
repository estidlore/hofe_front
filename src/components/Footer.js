import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="dark">
      <div className="container p-5">
        <div className="row">
          <div className="col-12 col-md-4 p-2">
            <h5>HOFE</h5>
            <div><Link to="/">Igualdad</Link></div>
            <div><Link to="/offers">Buscar ofertas</Link></div>
            <div><Link to="/candidates">Buscar aspirantes</Link></div>
          </div>
          <div className="col-12 col-md-4 p-2">
            <h5>Sobre nosotros</h5>
            <div><a href="">Misión</a></div>
            <div><a href="">Visión</a></div>
            <div><a href="">Equipo</a></div>
          </div>
          <div className="col-12 col-md-4 p-2">
            <h5>Términos y condiciones</h5>
            <div><a href="">Política</a></div>
            <div><a href="">Manejo de datos</a></div>
            <div><a href="">Código de conducta</a></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
