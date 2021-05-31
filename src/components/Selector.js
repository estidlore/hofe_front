import React from 'react'

export default function Selector({label, options, onChange}) {
  return (
    <div className="form-group mt-3">
      <label className="mx-2">{label}</label>
      <select id={label} onChange={(ev) => onChange(ev.target.value)} >
        {
          options.map((option) => (
            <option key={option.value} value={option.value}>{option.text}</option>
          ))
        }
      </select>
    </div>
  )

}
