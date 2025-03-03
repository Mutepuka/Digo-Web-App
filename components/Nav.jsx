"use client";

import {useState,useEffect} from 'react';
import Link from 'next/link';
import nav from '@data/nav';
import '@styles/nav.css';

const Nav = () => {
    const [scroll, setScroll] = useState(0);
    const [navList, setNavList] = useState(nav);

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            setScroll(window.scrollY)
        });
        return ()=>{
            window.removeEventListener('scroll',()=>{
                setScroll(window.scrollY)
            });
        }
    }, [scroll]);

    const handleNavClick = (id)=>{
        //set active class
        const newNavList = navList.map((nav) => ({
            ...nav,
            active: nav.id === id,
          }));
          setNavList(newNavList);
        

    }
    const handleOpenSearchForm=()=>{
        document.body.classList.remove('box-collapse-closed');
        document.body.classList.add('box-collapse-open');
    }
    

  return (
    <nav
    className={`navbar navbar-default navbar-expand-lg fixed-top ${
        scroll > 100 ? 'nabar-reduce' : 'navbar-trans'
    }`}
    >
        <div className='container'>
            <button className='navbar-toggler collapsed'
             type='button'
             data-bs-toggle='collapse'
             data-bs-target='#navbarDefault'
             aria-controls='navbarDefault'
             aria-label='Toggle navigation'
             >
                <span></span>
                <span></span>
                <span></span>
            
            </button>
            <a className='navbar-brand text-brand' href='/'>
            <img
            src='./assets/digo_estate.png'
            alt='digo logo'
            className='img-fluid logo-home'
            />
                igo <span className='color-a'>Estate</span>
            </a>

            <div className='collapse navbar-collapse justify-content-center' id='navbarDefault'>
                <ul className='navbar-nav'>
                    {navList.map(item=>(
                        <li className='nav-item' key={item.id}>
                            <Link
                            className={`nav-link ${item.active ? 'active': undefined}`}
                            href={item.link}
                            onClick={()=> handleNavClick(item.id)}
                            >
                                {item.name === 'Home' ? (
                                    <i className='bi bi-house-door-fill'></i>
                                ):(
                                    item.name
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <button
            type='button'
            className='btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo01'
            onClick={handleOpenSearchForm}
            >
                <i className='bi bi-search'></i>
            </button>
            {/* <a href='/sign-up' className='btn btn-signIn'> Sign In</a> */}

        </div>
    </nav>
  )
}

export default Nav