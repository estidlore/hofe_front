import React from 'react'

function PorfileCandidate() {
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
                <div className="position-relative secondary">
                    <img src="./company_bg.png" className="img-fluid col-12" />
                </div>
            </div>

            <div className="text-center m-4">
                <h3 >Nombre del usuario</h3>
                <div class="text-secondary">
                    Dirección <br></br>
                    Información de contacto
                </div>
            </div>

            <div className="container m-5 mx-auto">
                <h3 className="my-4">Educación</h3>

                <div className="border" class="shadow-lg p-4 mb-4 bg-white">
                    <div className="container m-5 mx-auto" >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Dictum egestas neque elementum tellus mattis. Suspendisse 
                            urna sagittis, urna nunc felis lectus. Viverra magna hac 
                            libero amet. Aliquam pulvinar sit non sed pellentesque pellentesque.
</p>

                    </div>
                </div>

            </div>
        </div>
    )



    function Habilidad({ text, num }) {
        return (

            <div class="col-12 col-md-4">
                <div class="row">
                    <div class="col-10 col-md-9 col-lg-10">
                        <p>{text}</p>
                    </div>
                    <div >
                        <progress id="file" value={num} max="100"> 32% </progress>
                    </div>

                </div>
            </div>
        )
    }


    function Home_Step({ num, header, text }) {
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

export default PorfileCandidate

