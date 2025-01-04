"use client";

import React,{useState} from 'react';
import { urlFor } from '@libs/sanity';

const AboutUsCard = ({data}) => {

    const [showMore, setShowmore] = useState(false);

    //function to show more
    const handleShowmore= ()=>{
        setShowmore((prev) => !prev);
    }

  // Combine paragraphs into an array
  const fullContentArray = [data.fparagraph, data.sparagraph, data.tparagraph];
  const truncatedContent = `${data.fparagraph.substring(0, 100)}...`; 
  return (
    <>  
    <div className="col-md-6 col-lg-5 ">
        <img
        src={urlFor(data.image)}
        alt='affilate program'
        className='img-fluid'
        // width={460}
        // height={660}
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
        {showMore ? (
            fullContentArray.map((para, index) => (
              <React.Fragment key={index}>
                {para}
                <br />
                <br />
              </React.Fragment>
            ))
          ) : (
            truncatedContent
          )}
        </p>
        <div className="col-md-12 text-center">
            <button onClick={handleShowmore} className="btn btn-a">  {showMore ? 'Show Less' : 'Show More'}</button>
        </div>
    </div>
            </>
  )
}

export default AboutUsCard