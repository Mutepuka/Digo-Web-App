"use client";
import { AuthContextProvider } from '@context/use-auth-context'
import { FormProvider } from 'react-hook-form';
import React, { Children } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUp } from "@clerk/clerk-react";
import { useRouter } from "next/navigation"; 
import { useForm } from "react-hook-form";
import  { useState } from "react";
import { UserRegistrationSchema } from "@libs/auth.schema";

export const useSignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const { signUp, isLoaded, setActive } = useSignUp();
  const router = useRouter();

  const methods = useForm({
      resolver: zodResolver(UserRegistrationSchema),
      defaultValues: {
          type: "owner",
      },
      mode: "onChange",
  });

  // Generate OTP
  const onGenerateOTP = async (email, password, onNext) => {
      if (!isLoaded) return;
      try {
          await signUp.create({ emailAddress: email, password });
          await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
          onNext((next) => next + 1);
      } catch (error) {
          console.error("OTP Generation Error:", error);
      }
  };

  // Handle Submit
  const onHandleSubmit = methods.handleSubmit(async (values) => {
      if (!isLoaded) return;
      try {
          setLoading(true);
          const completeSignUp = await signUp.attemptEmailAddressVerification({
              code: values.opt,
          });

          if (completeSignUp.status !== "complete") {
              throw new Error("Invalid code");
          }

          if (signUp.createdUserId) {
              const registered = await onCompleteRegistration(
                  values.fullname,
                  signUp.createdUserId,
                  values.type
              );

              if (registered?.status === 200 && registered.user) {
                  await setActive({ session: completeSignUp.createdSessionId });
                  setLoading(false);
                  router.push("/");
              } else {
                  console.error("User registration failed");
              }
          }
      } catch (error) {
          console.error("Error in sign-up process:", error);
      } finally {
          setLoading(false);
      }
  });

  return { methods, onHandleSubmit, onGenerateOTP, loading };
};

const SignUpFormProvider = ({children}) => {
  const {methods,onHandleSubmit,onGenerateOTP,loading } = useSignUpForm();
  
  return(
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className='h-full'>
            <div className="flex-column">
                {children}
            </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  )
}

export default SignUpFormProvider