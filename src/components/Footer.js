import React from 'react'

function Footer() {
  return (
    <footer className="dark">
      <div className="container p-5">
        <div className="row">
          <div className="col-12 col-md-4 p-2">
            <h5>HOFE</h5>
            <div><a href="">Igualdad</a></div>
            <div><a href="">Buscar ofertas</a></div>
            <div><a href="">Buscar aspirantes</a></div>
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

export default Footer