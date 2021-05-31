import React from 'react'

export default function ProfileCompany() {
  return (
    <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
      <div className="position-relative p-0">
        <img src="./company_bg.png" className="img-fluid col-12" />
      </div>

      <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 p-5 light">
        <div className="text-center">
          <h3 >Nombre compañía</h3>
          <h5>Dirección</h5>
          <h5>Información de contacto</h5>
        </div>

        <div className="mt-5 p-5">
          <h3 className="my-4">Misión y Visión</h3>

          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Dictum egestas neque elementum tellus mattis. Suspendisse
          urna sagittis, urna nunc felis lectus. Viverra magna hac
          libero amet. Aliquam pulvinar sit non sed pellentesque pellentesque.
          </p>
        </div>

      </div>
    </div>
  )



  function Habilidad({text, num}) {
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
