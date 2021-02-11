import React from 'react'

// Custom component to pass to <Field />
const Input = ({ label, input, type, meta: { error, touched } }) => (
  <div>
    <label htmlFor={label} />
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

export default Input