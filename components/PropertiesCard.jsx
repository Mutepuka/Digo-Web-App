"use client";

import Link from 'next/link';
import React from 'react';
import { urlFor } from '@libs/sanity';
import '@styles/properties.css';
import Image from 'next/image';

const PropertiesCard = ({data}) => {

    console.log('slug', data.slug)
  return (
    <div className='card-box-a card-shadow'>
        <div className="img-box-a">
            <img src={urlFor(data.imageUrl)} alt="" className="img-a img-fluid" />
        </div>
        <div className="card-overlay">
            <div className="card-overlay-a-content">
                <div className="card-header-a">
                    <h2 className="card-title-a">
                        <Link href={`/properties/${data.slug}`}>
                            {data.addressOne}
                            <br/> {data.addressTwo}
                        </Link>
                    </h2>
                </div>
                <div className="card-body-a">
                    <div className="price-box d-flex">
                        <span className="price-a">
                           {data.propstatus} | ZMW {data.price}
                        </span>
                    </div>
                    <Link href={`/properties/${data.slug}`} className='link-a'>
                        Click here to view
                        <span className="bi bi-chevron-right"></span>
                    </Link>
                </div>
                <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                        <li>
                            <h4 className="card-info-title">Area</h4>
                            <span>{data.area}m<sup></sup></span>
                        </li>

                        <li>
                            <h4 className="card-info-title">Beds</h4>
                            <span>{data.beds}<sup></sup></span>
                        </li>

                        <li>
                            <h4 className="card-info-title">Baths</h4>
                            <span>{data.baths}<sup></sup></span>
                        </li>

                        <li>
                            <h4 className="card-info-title">Garages</h4>
                            <span>{data.garages}<sup></sup></span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        </div>
  )
}

export default PropertiesCard