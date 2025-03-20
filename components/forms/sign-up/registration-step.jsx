"use client";

import { useFormContext } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { useAuthContextHook } from '@context/use-auth-context';
import CurrentSelectionForm from './current-selection-form';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@app/loading';

// Import some components dynamically
const DetailsForm = dynamic(() => import('./accounts-details-form'), {
  ssr: false,
  loading: LoadingSpinner,
});
const OTPForm = dynamic(() => import('./opt-form'));

const RegistrationFormStep = () => {
  const { register, formState: { errors }, setValue, getValues, watch } = useFormContext();

  // Get the current state
  const { currentStep } = useAuthContextHook();
  const [onOTP, setOnOTP] = useState('');
  const [onUserType, setOnUserType] = useState('owner');

  // Use useEffect to update form values when onOTP changes
  useEffect(() => {
    console.log("useEffect triggered"); // Debugging log
    if (onOTP) {
      setValue("otp", onOTP); // Corrected field name
      console.log("Updated Form Value:", getValues("otp")); // Debugging log
    }
  }, [onOTP, setValue]);

  // Watch the 'otp' field to verify updates in real time
  console.log("Watched OTP Value:", watch("otp")); // Corrected field name

  switch (currentStep) {
    case 1:
      return (
        <CurrentSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );
    case 2:
      return (
        <DetailsForm
          register={register}
          errors={errors} // Corrected prop name
        />
      );
    case 3:
      return (
        <OTPForm
          onOTP={onOTP}
          setOnOTP={setOnOTP}
        />
      );
    default:
      return <div>RegistrationFormStep</div>;
  }
};

export default RegistrationFormStep;