"use client";

import { client, urlFor } from '@libs/sanity';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {useState, useEffect} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/singleproperty.css';

const SingleProperty = () => {

    const [property, setProperty] = useState(null)
    const path= usePathname();
    const slug = path.split('/').pop();

    //aysnc function to get the property detais
    const getProperty = async()=>{
        try {
            const query = `*[_type == "property" && slug.current == "${slug}"][0]{
                _id,
                  area,
                  amenities,
                  videoUrl,
                  addressOne,
                  addressTwo,
                  beds,
                  baths,
                  price,
                  location,
                  "type": propertytype->name,
                  "slug": slug.current,
                  "propstatus": status->name,
                  garages,
                "imageUrl": images[0].asset->url
                }`;
                const data = await client.fetch(query);
                setProperty(data)
            
        } catch (error) {
            console.log('error in fetching data', error)
            
        } 
    };

    useEffect(() => {
        getProperty()
    }, [])

    if(!property){
      return(
        <div className="container">
          <h1 className="title-single">
            Loading...
          </h1>
        </div>
      )
    }
    
  return (
    <main id="main">
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">
                  {property.addressOne}{' '}{property.addressTwo}
                </h1>
                <span className="color-text-a">{property.location}</span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav aria-label='breadcrumb' className="breadcrumb-box d-flex justify-content-lg-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="bi bi-house-door-fill"></i>
                    </Link>
                  </li>

                  <li className="breadcrumb-item">
                    <Link href="/properties">Properties</Link>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    {property.number}{property.addressOne}{' '}{property.addressTwo}
                  </li>
                </ol>
              </nav>

            </div>
          </div>
        </div>
      </section>
      <section className="property-single nav-arrow-b">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Swiper
              speed={600}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
              }}
              pagination={{
                el: '.property-single-carousel-pagination',
                type: 'bullets',
                clickable: true
              }}
              modules={{Autoplay, Pagination}}
              loop={true}
              className='swiper'
          
              >
                <SwiperSlide className='carousel-item-b'>
                  <img src={urlFor(property.imageUrl)} alt="" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide className='carousel-item-b'>
                  <img src={urlFor(property.imageUrl)} alt="" className="img-fluid" />
                </SwiperSlide>
                <div className="property-single-carousel-pagination carousel-pagination"></div>
              </Swiper>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row justify-content-between">
                <div className="col-md-5 col-lg-4">
                  <div className="property-price d-flex justify-content-center foo">
                    <div className="card-header-c d-flex">
                      <div className="card-box-ico">
                        <span className="bi bi-cash">ZMW</span>
                      </div>
                      <div className="card-title-c align-self-center">
                        <h5 className="title-c">{property.price}</h5>
                      </div>

                    </div>
                  </div>
                  <div className="property-summary">
                    <div className="row">
                      <div className="colo-sm-12">
                        <div className="title-box-d section-t4">
                          <h3 className="title-d">Quick Summary</h3>
                        </div>
                      </div>
                    </div>
                    <div className="summary-list">
                      <ul className="list">
                        <li className="d-flex justify-content-between">
                        <strong>Property ID:</strong>
                        <span>{property._id}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                        <strong>Location:</strong>
                        <span>{property.location}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                        <strong>Property Type:</strong>
                        <span>{property.type}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                        <strong>Satus:</strong>
                        <span>{property.propstatus}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                        <strong>Area:</strong>
                        <span>{property.area}m<sup>2</sup></span>
                        </li>
                        <li className="d-flex justify-content-between">
                        <strong>Bedrooms:</strong>
                        <span>{property.beds}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                        <strong>Bathrooms:</strong>
                        <span>{property.baths}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                        <strong>Garages:</strong>
                        <span>{property.garages}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-7 section-md-t3">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="title-box-d">
                        <h3 className="title-d">Property Description</h3>
                      </div>
                    </div>
                  </div>
                  <div className="property-description">
                    <p className="description color-text-a">{property.description}</p>
                  </div>
                  <div className="row section-t3">
                    <div className="col-sm-12">
                      <div className="title-box-d">
                        <h3 className="title-d">Amenities</h3>
                      </div>
                    </div>
                  </div>
                  <div className="amenities-list color-text-a">
                    <ul className="list-a no-margin">
                      {property.amenities && property.amenities.length > 0 && property.amenities.map((item, index)=>(
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-10 offset-md-1">
              <ul className="nav nav-pills-a nav-pills mb-3 section-t3" id='pills-tab' role='tablist'>
                <li className="nav-item">
                  <a href="#pills-video" className="nav-link active" id='pills-video-tab' data-bs-toggle="pill" aria-controls='pills-video' aria-selected="true">Video</a>
                </li>

                <li className="nav-item">
                  <a href="#pills-plans" className="nav-link" 
                  id='pills-plans-tab' data-bs-toggle="pill" aria-controls='pills-plans' aria-selected="false">Floor Plans</a>
                </li>

              </ul>
              <div className="tab-content" id='pill-tabContent'>
                <div className="tab-pane fade show active" id='pills-video' role='tabpanel' aria-labelledby='pills-video-tab'>
                  <iframe
                  src={property.videoUrl}
                  width="100%"
                  height="460"
                  frameBorder="0"
                  webkitAllowFullscreen
                  mozAllowFullscreen
                  allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SingleProperty