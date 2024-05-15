"use client";

import {useState} from 'react';
import sites from '@data/sites';
import offices from '@data/offices';
import nav from '@data/nav';
import Link from 'next/link';
import socails from '@data/socails';
import '@styles/footer.css';

const Footer = () => {

  const [siteslist, setSiteslist] = useState(sites);
  return (
   <>
     <section className="section-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 section-md-t3">
            <div className="widget-a">
              <div className="w-header-a">
                <h3 className="w-title-a text-brand">
                  DigoEstate
                </h3>
              </div>
              <div className="w-body-a">
                <p className="w-text-a color-text-a">
                  Write something about brand name and what we are about the things that we are specailized in and etc..
                </p>
              </div>
              <div className="w-footer-a">
                <ul className="list-unstyled">
                  <li className="colr-a">
                    <span className="color-text-a">Phone.</span>{' '}+26097 -2389-39
                  </li>
                  <li className="colr-a">
                    <span className="color-text-a">Email.</span>{' '}company@email.com
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 section-md-t3">
            <div className="widget-a">
              <div className="w-header-a">
                <h3 className="w-title-a text-brand">The Company</h3>
              </div>
              <div className="w-body-a">
                <div className="w-body-a">
                  <ul className="list-unstyled">
                    {siteslist.map(site=>(
                      <li key={site.id} className='item-list-a'>
                        <i className="bi bi-chevron-right"></i>{' '}
                        <a href={site.link}>{site.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 section-md-t3">
          <div className="widget-a">
          <div className="w-header-a">
            <h3 className="w-title-a text-brand">Provincial Offices</h3>
          </div>
          <div className="w-body-a">
            <ul className="list-unstyled">
              {offices.map(office=>(
                <li key={office.id} className='item-list'>
                  <i className="bi bi-chevron-right"></i>{' '}
                  <a href={office.link}>{office.name}</a>

                </li>
              ))}
              
            </ul>
          </div>
        </div>

          </div>
        </div>
      </div>

     </section>
     <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="nav-footer">
              <ul className="list-inline">
                {nav.map(link=>(
                  <li key={link.id} className='list-inline-item'>
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}

              </ul>
            </nav>
            <div className="socials-a">
              <ul className="list-inline">
                {socails.map(social=>(
                  <li key={socails.id} className='list-inline-item'>
                    <a href={social.link}>
                      <i className={social.icon} aria-hidden="true"></i>
                    </a>

                  </li>
                ))}
              </ul>
            </div>
            <div className="copyright-footer">
              <p className="copyright color-text-a">
                &copy;Copyright
                <span className="color-a">DigoEstate</span> All Rights Reserverd
              </p>
            </div>
            <div className="credits">
              Designed by <a href='http://musondamakena.netlify.app/'>Musonda Makena</a>
            </div>
          </div>
        </div>
        
      </div>

     </footer>
    </>
  )
}

export default Footer