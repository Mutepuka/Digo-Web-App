import React from 'react';
import Hero from '@components/Hero';
import Services from '@components/Services';

const Home = () => {
  return (
    <>
    <Hero/>
    <main id="main">
      {/***serives page */}
      <Services/>
    </main>
    </>
  )
}

export default Home