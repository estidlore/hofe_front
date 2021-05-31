import React from 'react'
import {Link} from 'react-router-dom'

export default function _404() {
  return (
    <div className="container m-5 p-5">
      <h1 className="display-1 my-5">¡Ups!</h1>
      <h3>No pudimos encontrar esta página</h3>

      <hr />
      <h5>La página que estás buscando, probablemente fue renombrada, eliminada, o nunca existió</h5>

      <h5 className="mt-5 mb-3">Aquí algunas opciones que te puedan servir</h5>
      <Link to="/" className="btn dark">
        Inicio
      </Link>
    </div>
  )
}
