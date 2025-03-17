import { USER_REGISTRATION_FORM } from '@constants/form'
import React from 'react'
import FormGenerator from '../form-generator'

const AccountDetailsForm = ({errors, register}) => {
  return (
    <>
    <h2 className='fw-bold'> Account Details</h2>
    <p>Please fill in the registration form</p>
    {USER_REGISTRATION_FORM.map((field)=>(
        <FormGenerator
        key={field.id}
        {...field}
        errors={errors}
        register={register}
        name={field.name}
        />
    ))}
    </>
  )
}

export default AccountDetailsForm