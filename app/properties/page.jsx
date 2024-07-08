"use client";

import {useState, useEffect, Suspense} from 'react';
import { client } from '@libs/sanity';
import { useSearchParams } from 'next/navigation';
import BreadCrumb from '@components/BreadCrumb';
import '@styles/propertieslist.css';
import PropertiesCard from '@components/PropertiesCard';
import Pagination from '@components/Pagination';

const PropertiesContent = () => {
    const [properties, setProperties] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [status, setStatus] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [cities, setCities] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [garages, setGarages] = useState('');
    const [price, setPrice] = useState('');

    const searchParams = useSearchParams()

    useEffect(() => {
        const searchKeyword = searchParams.get('keyword');
        const propertyStatus = searchParams.get('propertyStatus');

        //set the state variable
        if (searchKeyword) setSearchQuery(searchKeyword);
        if (propertyStatus) setStatus(propertyStatus);

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

        console.log('search keyword', searchKeyword)
        console.log('property status', propertyStatus)
      
    }, [searchParams]);
    
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

const Properties = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PropertiesContent />
  </Suspense>
);

export default Properties;
