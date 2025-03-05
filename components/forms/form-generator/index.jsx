import React from 'react'

const FormGenerator = ({errors, inputType, name, placeholder,register,type, form,label,lines,options}) => {

    //switch between form input type
    switch (inputType) {
        case 'input':
            
            break;
    
        default:
            return(
                <label htmlFor={label}>
                    {label && label}
                </label>
            )
    }
  return (
    <div>FormGenerator</div>
  )
}

export default FormGenerator