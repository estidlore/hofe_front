import React from 'react'

export default function CandidateInfo() {
  return (
    <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
      <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 p-5 light">
        <h3 className="my-4">Desarrollador Junior</h3>

        <div className="row">
          <Home_Step header="Graduado de" text="Universidad de La Sabana" />
          <Home_Step header="Título" text="Buen Ingeniero" />
        </div>
        <h4 className="my-4">Resultado de Test Psicológico por compatibilidad</h4>
        <div className="row">
          <Habilidad text="Habilidad 1" num="10" />
          <Habilidad text="Habilidad 2" num="50" />
          <Habilidad text="Habilidad 3" num="80" />
        </div>

        <h4 className="my-4">Valores presentes en el Test Psicologico</h4>
        <div>
          <p>Valor 1</p>
          <p>Valor 2</p>
          <p>Valor 3</p>
        </div>

        <h4 className="my-4">Resultados de Test de Conocimientos Técnicos</h4>
        <div>
          <p>Conocimiento 1</p>
          <p>Conocimiento 2</p>
          <p>Conocimiento 3</p>
        </div>

        <h4 className="my-4">Parte 1</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis ut adipiscing nascetur penatibus pellentesque.</p>

        <button type="submit" className="btn btn-block info my-3">Contratar</button>

      </div>

    </div>
  )

  function Habilidad({text, num}) {
    return (
      <div class="col-12 col-md-4 p-4">
        <div class="row">
          <p>{text}</p>
            <progress className="d-block" id="file" value={num} max="100"> 32% </progress>
        </div>
      </div>
    )
  }

  function Home_Step({header, text}) {
    return (
      <div className="col-12 col-md-6">
        <div className="row">
          <div className="col-10 col-md-9 col-lg-10">
            <h5>{header}</h5>
            <p>{text}</p>
          </div>
        </div>
      </div>
    )
  }
}

