import React from 'react'

const formRow = ({type,name, labelText,defaultValue,onChange}) => {
  return (
        <div className="form-row">
          <label htmlFor={name} className='form-lable'>
            {labelText || name}
          </label> 
          <input type={type}
          id={name}
           name={name}
           className='form-input'
            defaultValue={defaultValue}
            onChange={onChange}
            required/>
        </div>
  )
}

export default formRow
