"use client";

import { useState,useEffect } from 'react';
import '@styles/searchform.css';
import { client } from '@libs/sanity';
import { useRouter } from 'next/navigation';

const SearchFrom = () => {

    const route = useRouter();
     //get all data
    // const [data, setData] = useState([]);
     const [searchQuery, setSearchQuery] = useState('');
     const [status, setStatus] = useState('');
     const [bedrooms, setBedrooms] = useState('');
     const [province, setProvince] = useState('');
     const [bathrooms, setBathrooms] = useState('');
     const [garages, setGarages] = useState('');
     const [price, setPrice] = useState('');

    const hanldeSearchClose=()=>{
        document.body.classList.remove('box-collapse-open');
        document.body.classList.add('box-collapse-close');

    }
    const hanldeSearchQuery = ()=>{
        
        //navigate the user to the properties page
       route.push(`/properties/search?keyword=${searchQuery}&propertyStatus=${status}&province=${province}`);
       document.body.classList.remove('box-collapse-open');
       document.body.classList.add('box-collapse-close');
        
    }
    
  return (
    <>
    <div className="click-closed"></div>
    <div className="box-collapse">
        <div className="title-box-d">
            <h3 className="title-d">Search Property</h3>
        </div>
        <span className="close-box-collapse right-boxed bi bi-x" onClick={hanldeSearchClose}>

        </span>
        <div className="box-collapse-wrap form">
            <div className="form-a">
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <div className="form-group">
                            <label className="pb-2" htmlFor="Type">Keyboard</label>
                            <input
                            type="text"
                            placeholder="keyword"
                            id='keyword'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="form-control form-control-lg form-control-a" 
                            />
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                            <label className="pb-2" htmlFor="Type">type</label>
                            <select className="form-control form-select form-control-a" id="Type" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option>All</option>
                                <option>Rent</option>
                                <option>Sale</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                            <label htmlFor="city" className="pb-2">Provinces</label>
                            <select className="form-control form-select form-control-a" id="city" value={province} onChange={(e) => setProvince(e.target.value)}>
                                <option>All</option>
                                <option>Lusaka</option>
                                <option>CopperBelt</option>
                                <option>Central</option>
                                <option>Eastern</option>
                                <option>Luapula</option>
                                <option>Muchinga</option>
                                <option>North-Western</option>
                                <option>Northern</option>
                                <option>Southern</option>
                                <option>Western</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6 mb-2'>
                       <div className="form-group mt-3">
                            <label htmlFor="bedrooms" className="pb-2">Bedrooms</label>
                            <select className="form-control form-select form-control-a" id="bedrooms" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
                                <option>All</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-md-6 mb-2'>
                       <div className="form-group mt-3">
                            <label htmlFor="garage" className="pb-2">Garages</label>
                            <select className="form-control form-select form-control-a" id="garages" value={garages} onChange={(e) => setGarages(e.target.value)}>
                                <option>All</option>
                                <option>01</option>
                                <option>02</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-md-6 mb-2'>
                       <div className="form-group mt-3">
                            <label htmlFor="bathrooms" className="pb-2">Bathrooms</label>
                            <select className="form-control form-select form-control-a" id="bathrooms" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)}>
                                <option>All</option>
                                <option>01</option>
                                <option>02</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-md-6 mb-2'>
                       <div className="form-group mt-3">
                            <label htmlFor="price" className="pb-2">Price</label>
                            <input
                            type='text'
                            placeholder='Enter price'
                             className="form-control form-control-a"
                            id="price" 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)}
                              />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <button type='submit' className='btn btn-b' onClick={hanldeSearchQuery}>
                            Search Property
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default SearchFrom