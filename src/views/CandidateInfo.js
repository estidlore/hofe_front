import React from 'react'

function CandidateInfo() {
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
        <h3 className="my-4">Desarrollador Junior</h3>
     
            <div className="border" class = "shadow-lg p-4 mb-4 bg-white">
                <div className="container m-5 mx-auto" >
                    <div className="row">     
                        <Home_Step  header="Graduado de" text="Universidad de La Sabana" />
                        <Home_Step  header="Título" text="Buen Ingeniero" />
                      
                    </div>
                    <div class="m-5  text-secondary">
                        <h4>Resultado de Test Psicológico por compatibilidad</h4>
                    </div>
                    <div className="m-5">
                        <div className="row">  
                            <Habilidad  text = "Habilidad 1" num = "10" />
                            <Habilidad  text = "Habilidad 2" num = "50" />
                            <Habilidad  text = "Habilidad 3" num = "80" />
                        </div>
                        
                    </div>
                    <div class="m-5  text-secondary">
                        <h4>Valores presentes en el Test Psicologico</h4>
                    </div>
                    <div class="m-5  ">
                    <p>Valor 1</p>
                    <p>Valor 2</p>
                    <p>Valor 3</p>
                    </div>

                    <div class="m-5  text-secondary">
                        <h4>Resultados de Test de Conocimientos Técnicos</h4>
                    </div>
                    <div class="m-5  ">
                    <p>Conocimiento 1</p>
                    <p>Conocimiento 2</p>
                    <p>Conocimiento 3</p>
                    </div>

                    <div class="m-5  text-secondary">
                        <h4>Parte 1</h4>
                    </div>
                    <div class="m-5  ">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis ut adipiscing nascetur penatibus pellentesque.</p>
                    </div>

                    <button type="submit" className="btn btn-block info my-3">Contratar</button>


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

export default CandidateInfo

