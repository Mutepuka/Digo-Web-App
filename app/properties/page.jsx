"use client";

import {useState, useEffect} from 'react';
import { client } from '@libs/sanity';
import BreadCrumb from '@components/BreadCrumb';
import PropertiesCard from '@components/PropertiesCard';
import Pagination from '@components/Pagination';
import '@styles/propertieslist.css';

const Properties = () => {

    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [selectedType, setSelectedType] = useState('All');

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
          "type": propertytype->name,
          "slug": slug.current,
          "status": status->name,
          garages,
        "imageUrl": images[0].asset->url
        }`;
        client.fetch(query).then((data)=>{
            setProperties(data);
            setFilteredProperties(data);
        });
      
    }, []);

    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedType(selectedValue);
    
        if (selectedValue === 'All') {
          setFilteredProperties(properties); // Show all properties for "All"
        } else {
          setFilteredProperties(
            properties.filter((property) => property.type === selectedValue)
          );
        }
      };
    
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
                        
                    <select value={selectedType}
            onChange={handleFilterChange} className="custom-select">
                    <option value="All">All</option>
                    <option value="Apartments">Apartments</option>
                    <option value="Boarding House">Boarding House</option>
                    <option value="Farm Land">Farm Land</option>
                    <option value="Houses">Houses</option>
                    <option value="Offices">Offices</option>
                    <option value="Shops">Shops</option>
                    <option value="Warehouse">Warehouse</option>
                    </select>
                    </div>
                </div>
                {/* {properties && properties.length > 0 && properties.map(property=>(
                    <div className="col-md-4" key={property._id}>
                        <PropertiesCard data={property}/>
                    </div>
                    
                ))} */}
                {filteredProperties && filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div className="col-md-4" key={property._id}>
                  <PropertiesCard data={property} />
                </div>
              ))
            ) : (
              <div className="col-sm-12 text-center">
                <h3 className="text-danger">No properties found</h3>
              </div>
            )}


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