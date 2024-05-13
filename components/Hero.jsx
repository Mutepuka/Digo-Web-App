"use client";

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination} from 'swiper/modules';
import '@styles/hero.css';
import HeroSlide from './HeroSlide';

const Hero = () => {

  const [slides, setSlides] = useState([]);
  return (
    <Swiper
    spaceBetween={0}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false
    }}
    pagination={{
      type: 'bullets',
      clickable: true
    }}
    modules={{Autoplay, Pagination}}
    loop={true}
    className='intro intro-carousel swiper position-relative'
    >
      {slides && slides.length > 0 && slides.map(slide=>(
        <SwiperSlide key={slide.id}>
          <HeroSlide slide={slide}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero