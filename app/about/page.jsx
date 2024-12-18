"use client";


import React,{useState, useEffect} from 'react'
import BreadCrumb from '@components/BreadCrumb';
import Image from 'next/image';
import aboutBannerImg from '../../public/assets/slide-about-1.jpg';
import aboutAffiliate from '../../public/assets/about-2.jpg'
import './styles.css'
import { client } from '@libs/sanity';
import AboutUsCard from '@components/AboutUsCard';

const About = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {

    const query = `*[_type == "about"] | order(_createdAt desc){
    _id,
    image,
    name,
    fheading,
    sheading,
    theading,
    fparagraph,
    sparagraph,
    tparagraph
    }`;
    client.fetch(query).then((data)=>{
      setAbout(data)
    })
    
  }, []);
  
  return (
    <main id="main">
      <BreadCrumb
      title="Unlocking Dreams, openning new doors"
      subtitle=""
      page="About"
      />

      <section className="section-about">
        <div className="container">
          <div className="row">

            <div className="col-sm-12 position-relative">
              <div className="about-img-box">
                <Image
                src={aboutBannerImg}
                alt='banner for company add'
                className='img-fluid'
                />
              </div>

              <div className="since-box">
                <h3 className="since-title">
                  DigoEstate
                  <span></span>
                  <br/> we only getting started
                </h3>
                <p>2025 Opening New Doors</p>
              </div>
            </div>

            <div className="col-md-12 section-t8 position-relative">
              {about && about.length > 0 && about.map(data=>(
                 <div className="row about-affiliate-box" key={data._id}>
                  <AboutUsCard data={data}/>
                 </div>
              ))}
            </div>
           

            {/* <div className="col-md-12 section-t8 position-relative">
              <div className="row about-affiliate-box">
                <div className="col-md-6 col-lg-5 ">
                  <Image
                  src={aboutAffiliate}
                  alt='affilate program'
                  className='img-fluid'
                  />
                </div>
                <div className="col-lg-2 d-none d-lg-block position-relative">
                  <div className="title-vertical d-flex justify-content-start">
                    <span>DigoEstate Affiliate Program</span>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 section-md-t3">
                  <div className="title-box-d">
                    <h3 className="title-d">
                      Join
                      <span className="color-d"> Program</span>
                      <br/>become part of the team
                    </h3>
                  </div>
                  <p className="color-text-a">
                  The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: 
                  </p>
                  <p className="color-text-a">
                  one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About