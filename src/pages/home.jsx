import React from 'react'
import About from '../components/about';
import Hero from '../components/hero';
import Collection from '../components/collection';
import Reviews from '../components/reviews';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Collection />
      <Reviews />
    </div>
  )
}

export default Home
