"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import BreadCrumb from '@components/BreadCrumb';
import { client } from '@libs/sanity';
import useSWR from 'swr';
import PropertiesCard from '@components/PropertiesCard';
//import '@styles/propertieslist.css';

const fetchAllProperties = async () => {
  const query = `*[_type == "property"]{
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
  const [status, setStatus] = useState('');
  const [province, setProvince] = useState('');
  
  const searchParams = useSearchParams();


  const { data, error, isLoading } = useSWR('allProperties', fetchAllProperties, {
    onSuccess: (data) => setAllProperties(data),
  });

  useEffect(() => {
    const searchKeyword = searchParams.get('keyword');
    const propertyStatus = searchParams.get('propertyStatus');
    const searchProvince = searchParams.get('province');

    // Set the state variables
    if (searchKeyword) setSearchQuery(searchKeyword);
    if (propertyStatus) setStatus(propertyStatus);
    if (searchProvince) setProvince(searchProvince);

    console.log('this is the province',province);


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
      setFilteredProperties(filtered);
    };

    filterProperties();
  }, [searchQuery, status, province, allProperties]);

  if (error) throw new Error("no data fetched")
  if (isLoading) return console.log('loading state')
  if (filteredProperties.length === 0) return console.log('no data matched')

  console.log('filtered data', filteredProperties)

  return (
    <main id='main'>
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
                <select className="custom-select">
                    <option selected>All</option>
                    <option value="1">Houses</option>
                    <option value="2">Apartments</option>
                    <option value="3">Shops</option>
                    <option value="4">Bording House</option>
                    <option value="5">WareHouse</option>
                    <option value="6">Farm Land</option>
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
