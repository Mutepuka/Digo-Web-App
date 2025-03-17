"use client";

import React from "react";
import OtpInput from "react-otp-input";
import "bootstrap/dist/css/bootstrap.min.css";

const OTPInput = ({ otp, setOTP }) => {
  return (
    <div className="container text-center mt-4 justify-center h-100">
      <OtpInput
      value={otp}
      onChange={setOTP}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />

    </div>
  );
};

export default OTPInput;
