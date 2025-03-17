"use client";
import { AuthContextProvider } from '@context/use-auth-context'
import { FormProvider } from 'react-hook-form';
import React from 'react';
import useSignUpForm from '@hooks/sign-up/useSignUpForm';
import { Loader } from '@components/loader';


const SignUpFormProvider = ({children}) => {
  const {methods,onHandleSubmit, loading} = useSignUpForm();
  
  return(
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className='h-full'>
            <div className="flex-column d-flex h-100 gap-3 justify-center">
               <Loader loading={loading}>{children}</Loader>
            </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  )
}

export default SignUpFormProvider