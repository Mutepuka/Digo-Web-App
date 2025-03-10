"use client";

import { useFormContext } from 'react-hook-form';
import React,{useState} from 'react';
import { useAuthContextHook } from '@context/use-auth-context';
import CurrentSelectionForm from './current-selection-form';
import AccountDetailsForm from './accounts-details-form';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@app/loading';

//import some components dynmically
const DetailsForm = dynamic(()=> import ('./accounts-details-form'),{
  ssr: false,
  loading: LoadingSpinner
})

const RegistrationFormStep = () => {
    const {register,formState,setValue}= useFormContext();

    //get the current state
    const {currentStep}=useAuthContextHook();
    const [onOTP, setOnOTP] = useState('second');
    const [onUserType, setOnUserType] = useState('owner');

    setValue('opt', onOTP)
    switch (currentStep) {
        case 1:
            return(
                <CurrentSelectionForm
                register={register}
                userType={onUserType}
                setUserType={setOnUserType}
                />
            )
        case 2:
          return(
            <DetailsForm/>
          )
    }
  return (
    <div>RegistrationFormStep</div>
  )
}

export default RegistrationFormStep