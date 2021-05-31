import React from 'react'
import Selector from '../components/Selector'

function CandidatesList() {

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
        <div>
            <div className="light p-2">
                <span className="m-2">
                    <a href="#">Perfil</a>
                </span>
                <span className="nav-item m-5">
                    <a href="#">Buscar</a>
                </span>
                <span className="nav-item m-2">
                    <a href="#">Mis Ofertas</a>
                </span>
            </div>


            <div className="container m-5 mx-auto">
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
    function Home_Step({ num, header, text }) {
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
    function Candidate_Step({ num,text }) {
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
export default CandidatesList

