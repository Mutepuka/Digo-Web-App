"use client";

import { useState,useEffect } from 'react';
import '@styles/searchform.css';
import { client } from '@libs/sanity';
import { useRouter } from 'next/navigation';

const SearchFrom = () => {

    const route = useRouter();

    const hanldeSearchClose=()=>{
        document.body.classList.remove('box-collapse-open');
        document.body.classList.add('box-collapse-close');

    }

    const hanldeSearchQueryChange =(event)=>{
        setSearchQuery(event.target.value);
    }
    const handleStatusFilterChange = (event)=>{
        setStatus(event.target.value)
    }

    const hanldeSearchQuery = (e)=>{
        e.preventDefault();
        //navigate the user to the properties page
       route.push(`/properties?keyword=${searchQuery}&propertyStatus=${status}`)
        console.log('this is the status',status);
        console.log('this is the search query',searchQuery)
    }

    //get all data
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [status, setStatus] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [cities, setCities] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [garages, setGarages] = useState('');
    const [price, setPrice] = useState('');

    const getAllData = async()=>{

        try {
            const query = `*[_type == "property"]`;
            const data = await client.fetch(query);
            setData(data);
            console.log(data)
        } catch (error) {
            console.log('error in fetching',error)
        }

    }

    useEffect(() => {
      getAllData()
    }, [])
    
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
            <form className="form-a">
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <div className="form-group">
                            <label className="pb-2" htmlFor="Type">Keyboard</label>
                            <input
                            type="text"
                            placeholder="keyword"
                            id='keyword'
                            value={searchQuery}
                            onChange={hanldeSearchQueryChange}
                            className="form-control form-control-lg form-control-a" 
                            />
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                            <label className="pb-2" htmlFor="Type">type</label>
                            <select className="form-control form-select form-control-a" id="Type" value={status} onChange={handleStatusFilterChange}>
                                <option>All</option>
                                <option>For Rent</option>
                                <option>For Sale</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                            <label htmlFor="city" className="pb-2">City</label>
                            <select className="form-control form-select form-control-a" id="city">
                                <option>All Cities</option>
                                <option>Lusaka</option>
                                <option>CopperBelt</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6 mb-2'>
                       <div className="form-group mt-3">
                            <label htmlFor="bedrooms" className="pb-2">Bedrooms</label>
                            <select className="form-control form-select form-control-a" id="bedrooms">
                                <option>All</option>
                                <option>01</option>
                                <option>02</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-md-6 mb-2'>
                       <div className="form-group mt-3">
                            <label htmlFor="garage" className="pb-2">Garages</label>
                            <select className="form-control form-select form-control-a" id="garages">
                                <option>All</option>
                                <option>01</option>
                                <option>02</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-md-6 mb-2'>
                       <div className="form-group mt-3">
                            <label htmlFor="bathrooms" className="pb-2">Bathrooms</label>
                            <select className="form-control form-select form-control-a" id="bathrooms">
                                <option>All</option>
                                <option>01</option>
                                <option>02</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-md-6 mb-2'>
                       <div className="form-group mt-3">
                            <label htmlFor="price" className="pb-2">Price</label>
                            <select className="form-control form-select form-control-a" id="price">
                                <option>All</option>
                                <option>zmk4,000</option>
                                <option>zmk6,000</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <button type='submit' className='btn btn-b' onClick={hanldeSearchQuery}>
                            Search Property
                        </button>
                    </div>
                </div>
            </form>

        </div>
    </div>
    </>
  )
}

export default SearchFrom