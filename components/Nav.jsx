"use client";

import {useState,useEffect} from 'react';
import Link from 'next/link';
import nav from '@data/nav';
import {ClerkLoaded, SignedIn, SignInButton, UserButton, useUser} from '@clerk/nextjs';
import { PackageIcon, ShoppingBag,HousePlug } from 'lucide-react';
import '@styles/nav.css';

const Nav = () => {
    const [scroll, setScroll] = useState(0);
    const [navList, setNavList] = useState(nav);
     const {user}= useUser();

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
            src='/assets/digo_estate.png'
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
                {/** user area login or my orders */}
            <ClerkLoaded>
                <SignedIn>
                    <Link href='/pilot'
                    className='mt-0 mt-lg-1'>
                        {/* <PackageIcon className='w-6 h-6'/> */}
                        <HousePlug />
                    </Link>
                </SignedIn>

                {user ?(
                    <div className='mt-0 mt-lg-2'>
                        <UserButton/>
                        
                    </div>
                ):(
                    <div className="">
                    <SignInButton mode='modal'>
                        <button className='btn btn-link'>
                        <span className="fs-5 hover-effect cursor-pointer fw-semibold text-black-50 d-sm-block">Login</span>
                        </button>
                        
                    </SignInButton>
                    </div>
                )}
                

            </ClerkLoaded>
            </div>

            <div className='d-flex justify-content-end align-items-center gap-3'>
            
            <button
            type='button'
            className='btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo01'
            onClick={handleOpenSearchForm}
            >
                <i className='bi bi-search'></i>
            </button>

            </div>
            

            
            

        </div>
    </nav>
  )
}

export default Nav