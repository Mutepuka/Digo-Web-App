import React from 'react';
import '@styles/services.css';

const Services = () => {
  return (
    <section className='section-services section-t8'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title-wrap d-flex justify-content-between">
                        <div className="title-box">
                            <h2 className="title-a">Our Services</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-md-4">
                    <div className="card-box-c foo">
                        <div className="card-header-c d-flex">
                            <div className="card-box-ico">
                                <span className="bi bi-calendar4-week"></span>
                            </div>
                            <div className="card-title-c align-self-center">
                                <h2 className="title-c">Lifestyle</h2>
                            </div>
                        </div>
                        <div className="card-body-c">
                            <p className="content-c">
                            Discover a world where lifestyle meets luxury. From trendy neighborhoods to exclusive amenities, find properties that align with the lifestyle you envision. Explore homes designed to elevate your everyday living with modern conveniences and exceptional surroundings.
                            </p>
                        </div>
                        <div className="card-footer-c">
                            <a href="#" className="link-c link-icon">
                                Read More
                                <span className="bi bi-chevron-right"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card-box-c foo">
                        <div className="card-header-c d-flex">
                            <div className="card-box-ico">
                                <span className="bi bi-calendar4-week"></span>
                            </div>
                            <div className="card-title-c align-self-center">
                                <h2 className="title-c">Loans</h2>
                            </div>
                        </div>
                        <div className="card-body-c">
                            <p className="content-c">
                            Financing your dream home has never been easier. Our team provides expert guidance on loan options tailored to fit your budget and lifestyle. Get step-by-step support through the application process and find competitive rates to make homeownership more accessible.
                            </p>
                        </div>
                        <div className="card-footer-c">
                            <a href="#" className="link-c link-icon">
                                Read More
                                <span className="bi bi-chevron-right"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card-box-c foo">
                        <div className="card-header-c d-flex">
                            <div className="card-box-ico">
                                <span className="bi bi-card-checklist"></span>
                            </div>
                            <div className="card-title-c align-self-center">
                                <h2 className="title-c">Sell</h2>
                            </div>
                        </div>
                        <div className="card-body-c">
                            <p className="content-c">
                            Ready to sell your property? Let us help you maximize its market value. With in-depth market analysis and personalized selling strategies, we ensure a smooth and profitable transaction. Reach the right buyers and get the best offers with our dedicated sales support.
                            </p>
                        </div>
                        <div className="card-footer-c">
                            <a href="#" className="link-c link-icon">
                                Read More
                                <span className="bi bi-chevron-right"></span>
                            </a>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        
        
        </section>
  )
}

export default Services