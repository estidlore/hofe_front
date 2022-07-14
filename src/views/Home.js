import React from 'react'

export default function Home() {
  return (
    <div>
      <img src="./home_bg.jpg" className="img-fluid col-12" />

      <div className="container m-5 mx-auto">
        <h3 className="my-4">¿Buscas un empleo sin sesgo?</h3>
        <div className="row">
          <Home_Step num="1" header="Busca una oferta de interés"
            text="Ve las ofertas disponibles relacionadas con tus estudios, experiencia
            y habilidades" />
          <Home_Step num="2" header="Postúlate" text="Puedes aplicar a cualquier oferta
            de tu interés, siempre que cumplas con los requisitos del contratador" />
          <Home_Step num="3" header="Realiza los exámenes" text="Demuestra tus habilidades
            y conocimientos a través de pruebas estandarizadas de conocimiento y psicología" />
        </div>

        <hr className="my-4" />

        <h3 className="my-4">¿Buscas un aspirante calificado?</h3>

        <div className="row">
          <Home_Step num="1" header="Crea una oferta" text="Publica una oferta laboral para
            el cargo que necesites" />
          <Home_Step num="2" header="Espera" text="Los candidatos más apropiados aplicarán a
            tu oferta y realizarán los exámenes correspondientes" />
          <Home_Step num="3" header="Selecciona" text="Escoge a los mejores candidatos para
            el cargo para ser posteriormente entrevistados" />
        </div>
      </div>
    </div>
  )

  function Home_Step({num, header, text}) {
    return (
      <div className="col-12 col-md-4">
        <div className="row">
          <span className="col-2 col-md-3 col-lg-2">
            <p className="text-center rounded dark">{num}</p>
          </span>
          <div className="col-10 col-md-9 col-lg-10">
            <h5>{header}</h5>
            <p>{text}</p>
          </div>
        </div>
      </div>
    )
  }
}
