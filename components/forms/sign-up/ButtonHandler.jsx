"use client";
import { useAuthContextHook } from "@context/use-auth-context";
import { useFormContext } from "react-hook-form";
import useSignUpForm from "@hooks/sign-up/useSignUpForm";
import Link from "next/link";

const ButtonHandler = () => {
  const { currentStep, setCurrentStep } = useAuthContextHook();
  const { formState, getFieldState, getValues } = useFormContext();
  const { onGenerateOTP } = useSignUpForm();

  const { isDirty: isName } = getFieldState('fullname', formState);
  const { isDirty: isEmail } = getFieldState('email', formState); // Fixed typo
  const { isDirty: isPassword } = getFieldState('password', formState); // Fixed typo

  // If current step is 3
  if (currentStep === 3) {
    return (
      <div className="col-md-12 flex-column d-flex continue-btn">
        <button className="btn btn-a-create" type="submit">
          Create Account
        </button>
        <p>
          Already have an account? <Link href="/sign-in">Sign In</Link>
        </p>
      </div>
    );
  }

  // If current step is 2
  if (currentStep === 2) {
    return (
      <div className="col-md-12 flex-column d-flex continue-btn">
        <button
          className="btn btn-a-continue"
          type="button" // Use type="button" to prevent form submission
          onClick={() => {
            if (isName && isEmail && isPassword) {
              onGenerateOTP(getValues('email'), getValues('password'), setCurrentStep);
            }
          }}
        >
          Continue
        </button>
        <p>
          Already have an account?{' '}
          <Link href="/sign-in" className="fw-bold">
            Sign In
          </Link>
        </p>
      </div>
    );
  }

  // Default step (step 1)
  return (
    <div className="col-md-12 flex-column d-flex continue-btn">
      <button
        className="btn btn-a-continue"
        type="button" // Use type="button" to prevent form submission
        onClick={() => setCurrentStep((prev) => prev + 1)}
      >
        Continue
      </button>
      <p>
        Already have an account?{' '}
        <Link href="/sign-in" className="fw-bold">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default ButtonHandler;