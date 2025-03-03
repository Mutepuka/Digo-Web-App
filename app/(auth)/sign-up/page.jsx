import ButtonHandler from '@components/forms/sign-up/ButtonHandler'
import SignUpFormProvider from '@components/forms/sign-up/form-provider'
import HighLightBar from '@components/forms/sign-up/hightlight-bar'
import RegistrationFormStep from '@components/forms/sign-up/registration-step'
import React from 'react'

const PageSignUp = () => {
  return (
    <div className='d-flex'>
      <div className="col-md-8">
        <SignUpFormProvider>
          <div className="">
            <RegistrationFormStep/>
            <ButtonHandler/>
            <HighLightBar/>
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default PageSignUp