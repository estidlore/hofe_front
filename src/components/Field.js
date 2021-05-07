import React from 'react'

function Field({type, name}) {
  return (
    <div className="form-group mt-3">
      <label className="pb-1">{name}</label>
      <input type={`${type}`} className="form-control" placeholder={`Enter ${name}`} />
    </div>
  )
}

export default Field
