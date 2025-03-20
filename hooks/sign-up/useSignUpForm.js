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
      email: "",
      password: "",
      otp: "", // Ensure OTP field is included
    },
    mode: "onChange",
  });

  // Generate OTP
  const onGenerateOTP = async (email, password, onNext) => {
    if (otpCooldown) {
      toast.error("Please wait before requesting another OTP.");
      return;
    }

    setOtpCooldown(true);
    setTimeout(() => setOtpCooldown(false), 60000); // 1-minute cooldown

    try {
      // Create a sign-up attempt
      const signUpAttempt = await signUp.create({ emailAddress: email, password });
      if (!signUpAttempt) {
        throw new Error("Failed to create sign-up attempt.");
      }

      // Prepare and send the OTP
      const otpPreparation = await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      if (!otpPreparation) {
        throw new Error("Failed to prepare OTP.");
      }

      // Move to the next step
      onNext((prev) => prev + 1);
      toast.success("OTP sent to your email!");
    } catch (error) {
      toast.error(`OTP Generation Failed: ${error.message}`);
      console.error("OTP Generation Error:", error);
    }
  };

  // Handle Form Submission
  const onHandleSubmit = methods.handleSubmit(async (values) => {
    if (!isLoaded) return;

    try {
      setLoading(true);

      // Validate OTP
      if (!values.otp || values.otp.trim() === "") {
        toast.error("OTP is required!");
        return;
      }

      // Attempt OTP verification
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: values.otp,
      });

      // Check if OTP verification was successful
      if (completeSignUp.status !== "complete") {
        toast.error("OTP verification failed. Please check the code and try again.");
        return;
      }

      // Complete user registration
      if (completeSignUp.status === "complete" && signUp.createdUserId) {
        const registered = await onCompleteRegistration(
          values.fullname,
          signUp.createdUserId,
          values.type
        );

        if (registered?.status === 200 && registered.user) {
          // Set the user session as active
          await setActive({ session: completeSignUp.createdSessionId });

          // Redirect to dashboard
          toast.success("Sign-up successful! Redirecting...");
          router.push("/dashboard");
        } else {
          throw new Error("User registration failed");
        }
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      console.error("Error in sign-up process:", error);
    } finally {
      setLoading(false);
    }
  });

  return { methods, onHandleSubmit, onGenerateOTP, loading };
};

export default useSignUpForm;