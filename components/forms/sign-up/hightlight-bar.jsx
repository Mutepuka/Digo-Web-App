"use client";

import { useAuthContextHook } from '@context/use-auth-context';
import React from 'react'

const HighLightBar = () => {
    const {currentStep}= useAuthContextHook();
  return (
    <div className='container'>
        <div className="row hightlight-wrapper">
            <div className="col-md-12 d-flex flex-row gap-3">
            <div className={currentStep == 1 ? 'active-hightlight': 'inactive-highlight'}></div>
            <div className={currentStep == 2 ? 'active-hightlight':'inactive-highlight'}></div>
            <div className={currentStep == 3 ? 'active-hightlight':'inactive-highlight'}></div>
            </div>
            
        </div>
    </div>
  )
}

export default HighLightBar