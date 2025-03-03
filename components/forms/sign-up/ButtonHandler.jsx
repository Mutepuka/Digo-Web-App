"use client";
import { useAuthContextHook } from "@context/use-auth-context";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import useSignUpForm from "@hooks/sign-up/useSignUpForm";
import Link from "next/link";

const ButtonHandler = ({ children, onClick }) => {
    //destructure the useAuthContextHoo
    const {currentStep, setCurrentStep}= useAuthContextHook();
    const {formState,getFieldState,getValues}= useFormContext();
    const {onGenerateOTP}= useSignUpForm();

    const {isDirty: isName}= getFieldState('fullname',formState );
    const {isDirty: isEmail}= getFieldState('fullname',formState );
    const {isDirty: isPassword}= getFieldState('fullname',formState );

    //if current set is 3
    if(currentStep === 3){
        return(
            <div className="col-md-12 flex-column d-flex continue-btn ">
                <button class="btn btn-a" type="submit">Create Account</button>
                <p>Already have an account?
                <Link href="/sign-in">Sign In</Link>
                </p>
            </div>
        )
    }
    //if current set is 2
    if(currentStep === 2){
        return(
            <div className="col-md-12 flex-column d-flex continue-btn">
                <button
                class="btn btn-a-continue" 
                type="submit"
                {...isName && isEmail && isPassword && {onClick:()=>onGenerateOTP(getValues('email'),getValues('password'),setCurrentStep)}}
                >Continue</button>
                <p>Already have an account? {' '}
            <Link href="/sign-in" className="fw-bold">Sign In</Link>

            </p>
            </div>
        )
    }

    return(
        <div className="col-md-12 flex-column d-flex continue-btn">
            <button
            class="btn btn-a-continue" 
            type="submit"
            onClick={()=>setCurrentStep((prev)=>prev+1)}
            >Continue</button>

            <p>Already have an account? {' '}
            <Link href="/sign-in" className="fw-bold">Sign In</Link>

            </p>
        </div>
    )

}
export default ButtonHandler;