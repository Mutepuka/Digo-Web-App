import SignUpFormProvider from '@components/forms/sign-up/form-provider'
import RegistrationFormStep from '@components/forms/sign-up/registration-step'
import React from 'react'

const PageSignUp = () => {
  return (
    <div className='d-flex'>
      <div className="col-md-8">
        <SignUpFormProvider>
          <div className="">
            
            <RegistrationFormStep></RegistrationFormStep>

          </div>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default PageSignUp