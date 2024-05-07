"use client";

import {useState} from 'react';
import nav from '@data/nav';

const Nav = () => {
    const [scroll, setScroll] = useState(0);
    const [navList, setNavList] = useState(nav);

  return (
    <nav className={`navbar navbar-default navbar-expand-lg fixed-top ${scroll > 100 ? 'navbar-reduce': 'navbar-trans'}`}>
        <div className='container'>
            <button
            className='navbar-toggler collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarDefault'
            aria-controls='navbarDefault'
            aria-expanded='false'
            aria-label='Toggle navigation'
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <a className='navbar-brand text-brand' href='/'>
                Estate<span className='color-b'> Agency</span>
            </a>

            <button
            type='button'
            className='btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo1'
            onClick={()=>console.log('hello world')}
            >
                <i className='bi bi-search'></i>

            </button>

        </div>
    </nav>
  )
}

export default Nav