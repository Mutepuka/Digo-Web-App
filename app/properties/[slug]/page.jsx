"use client";

import { client, urlFor } from '@libs/sanity';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSearchParams } from 'next/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {Pagination } from 'swiper/modules';
import '@styles/singleproperty.css';

const SingleProperty = () => {

    const [property, setProperty] = useState(null)
    const path= usePathname();
    const slug = path.split('/').pop();
    const [form, setForm] = useState({
      name: '',
      email: '',
      message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState(null);

    //aysnc function to get the property detais
    const getProperty = async()=>{
        try {
            const query = `*[_type == "property" && slug.current == "${slug}"][0]{
                _id,
                agent->{
                _id,
                name,
                image,
                phone,
                email,
                description,
                tagname,
                facebook,
                twitter,
                linkedin
                },
                  area,
                  amenities,
                  videoUrl,
                  addressOne,
                  addressTwo,
                  description,
                  beds,
                  baths,
                  price,
                  location,
                  "type": propertytype->name,
                  "slug": slug.current,
                  "propstatus": status->name,
                  garages,
                "imageUrl": images[0].asset->url,
                images,
                "province": provincename->name,
                }`;
                const data = await client.fetch(query);
                setProperty(data)
                
            
        } catch (error) {
            console.log('error in fetching data', error)
            
        } 
    };

    useEffect(() => {
        getProperty()
    }, []);

    const formatAmount = (amount)=> {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "ZMW",
        minimumFractionDigits: 2,
      });
    
      return formatter.format(amount);
    }

    //handle form submit
    const handleInputChange = (e) => {
      setForm({ ...form, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setFeedback(null);
  
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user: {
              name: form.name,
              email: form.email,
              message: form.message,
            },
            property: {
              addressOne: property.addressOne,
              addressTwo: property.addressTwo,
              agent: {
                email: property.agent.email,
              },
            },
          }),
        });
  
        if (response.ok) {
          setFeedback({ success: true, message: 'Email sent successfully!' });
          setForm({ name: '', email: '', message: '' });
        } else {
          const error = await response.json();
          setFeedback({ success: false, message: error.message });
        }
      } catch (error) {
        setFeedback({ success: false, message: 'An error occurred. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }

      // try {
      //   const response = await fetch('/api/sendEmail', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({
      //       user: {
      //         name: form.name,
      //         email: form.email,
      //         message: form.message,
      //       },
      //       property: {
      //         addressOne: property.addressOne,
      //         addressTwo: property.addressTwo,
      //         agent: { email: property.agent.email },
      //       },
      //     }),
      //   });
    
      //   const data = await response.json();
      //   if (!response.ok) throw new Error(data.error || 'Unknown error');
      //   console.log('Email sent:', data.message);
      // } catch (error) {
      //   console.error('Failed to send email:', error.message);
      // }
    };

    useEffect(() => {
      if (feedback) {
        const timer = setTimeout(() => setFeedback(null), 5000);
        return () => clearTimeout(timer);
      }
    }, [feedback]);

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
                <span className="color-text-a">{property.province}</span>
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
              <div className="badge-holder">
              <span><i
    className="bi bi-patch-check-fill"
    style={{
      color:
      property.propstatus === 'Rent'
          ? 'orange'
          : property.propstatus === 'Sold' || property.propstatus === 'Rented'
          ? 'green'
          : 'black',
    }}
  ></i></span>
              <h2 className="stas">
                {property.propstatus}
              </h2>
              </div>
              
              <Swiper
              pagination={{
                dynamicBullets: true,
                clickable: true,
                type: 'bullets'
              }}
              modules={[Pagination]}
              // className="intro swiper single-pro"
               className=" intro"
          
              >
                {property.images && property.images.length > 0 && property.images.map(image=>(
                  <SwiperSlide key={image._id} className='carousel-item-b'>
                    <img src={urlFor(image)} alt='property image' className='img-fluid' />
                  </SwiperSlide>
                ))}
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
                        <span className="bi bi-cash"></span>
                      </div>
                      <div className="card-title-c align-self-center">
                        <h5 className="title-c">{formatAmount(property.price)}</h5>
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
                        {/* <strong>Property ID:</strong>
                        <span>{property._id}</span> */}
                        </li>
                        <li className="d-flex justify-content-between">
                        <strong>Location:</strong>
                        <span>{property.province}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                        <strong>Property Type:</strong>
                        <span>{property.type}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                        <strong>Status:</strong>
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

                {property.videoUrl ? (
                    <iframe
                      src={property.videoUrl}
                      width="100%"
                      height="460"
                      frameBorder="0"
                      webkitAllowFullscreen
                      mozAllowFullscreen
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <p>No video available</p> // Optional message if no video is uploaded
                  )}
                </div>
              </div>
            </div>

            {/**agent information */}
            <div className="col-md-12">
              <div className="row section-t3">
                <div className="col-sm-12">
                  <div className="title-box-d">
                    <h3 className="title-d">Contact Agent</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <img src={urlFor(property.agent.image)} className='img-fluid' alt='agent image'/>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="property-agent">
                    <h4 className="title-agent">{property.agent.name}</h4>
                    <p className="color-text-a">{property.agent.description}</p>
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between">
                        <strong>Phone</strong>
                        <span className="color-text-a">{property.agent.phone}</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <strong>Email</strong>
                        <span className="color-text-a">{property.agent.email}</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <strong>Tagname</strong>
                        <span className="color-text-a">{property.agent.tagname}</span>
                      </li>
                    </ul>
                    <div className="socials-a">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href='#'>
                            <i className="bi bi-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href='#'>
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href='#'>
                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/**contact form */}

                <div className="col-md-12 col-lg-4">
              <div className="property-contact">
                <div className="form-a">
                  <h4>Contact Agent</h4>
                  {feedback && (
                    <div className={`alert ${feedback.success ? 'alert-success' : 'alert-danger'}`}>
                      {feedback.message}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                  <div className="col-md-12 mb-1">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Name *"
                        required
                        className="form-control form-control-lg form-control-a"
                      />
                    </div>
                    </div>
                    <div className="col-md-12 mb-1">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="Email *"
                        required
                        className="form-control form-control-lg form-control-a"
                      />
                    </div>
                    </div>
                    <div className="col-md-12 mb-1">
                    <div className="form-group">
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={handleInputChange}
                        placeholder="Message *"
                        required
                        className="form-control"
                        rows="5"
                      ></textarea>
                    </div>
                    </div>
                    <div className="col-md-12 mt-3">
                    <button type="submit" className="btn btn-a" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    </div>
                  </form>
                </div>
              </div>
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