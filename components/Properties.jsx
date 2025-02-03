"use client";

import { useState, useEffect } from "react";
import PropertiesCard from "./PropertiesCard";
import { client } from "@libs/sanity";
import Link from "next/link";
import LoadingSpinner from "@app/loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async () => {
    try {
      const query = `*[_type == 'property']| order(_createdAt desc) {
        _id,
        area,
        addressOne,
        addressTwo,
        beds,
        baths,
        price,
        "type": propertytype->name,
        "slug": slug.current,
        "status": status->name,
        garages,
        "imageUrl": images[0].asset->url
      }`;
      const data = await client.fetch(query);
      console.log("Fetched properties:", data);
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  if(loading){
    return(
      <LoadingSpinner/>
    )
  }

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
                  <span className="bi bi-chevron-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: ".property-carousel-pagination",
              clickable: true,
              type: "bullets",
            }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              480: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
              1200: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="swiper"
          >
            {properties.slice(0, 5).map(data => (
              <SwiperSlide key={data._id}>
                <PropertiesCard data={data} />
              </SwiperSlide>
            ))}
            <div className="property-carousel-pagination carousel-pagination"></div>
          </Swiper>
      </div>
    </section>
  );
};

export default Properties;
