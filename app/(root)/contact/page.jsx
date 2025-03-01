import React from 'react'
import BreadCrumb from '@components/BreadCrumb'
import Link from 'next/link'
import './styles.css'
import ContactForm from '@components/ContactForm'

const Contact = () => {
  return (
    
    <main id="main">
      <BreadCrumb
      title='Contact Us'
      subtitle='For questions and queries please leave us a comment, team digo will be pleased to answer all question because we value our vistors and clients'
      page='Contact Us'
      />
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-map box">
                <div id="map" className='contact-map'>
                <iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=woodlands%20buluwe%20road%2011380+(Digo%20Estate)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
                
              </div>
            </div>
            <div className="col-sm-12 section-t8">
              <div className="row">
                <div className="col-md-7">
                  {/***contact form */}
                  <ContactForm/>
                </div>
                <div className="col-md-5 section-md-t3">
                  <div className="icon-box section-b2">
                  <div className="contact-details"></div>
                    <div className="icon-box-icon">
                      <span className="bi bi-envelope"></span>
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Say Hello</h4>
                      </div>
                      <div className="icon-box-content">
                        <p className="mb-1">
                          Email.
                          <span className="color-a">digoestate@info.co</span>
                        </p>
                        <p className="mb-1">
                          Phone.
                          <span className="color-a">+260 987546543</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="icon-box section-b2">
                    <div className="icon-box-icon">
                      <span className="bi bi-geo-alt"></span>
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Find us in</h4>
                      </div>
                      <div className="icon-box-content">
                        <p className="mb-1">
                          Buluwe Road Woodlands 127687
                          <br/> Zambia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="icon-box">
                    <div className="icon-box-icon">
                      <span className="bi bi-share"></span>
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Social Network</h4>
                      </div>
                      <div className="icon-box-content">
                        <div className="socials-footer">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Link href='' className='line-one'>
                              <i className="bi bi-facebook" aria-hidden="true"></i>
                              </Link>
                              <Link href='' className='line-one'>
                              <i className="bi bi-twitter" aria-hidden="true"></i>
                              </Link>
                              <Link href='' className='line-one'>
                              <i className="bi bi-linkedin" aria-hidden="true"></i>
                              </Link>
                              <Link href='' className='line-one'>
                              <i className="bi bi-instagram" aria-hidden="true"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
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

export default Contact