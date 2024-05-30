"use client";

import {useState, useEffect} from 'react';
import { client } from '@libs/sanity';
import BreadCrumb from '@components/BreadCrumb';
import '@styles/propertieslist.css';

const Properties = () => {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const query = `*[_type == 'property'][0...8]|
        order(_createdAt desc){
        _id,
          area,
          addressOne,
          addressTwo,
          beds,
          baths,
          price,
          "propstatus": status->name,
          garages,
        "imageUrl": images[0].asset->url
        }`;
        client.fetch(query).then((data)=>{
            setProperties(data)
        });
      
    }, []);
    
  return (
    <main id="main">
        <BreadCrumb
        title="Our Properties"
        subtitle="Properties List"
        page="Properties"
        />

        <section className="property-grid grid">

           <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="grid-option">
                        <form>
                            <select className="custom-select">
                                <option selected>All</option>
                                <option value="1">New to Old</option>
                                <option value="2">For Rent</option>
                                <option value="3">For Sale</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            </div> 
        </section>

    </main>
  )
}

export default Properties