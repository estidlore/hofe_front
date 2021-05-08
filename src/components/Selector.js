import React from 'react'

function Selector({label, options, onChange}) {
  return (
    <div className="form-group mt-3">
      <label className="m-2">{label}</label>
      <select id={label} onChange={(ev) => onChange(ev.target.value)} >
        {
          options.map((option, i) => (
            <option key={i} value={option.value}>{option.text}</option>
          ))
        }
      </select>
    </div>
  )
  
}



export default Selector
