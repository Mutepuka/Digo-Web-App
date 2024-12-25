import React from 'react'
import BreadCrumb from '@components/BreadCrumb';
import compLogo from '@public/assets/complogo1.jpg';
import compLogo2 from '@public/assets/complogo2.jpg';
import Image from '@node_modules/next/image';
import './style.css';

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
                width={300}
                height={300}
                className='img-fluid'
                alt='company logo'

                />
                
              </div>
            <div className="col-md-6 col-lg-5 section-md-t3">
                    <div className="title-box-d">
                    <h3 className="title-d">
                        Furniture 
                        <span className="color-d"> Fixers</span>
                        <br/>We make your home beautiful
                    </h3>
                    </div>
                    <p className="color-text-a">
                    Something to write about the company that does the renovation or decoration
                    </p>
                    <button type="button" className="btn btn-a" >View Company</button>
                </div>

            </div>

            <div className="row">

              {/** company image */}
              <div className="col-md-6 col-lg-5 ">
                <Image
                src={compLogo2}
                width={300}
                height={300}
                className='img-fluid'
                alt='company logo'

                />
                
              </div>
              <div className="col-md-6 col-lg-5 section-md-t3">
                    <div className="title-box-d">
                    <h3 className="title-d">
                        Unique 
                        <span className="color-d"> Furniture</span>
                        <br/>A bit of a magic touch
                    </h3>
                    </div>
                    <p className="color-text-a">
                    Something to write about the company that does the renovation or decoration
                    </p>
                    <button type="button" className="btn btn-a" >View Company</button>
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