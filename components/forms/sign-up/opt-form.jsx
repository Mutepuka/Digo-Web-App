"use client";

import OTPInput from '@components/otp'
import React from 'react'

const OTPForm = ({onOTP,setOTP}) => {
  return (
    <>
    <h2>Enter OTP</h2>
    <p>Enter the onetime passcode that was sent to your email;</p>
    <div className="w-100 d-flex justify-center py-3">
      <OTPInput
      opt={onOTP}
      setOTP={setOTP}
      />
    </div>
    </>
  )
}

export default OTPForm