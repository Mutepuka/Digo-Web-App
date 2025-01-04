"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { client } from '@libs/sanity';
import useSWR from 'swr';
import PropertiesCard from '@components/PropertiesCard';
import LoadingSpinner from '@app/loading';

const fetchAllProperties = async () => {
  const query = `*[_type == "property"][0...8]|
        order(_createdAt desc){
    _id,
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
    "status": status->name,
    garages,
    "imageUrl": images[0].asset->url,
    images,
    "province": provincename->name
  }`;
  const data = await client.fetch(query);
  return data;
};


const SearchResults = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [status, setStatus] = useState('');
  const [province, setProvince] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [garages, setGarages] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  
  const searchParams = useSearchParams();


  const { data, error, isLoading } = useSWR('allProperties', fetchAllProperties, {
    onSuccess: (data) => setAllProperties(data),
  });

  // Input validation handlers
  const handlePriceChange = (value) => {
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setPrice(value);
    }
  };

  const handleNumericChange = (value, setState) => {
    if (value === '' || /^\d+$/.test(value)) {
      setState(value);
    }
  };

   // Handle dropdown selection
   const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  useEffect(() => {
    const searchKeyword = searchParams.get('keyword');
    const propertyStatus = searchParams.get('propertyStatus');
    const searchProvince = searchParams.get('province');

    // testing if the get value is the same as the value in the form
    const searchBathrooms = searchParams.get('bathrooms');
    const searchGarages = searchParams.get('garages');
    const searchBedrooms = searchParams.get('bedrooms');
    const searchPrice = searchParams.get('price');

    // Set the state variables
    if (searchKeyword) setSearchQuery(searchKeyword);
    if (propertyStatus) setStatus(propertyStatus);
    if (searchProvince) setProvince(searchProvince);

    // testing and getting values of the search
    if (searchBathrooms) handleNumericChange(searchBathrooms, setBathrooms);
    if (searchGarages) handleNumericChange(searchGarages, setGarages);
    if (searchBedrooms) handleNumericChange(searchBedrooms, setBedrooms);
    if (searchPrice) handlePriceChange(searchPrice);

    console.log('these are the values',bedrooms,garages);


  }, [searchParams]);

  useEffect(() => {
    const filterProperties = () => {
      let filtered = allProperties;

      if (searchQuery) {
        filtered = filtered.filter((property) =>
          property.addressOne.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (status && status !== 'All') {
        filtered = filtered.filter(
          (property) => property.status.toLowerCase() === status.toLowerCase()
        );
      }
      if (province && province !== 'All') {
        filtered = filtered.filter(
          (property) => property.province.toLowerCase() === province.toLowerCase()
        );
      }

      //testing out filters 
      //NOTE: THIS LOGIC IS fetching data that is equal to or greater than
      //to change the logic instead of => use ===

      if (selectedType !== 'All') {
        filtered = filtered.filter((property) =>
          property.type.toLowerCase() === selectedType.toLowerCase()
        );
      }
      
      if (bathrooms && parseInt(bathrooms, 10)) {
        filtered = filtered.filter(
          (property) => property.baths === parseInt(bathrooms, 10)
        );
      }
    
      if (garages && parseInt(garages, 10)) {
        filtered = filtered.filter(
          (property) => property.garages === parseInt(garages, 10)
        );
      }
    
      if (bedrooms && parseInt(bedrooms, 10)) {
        filtered = filtered.filter(
          (property) => property.beds === parseInt(bedrooms, 10)
        );
      }
    
      if (price && parseFloat(price)) {
        filtered = filtered.filter(
          (property) => property.price <= parseFloat(price)
        );
      }

      setFilteredProperties(filtered);
    };

    filterProperties();
  }, [searchQuery, status,selectedType, province, bathrooms, garages, bedrooms, price, allProperties]);

  if (error) throw new Error("no data fetched")
  // if (isLoading) return console.log('loading state')
  // if (filteredProperties.length === 0) return console.log('no data matched')
  if (filteredProperties.length === 0) {
    return (
      <div className="container">
        <section className="intro-single">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="title-single-box">
                  <h1 className="title-single">Our Properties</h1>
                  <span className="color-text-a">Properties List</span>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <nav
                  aria-label="breadcrumb"
                  className="breadcrumb-box d-flex justify-content-lg-end"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="bi bi-house-door-fill"></i>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/properties">Properties</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="property-grid grid">
          <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <div className="grid-option">
                <select className="custom-select" value={selectedType}
                  onChange={handleTypeChange}>
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

                <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center" style={{ height: "300px" }}>
                  {isLoading ?(
                    <div>
                      <LoadingSpinner/>
                    </div>
                  ):(
                    <div>
                      <h2 className="text-danger">No data found</h2>
                      <p className="text-muted">Try adjusting your search filters.</p>
                    </div>
                  )}
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
  
  return (
    <main id='main'>
    <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Our Propertie
                </h1>
                <span className="color-text-a">Properties List</span>
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
                </ol>
              </nav>

            </div>
          </div>
        </div>
      </section>


    <section className="property-grid grid">
        <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="grid-option">
                <select className="custom-select" value={selectedType}
                  onChange={handleTypeChange}>
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
                {filteredProperties.map(property => (
                  <div className="col-md-4" key={property._id}>
                    <PropertiesCard data={property} />
                  </div>
                ))}
            </div>
            <div className="row">
                <div className="col-sm-12">
                </div>
            </div>
      </div> 
  </section>
</main>

  );
};

const SearchedProperties = ()=>{
  return(
    <Suspense fallback={<div></div>}>
    <SearchResults/>
  </Suspense>

  ) 
}

export default SearchedProperties;
