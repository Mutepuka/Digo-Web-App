"use client";

import React,{useState} from 'react';
import { urlFor } from '@libs/sanity';
import Link from '@node_modules/next/link';

const AboutUsCard = ({data}) => {
 
  return (
    <>  
    <div className="col-md-6 col-lg-5 image-about">
        <img
        src={urlFor(data.image)}
        alt='affilate program'
        className='img-fluid'
        />
    </div>
    <div className="col-md-6 col-lg-6 section-md-t3 p-3 mx-4">
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
        <div className="col-md-12 text-left">
        <Link href={`/about/${data._id}`} className="link-c link-icon">
          Read More
          <span className="bi bi-chevron-right"></span>
      </Link>
           
        </div>
    </div>
            </>
  )
}

export default AboutUsCard