import React from 'react'

export default function Offers() {
  return (
    <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
      <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 p-5 light">

        <h3 className="my-4">Ofertas</h3>

        <Offer role="Desarrollador Junior" company="Nombre de la Compañía"
          address="Dirección" salary="3.000.000 COP" description="Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Habitasse enim cursus
          tortor risus, nulla purus elit. Facilisis amet, suspendisse mi vitae
          lorem. Id orci non nullam orci, auctor varius volutpat."
          date="20/05/2021" />

        <Offer role="Desarrollador Junior" company="Nombre de la Compañía"
          address="Dirección" salary="3.000.000 COP" description="Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Habitasse enim cursus
          tortor risus, nulla purus elit. Facilisis amet, suspendisse mi vitae
          lorem. Id orci non nullam orci, auctor varius volutpat."
          date="20/05/2021" />

      </div>
    </div>
  )
}

function Offer({role, company, address, salary, description, date}) {
  return (
    <div>
      <hr />
      <h4 className="mt-4 mb-3">{role}</h4>
      <div class="text-secondary mb-5">
        <h5>{company}</h5>
        <h5>{address}</h5>
        <h5>{salary}</h5>
        <p></p>
      </div>
      <p>{description}</p>
      <p>Publicado {date}</p>

      <button type="submit" className="btn btn-block info my-3">Aplicar</button>
    </div>
  );
}