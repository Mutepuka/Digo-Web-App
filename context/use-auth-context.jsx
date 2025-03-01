"use client";

import React, { useState, createContext, useContext } from "react";

const initialValues = {
    currentStep: 1,
    setCurrentStep: () => undefined,
};

const AuthContext = createContext(initialValues);
const { Provider } = AuthContext;

export const AuthContextProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);
    
    const values = {
        currentStep,
        setCurrentStep,
    };

    return <Provider value={values}>{children}</Provider>;
};

export const useAuthContextHook = () => {
    return useContext(AuthContext);
};
