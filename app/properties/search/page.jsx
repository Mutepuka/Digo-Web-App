"use client";

import {useState, useEffect} from 'react';
import { useSearchParams } from 'next/navigation';
import BreadCrumb from '@components/BreadCrumb';
import '@styles/propertieslist.css';
import { client } from '@libs/sanity';

const SearchResults = () => {

    const [searchprop, setSearchprop] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [status, setStatus] = useState('');
    const searchParams = useSearchParams();
    

    useEffect(() => {
        const searchKeyword = searchParams.get('keyword')
        const propertyStatus = searchParams.get('propertyStatus');

         //set the state variable
         if (searchKeyword) setSearchQuery(searchKeyword);
         if (propertyStatus) setStatus(propertyStatus);

         

    }, [searchParams])
    
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
                        <form>
                            <select className="custom-select">
                                <option selected>All</option>
                                <option value="1">For Rent</option>
                                <option value="2">For Sale</option>
                                <option>{searchQuery}</option>
                            </select>
                        </form>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-sm-12">
                    

                </div>
            </div>
            </div> 
            </section>
        
    </main>
  )
}

export default SearchResults