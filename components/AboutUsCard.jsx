"use client";

import React from 'react';
import { urlFor } from '@libs/sanity';

const AboutUsCard = ({data}) => {

    console.log(data);
  return (
    <>
        
            <div className="col-md-6 col-lg-5 ">
                <img
                src={urlFor(data.image)}
                alt='affilate program'
                className='img-fluid'
                />
            </div>
            <div className="col-lg-2 d-none d-lg-block position-relative">
                <div className="title-vertical d-flex justify-content-start">
                <span>{data.name}</span>
                </div>
            </div>
            <div className="col-md-6 col-lg-5 section-md-t3">
                <div className="title-box-d">
                <h3 className="title-d">
                    {data.fheading}
                    <span className="color-d"> {data.sheading}</span>
                    <br/>{data.theading}
                </h3>
                </div>
                <p className="color-text-a">
                {data.fparagraph} 
                </p>
                <p className="color-text-a">
                {data.sparagraph}
                </p>
                <p className="color-text-a">
                {data.tparagraph}
                </p>
            </div>
            </>
  )
}

export default AboutUsCard