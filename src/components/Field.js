import React from 'react'

function Field({type, id, label, placeholder, onChange}) {
  return (
    <div className="form-group m-2">
      <label className="pb-1">{label}</label>
      <input type={type} id={id} name={id} className="form-control"
        placeholder={placeholder} onChange={(ev) => onChange(ev)}/>
    </div>
  )
}

export default Field
