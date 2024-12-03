import React from 'react';
import Hero from '@components/Hero';
import Services from '@components/Services';
import Properties from '@components/Properties';
import Agents from '@components/Agents';

const Home = () => {
  return (
    <>
    <Hero/>
    <main id="main">
      <Services/>
      <Properties/>
      <Agents/>
    </main>
    </>
  )
}

export default Home