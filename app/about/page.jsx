"use client";


import React,{useState, useEffect} from 'react'
import BreadCrumb from '@components/BreadCrumb';
import Image from 'next/image';
import aboutBannerImg from '../../public/assets/slide-about-1.jpg';
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
          </div>
        </div>
      </section>
    </main>
  )
}

export default About