"use client";

import { useFormContext } from 'react-hook-form';
import React,{useState} from 'react';
import { useAuthContextHook } from '@context/use-auth-context';
import CurrentSelectionForm from './current-selection-form';

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
    
        default:
            break;
    }
  return (
    <div>RegistrationFormStep</div>
  )
}

export default RegistrationFormStep