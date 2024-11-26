import React from 'react';
import Hero from '@components/Hero';
import Services from '@components/Services';
import Properties from '@components/Properties';

const Home = () => {
  return (
    <>
    <Hero/>
    <main id="main">
      {/* <Hero/> */}
      <Services/>
      <Properties/>
    </main>
    </>
  )
}

export default Home