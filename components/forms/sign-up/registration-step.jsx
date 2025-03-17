"use client";

import { useFormContext } from 'react-hook-form';
import React,{useState} from 'react';
import { useAuthContextHook } from '@context/use-auth-context';
import CurrentSelectionForm from './current-selection-form';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@app/loading';

//import some components dynmically
const DetailsForm = dynamic(()=> import ('./accounts-details-form'),{
  ssr: false,
  loading: LoadingSpinner
});
const OTPForm = dynamic(()=> import ('./opt-form'));

const RegistrationFormStep = () => {

    const {register,formState:{errors},setValue}= useFormContext();

    //get the current state
    const {currentStep}=useAuthContextHook();
    const [onOTP, setOnOTP] = useState('');
    const [onUserType, setOnUserType] = useState('owner');

    setValue('opt', onOTP);
    
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
            <DetailsForm 
            register={register} 
            errrors={errors}/>
          )
        case 3:
          return(
            <OTPForm
            onOTP={onOTP}
            setOnOTP={setOnOTP}
            />
          )
    }
  return (
    <div>RegistrationFormStep</div>
  )
}

export default RegistrationFormStep