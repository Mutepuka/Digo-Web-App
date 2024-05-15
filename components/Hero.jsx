"use client";

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination} from 'swiper/modules';
import HeroSlide from './HeroSlide';
import { client} from "@libs/sanity";
import '@styles/hero.css';

const Hero = () => {

  const [slides, setSlides] = useState([]);

  useEffect(() => {

    const query = `*[_type == 'slides'][]{
      _id,
      price,
      subtitle,
      code,
      number,
      lineone,
      linetwo,
      "propstatus": status->name,
      "imageUrl": bgImg.asset->url,
    }`;
    client.fetch(query).then((data)=>{
      setSlides(data)
    })
  }, []);

  
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
        <SwiperSlide key={slide._id}>
          <HeroSlide slide={slide}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero