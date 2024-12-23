import React from 'react'
import BreadCrumb from '@components/BreadCrumb';
import compLogo from '@public/assets/complogo1.jpg';
import Image from '@node_modules/next/image';

const HomeDecoration = () => {
  return (
    <main>
        <BreadCrumb
        title='Home Decoration and Renovators'
        subtitle='List of verified and trusted companines'
        page='Home Lifestyle'
        />

        <section className="lifestyle">
          <div className="container">
            <div className="row">
            <div className="col-md-12 section-t8 position-relative">
              <div className="row">

              {/** company image */}
              <div className="col-md-6 col-lg-5 ">
                <Image
                src={compLogo}
                width={400}
                height={400}
                className='img-fluid'
                alt='company logo'

                />
                
              </div>

              {/* <div className="col-lg-2 d-none d-lg-block position-relative">
                <div className="title-vertical d-flex justify-content-start">
                <span>Company Name</span>
                </div>
            </div> */}

            <div className="col-md-6 col-lg-5 section-md-t3">
                    <div className="title-box-d">
                    <h3 className="title-d">
                        Heading
                        <span className="color-d"> Second Heading</span>
                        <br/>Third Heading
                    </h3>
                    </div>
                    <p className="color-text-a">
                    Something to write about the company that does the renovation or decoration
                    </p>
                    
                </div>


            </div>
            </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default HomeDecoration