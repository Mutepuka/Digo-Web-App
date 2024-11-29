"use client";

import {useState,useEffect} from 'react';
import PropertiesCard from './PropertiesCard';
import { client } from '@libs/sanity';
import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import {Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Properties = () => {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const query = `*[_type == 'property'][0...4]|
        order(_createdAt desc){
        _id,
          area,
          addressOne,
          addressTwo,
          beds,
          baths,
          price,
          "slug": slug.current,
          "propstatus": status->name,
          garages,
        "imageUrl": images[0].asset->url
        }`;
          client.fetch(query).then((data)=>{
            setProperties(data)
          }) 
    }, [])
    
  return (
    <section className="section-property section-t8">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title-wrap d-flex justify-content-between">
                        <div className="title-box">
                            <h2 className="title-a">Latest Properties</h2>
                        </div>
                        <div className="title-link">
                            <Link href="/properties">
                                All Properties
                                <span className='bi bi-chevron-right'></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper
            modules={[Pagination]}
            pagination={{ el:'.property-carousel-pagination', clickable: true, type: "bullets" }}
            autoplay={{ delay: 4000 }}
            loop={true}
              breakpoints={{
                320:{
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                480: {
                    // For screens >= 480px
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    // For screens >= 768px
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    // For screens >= 1024px
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                1200:{
                    slidesPerView: 3,
                    spaceBetween: 20
                }
              }}
            className='swiper'
            >
                {properties && properties.length > 0 && properties.map(data=>(
                    <SwiperSlide key={data._id}>
                        <PropertiesCard data={data}/>
                    </SwiperSlide>
                ))}
                <div className="property-carousel-pagination carousel-pagination"></div>
            </Swiper>
        </div>
    </section>
   
  )
}

export default Properties