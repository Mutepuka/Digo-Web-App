import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

const FormGenerator = ({errors, inputType, name, placeholder,register,type, form,label,lines,options}) => {
    // console.log('this is the lable', label);

    //switch between form input type
    switch (inputType) {
        case 'input':
            return(
                <label className='d-flex flex-column' htmlFor={label}>
                    {placeholder && placeholder} 
                 <input
                    id={`input-${label}`}
                    type={type}
                    placeholder={placeholder}
                    form={form}
                    {...register(name)}
                    className='form-class'
                    />
                    <ErrorMessage
                    errors={errors}
                    name={name}
                    render={({message})=>(
                        <p className='text-danger'>{message === 'Required'? '': message}</p>
                    )}
                    />
                </label>
            )
        case 'select':
        return(
            <label htmlFor={label}>
                {label && label}
                <select
                id={`input-${label}`}
                form={form}
                {...register(name)}
                >
                    {options?.length && options.map((option)=>(
                        <option
                        value={options.value}
                        key={option.id}
                        >
                            {option.label}
                        </option>
                    )) }

                </select>
            </label>
        )
        default: return <></> 
        
    }
  
}

export default FormGenerator