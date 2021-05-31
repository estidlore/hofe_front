import React from 'react'

export default function Profile({type}) {
  if (type === "candidate") {
    return (
      <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
      <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 p-0 light">
        <div className="position-relative p-0">
          <img src="./company_bg.png" className="img-fluid col-12" />
        </div>

        <div className="p-5">
          <div className="text-center">
            <h3 >Nombre candidato</h3>
            <h5>Dirección</h5>
            <h5>Información de contacto</h5>
          </div>

          <div className="m-5">
            <h3 className="my-4">Descripción</h3>

            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Dictum egestas neque elementum tellus mattis. Suspendisse
            urna sagittis, urna nunc felis lectus. Viverra magna hac
            libero amet. Aliquam pulvinar sit non sed pellentesque pellentesque.
            </p>
          </div>
        </div>

      </div>
    </div>
    );
  }
  return (
    <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
      <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 p-0 light">
        <div className="position-relative p-0">
          <img src="./company_bg.png" className="img-fluid col-12" />
        </div>

        <div className="p-5">
          <div className="text-center">
            <h3 >Nombre compañía</h3>
            <h5>Dirección</h5>
            <h5>Información de contacto</h5>
          </div>

          <div className="m-5">
            <h3 className="my-4">Misión y Visión</h3>

            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Dictum egestas neque elementum tellus mattis. Suspendisse
            urna sagittis, urna nunc felis lectus. Viverra magna hac
            libero amet. Aliquam pulvinar sit non sed pellentesque pellentesque.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
