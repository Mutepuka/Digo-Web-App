"use client";

import {useState,useEffect} from 'react';
import PropertiesCard from './PropertiesCard';
import { client } from '@libs/sanity';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

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
            
            pagination={{
                dynamicBullets: true,
                type: 'bullets',
                clickable: true,
                el: 'property-carousel-pagination'
              }}
              breakpoints={{
                320:{
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                1200:{
                    slidesPerView: 3,
                    spaceBetween: 20
                }
              }}
              modules={[Pagination]}
            className='swiper'
            >
                {properties && properties.length > 0 && properties.map(data=>(
                    <SwiperSlide key={data._id}>
                        <PropertiesCard data={data}/>
                    </SwiperSlide>
                ))}
                

            </Swiper>
        </div>
    </section>
   
    
    
  )
}

export default Properties