"use client";

import { useState} from 'react';
import HeroSlide from './HeroSlide';
import slides from '../data/slides';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import '@styles/hero.css';

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