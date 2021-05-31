import React from 'react'

export default function OfferInfo() {
  return (
    <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
      <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 p-5 light">

        <h3 className="my-4">Desarrollador Senior</h3>
        <div className="text-secondary pb-5">
          <h5>Nombre de la compañia</h5>
          <h5>Dirección</h5>
          <h5>Información de contacto</h5>
          <h5>Sueldo</h5>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse enim cursus tortor
        risus, nulla purus elit. Facilisis amet, suspendisse mi vitae lorem. Id orci non nullam orci,
        auctor varius volutpat. Euismod amet, risus accumsan, vel amet. habitus sis scripsere classici,
        postea futuri sunt momenti, ut litteris Cum Ad a series Vestibulum cursus Troianum dicitur
        diversorum carminum auctores; Sed aliorum carmina tantum fragmenta supersunt.
        </p>
        <p>Publicado hace 8 días</p>

        <h4 className="pt-4 pb-3">Habilidades Requeridas</h4>
        <div className="row">
          <Habilidad text="Habilidad 1" num="10" />
          <Habilidad text="Habilidad 2" num="50" />
          <Habilidad text="Habilidad 3" num="80" />
        </div>

        <h4 className="pt-4 pb-3">Conocimientos Requeridos</h4>
        <div>
          <p>Conocimiento 1</p>
          <p>Conocimiento 2</p>
          <p>Conocimiento 3</p>
        </div>

        <h4 className="pt-4 pb-3">Responsabilidades</h4>
        <div>
          <p>Responsabilidad 1</p>
          <p>Responsabilidad 2</p>
          <p>Responsabilidad 3</p>
        </div>

        <button type="submit" className="btn btn-block info my-3">Aplicar</button>

      </div>
    </div>
  )

  function Habilidad({text, num}) {
    return (
      <div class="col-12 col-md-6 col-lg-4 px-4">
        <div class="row">
          <p>{text}</p>
          <progress className="d-block" id="file" value={num} max="100"> 32% </progress>
        </div>
      </div>
    )
  }

}