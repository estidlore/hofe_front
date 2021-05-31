import React from 'react'

function OfferInfo() {
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
        <h3 className="my-4">Desarrollador Senior</h3>
     

       
            
            <div className="border" class = "shadow-lg p-4 mb-4 bg-whit">
                <div className="container m-5 ">
                    <div class="  text-secondary">
                        <h4>Nombre de la compañia</h4>
                        <h4>Dirección</h4>
                        <h4>Información de contacto</h4>
                        <h4>Sueldo</h4>
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
                    <div class="  text-secondary">
                        <h4>Habilidades Requeridas</h4>
                    </div>
                    <div className="m-5">
                        <div className="row">  
                            <Habilidad  text = "Habilidad 1" num = "10" />
                            <Habilidad  text = "Habilidad 2" num = "50" />
                            <Habilidad  text = "Habilidad 3" num = "80" />
                        </div>
                    </div>
                    
                    <div class="m-5  text-secondary">
                        <h4>Conocimientos Requeridos</h4>
                    </div>
                    
                    <div class="m-5  ">
                    <p>Conocimiento 1</p>
                    <p>Conocimiento 2</p>
                    <p>Conocimiento 3</p>
                    </div>

                    <div class="m-5  text-secondary">
                        <h4>Responsabilidades</h4>
                    </div>
                    <div class="m-5  ">
                    <p>Responsabilidad 1</p>
                    <p>Responsabilidad 2</p>
                    <p>Responsabilidad 3</p>
                    </div>


                    <button type="submit" className="btn btn-block info my-3">Aplicar</button>


                </div>
            </div>
            
      </div>
    </div>
  )



   function Habilidad ({text, num}){
       return(

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

export default OfferInfo