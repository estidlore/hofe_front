import React from 'react'

export default function Field({type, id, label, placeholder, min, max, onChange}) {
  return (
    <div className="form-group m-1">
      <label className="pb-1" for={id}>{label}</label>
      <input type={type} id={id} name={id} className="form-control"
        min={min} max={max}
        placeholder={placeholder} onChange={(ev) => onChange(ev)} />
    </div>
  )
}
