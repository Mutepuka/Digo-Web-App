"use client";

import React from "react";
import OtpInput from "react-otp-input";
import "bootstrap/dist/css/bootstrap.min.css";

const OTPInput = ({ otp, setOTP }) => {
  console.log('va',otp)
  return (
    <div className="container text-center mt-4 justify-center h-100">
      <OtpInput
        value={otp}
        onChange={setOTP}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} className="form-control text-center mx-1" />}
        containerStyle={{ display: "flex", justifyContent: "center" }}
        inputStyle={{ width: "60px", height: "60px", fontSize: "20px" }}
      />

    </div>
  );
};

export default OTPInput;
