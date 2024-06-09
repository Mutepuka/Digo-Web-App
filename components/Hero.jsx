"use client";

import { useState} from 'react';
import HeroSlide from './HeroSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination } from 'swiper/modules';
import slides from '../data/slides';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/hero.css';

const Hero = () => {

  const [proslides, setProSlides] = useState(slides);
  return (
    <>
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