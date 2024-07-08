"use client";

import {useState, useEffect} from 'react';
import { client } from '@libs/sanity';
import BreadCrumb from '@components/BreadCrumb';
import PropertiesCard from '@components/PropertiesCard';
import Pagination from '@components/Pagination';
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
          "slug": slug.current,
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
                                <option value="1">For Rent</option>
                                <option value="2">For Sale</option>
                            </select>
                        </form>
                    </div>
                </div>
                {properties && properties.length > 0 && properties.map(property=>(
                    <div className="col-md-4" key={property._id}>
                        <PropertiesCard data={property}/>
                    </div>
                    
                ))}
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Pagination/>

                </div>
            </div>
            </div> 
        </section>

    </main>
  )
}

export default Properties