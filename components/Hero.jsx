"use client";

import { useState, useEffect} from 'react';
import HeroSlide from './HeroSlide';
import slides from '../data/slides';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
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
        modules={[Pagination, Autoplay]}
        // autoplay={{ delay: 4000 }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
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