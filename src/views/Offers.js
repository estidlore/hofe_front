import React from 'react'

function Offers() {
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
                    <a href="#">Mis Postulaciones</a>
                </span>
            </div>


            <div className="container m-5 mx-auto">
                <h3 className="my-4">Ofertas</h3>

                <div className="border" class="shadow-lg p-4 mb-4 bg-whit">
                    <div className="container m-5 ">
                        <h4>Desarrollador Junior</h4>
                        <div class="  text-secondary">
                            <h5>Nombre de la compañia</h5>
                            <h5>Dirección</h5>
                            <h5>Sueldo</h5>
                            <p></p>
                        </div>
                        <div class="r-5">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse enim cursus tortor
                            risus, nulla purus elit. Facilisis amet, suspendisse mi vitae lorem. Id orci non nullam orci,
                            auctor varius volutpat. Euismod amet, risus accumsan, vel amet. habitus sis scripsere classici,
                            postea futuri sunt momenti, ut litteris Cum Ad a series Vestibulum cursus Troianum dicitur
                            diversorum carminum auctores; Sed aliorum carmina tantum fragmenta supersunt.
                        </p>
                        </div>
                        <div class="l-5  text-secondary">
                            <p>Publicado hace 8 días</p>
                        </div>
                        
                        <button type="submit" className="btn btn-block info my-3">Aplicar</button>


                    </div>
                </div>

                <div className="border" class="shadow-lg p-4 mb-4 bg-whit">
                    <div className="container m-5 ">
                        <h4>Desarrollador Junior</h4>
                        <div class="  text-secondary">
                            <h5>Nombre de la compañia</h5>
                            <h5>Dirección</h5>
                            <h5>Sueldo</h5>
                            <p></p>
                        </div>
                        <div class="r-5">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse enim cursus tortor
                            risus, nulla purus elit. Facilisis amet, suspendisse mi vitae lorem. Id orci non nullam orci,
                            auctor varius volutpat. Euismod amet, risus accumsan, vel amet. habitus sis scripsere classici,
                            postea futuri sunt momenti, ut litteris Cum Ad a series Vestibulum cursus Troianum dicitur
                            diversorum carminum auctores; Sed aliorum carmina tantum fragmenta supersunt.
                        </p>
                        </div>
                        <div class="l-5  text-secondary">
                            <p>Publicado hace 8 días</p>
                        </div>
                        
                        <button type="submit" className="btn btn-block info my-3">Aplicar</button>


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

export default Offers