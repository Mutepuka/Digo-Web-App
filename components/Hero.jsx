"use client";

import { useState, useEffect} from 'react';
import HeroSlide from './HeroSlide';
import slides from '../data/slides';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '@styles/hero.css';
import { client } from '@libs/sanity';

const Hero = () => {

  const [proslides, setProSlides] = useState(slides);


  return (
    <>
    <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
          type: 'bullets'
        }}
        modules={[Pagination]}
        className="intro intro-carousel swiper position-relative"
      >
        {proslides && proslides.length > 0 && proslides.map(slide=>(
        <SwiperSlide key={slide._id}>
          <HeroSlide slide={slide}/>
        </SwiperSlide>
      ))}
        
      </Swiper>
    </>
  )
}

export default Hero