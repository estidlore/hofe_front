import React from 'react'
import Selector from '../components/Selector'

export default function Candidates() {

  const userTypes = [{
    value: "cargo",
    text: "Cargo de interes"
  }, {
    value: "universidad",
    text: "Graduado de"
  }, {
    value: "compatibilidadPsicologica",
    text: "Compatibilidad Psicológica"
  }, {
    value: "compatibilidadConocimiento",
    text: "Compatibilidad de conocimiento"
  }]

  return (
    <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
      <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 p-5 light">
        <h3 className="my-4">Aspirantes</h3>
        <Selector label="Ordenar por: " options={userTypes} />
        <br></br><br></br>
        <div className="row">
          <Home_Step header="Cargo de interes" />
          <Home_Step header="Graduado de" />
          <Home_Step header="Compatibilidad psicológica" />
          <Home_Step header="Compatibilidad de conocimiento" />
        </div>
        <br></br>
        <div className="row">
          <Candidate_Step text="Desarrollador Junior" />
          <Candidate_Step text="Universidad de La Sabana" />
          <Candidate_Step text="100%" />
          <Candidate_Step text="100%" />
        </div>
        <div className="row">
          <Candidate_Step text="Desarrollador Junior" />
          <Candidate_Step text="Universidad de La Sabana" />
          <Candidate_Step text="100%" />
          <Candidate_Step text="100%" />
        </div>
        <div className="row">
          <Candidate_Step text="Desarrollador Junior" />
          <Candidate_Step text="Universidad de La Sabana" />
          <Candidate_Step text="100%" />
          <Candidate_Step text="100%" />
        </div>
        <div className="row">
          <Candidate_Step text="Desarrollador Junior" />
          <Candidate_Step text="Universidad de La Sabana" />
          <Candidate_Step text="100%" />
          <Candidate_Step text="100%" />
        </div>
        <div className="row">
          <Candidate_Step text="Desarrollador Junior" />
          <Candidate_Step text="Universidad de La Sabana" />
          <Candidate_Step text="100%" />
          <Candidate_Step text="100%" />
        </div>
      </div>
    </div>
  )
  function Home_Step({num, header, text}) {
    return (
      <div className="col-12 col-md-3">
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
  function Candidate_Step({num, text}) {
    return (
      <div className="col-12 col-md-3">
        <div className="row">
          <span className="col-2 col-md-3 col-lg-2">
            <p className="text-center rounded dark">{num}</p>
          </span>
          <div className="col-10 col-md-9 col-lg-10">
            <p class="bg-secondary text-white">{text}</p>
          </div>
        </div>
      </div>
    )
  }
}
