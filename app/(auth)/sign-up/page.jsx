import ButtonHandler from '@components/forms/sign-up/ButtonHandler'
import SignUpFormProvider from '@components/forms/sign-up/form-provider'
import HighLightBar from '@components/forms/sign-up/hightlight-bar'
import RegistrationFormStep from '@components/forms/sign-up/registration-step'
import React from 'react'

const PageSignUp = () => {
  return (
    <div className='d-flex w-100'>
      <div className="col-md-8 d-flex h-100 flex-column">
        <SignUpFormProvider>
          <div className="d-flex flex-column gap-3 home-sign-up">
            <RegistrationFormStep/>
            <ButtonHandler/> 
          </div>
          <HighLightBar/>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default PageSignUp