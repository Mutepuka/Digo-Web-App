"use client";

import { useSignUp } from "@clerk/clerk-react";
import { useRouter } from "next/navigation"; 
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegistrationSchema } from "@libs/auth.schema";
import { onCompleteRegistration } from "@actions/auth";
import { toast } from "sonner"; // Import Sonner toast

const useSignUpForm = () => {
    const [loading, setLoading] = useState(false);
    const [otpCooldown, setOtpCooldown] = useState(false);
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
    // const onGenerateOTP = async (email, password, onNext) => {

    //     if (!isLoaded) return;
    //     try {
    //         await signUp.create({ 
    //             emailAddress: email, 
    //             password: password
    //         });
    //         await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    //         onNext((prev) => prev + 1);
    //     } catch (error) {
    //         toast.error(`OTP Generation Failed: ${error.message}`); // Show error toast
    //         console.error("OTP Generation Error:", error);
    //     }
    // };
    const onGenerateOTP = async (email, password, onNext) => {
        if (otpCooldown) {
          toast.error("Please wait before requesting another OTP.");
          return;
        }
      
        setOtpCooldown(true);
        setTimeout(() => setOtpCooldown(false), 60000); // 1-minute cooldown
      
        try {
          await signUp.create({ emailAddress: email, password });
          await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
          onNext((prev) => prev + 1);
        } catch (error) {
          toast.error(`OTP Generation Failed: ${error.message}`);
          console.error("OTP Generation Error:", error);
        }
      };

    // Handle Submit
    const onHandleSubmit = methods.handleSubmit(async (values) => {

        if (!isLoaded) return;
        try {
            setLoading(true);
            
            if (!values.otp) {
                toast.error("OTP is missing!");
                return;
            }

            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code: values.otp,
            });

            //dont throw the error return to avoid other code from excuting
            if (completeSignUp.status !== "complete") {
                // throw new Error("Please complete the form");
                return {message: 'something went wrong please try again'}
            }
            //this code should be in an if state that checks if the status == complete
            if(completeSignUp.status == "complete"){
                if(!signUp.createdUserId) return;

                if (signUp.createdUserId) {
                    const registered = await onCompleteRegistration(
                        values.fullname,
                        signUp.createdUserId,
                        values.type
                    );
    
                    if (registered?.status === 200 && registered.user) {

                        await setActive({ session: completeSignUp.createdSessionId });

                        setLoading(false);
                        toast.success("Sign-up successful! Redirecting..."); // Show success toast
                        router.push("/dashboard");
                    } else {
                        throw new Error("User registration failed");
                    }
    
                    if(registered?.status === 400){
                        toast.error("something went wrong error 400")
                    }
                }

            }
           
        } catch (error) {
            toast.error(`Error: ${error.message}`); // Show error toast
            console.error("Error in sign-up process:", error);
        } finally {
            setLoading(false);
        }
    });

    return { methods, onHandleSubmit, onGenerateOTP, loading };
}

export default useSignUpForm;
