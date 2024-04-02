import React from 'react'
import About from '../components/about';
import Hero from '../components/hero';
import Collection from '../components/collection';
import Reviews from '../components/reviews';
import Products from '../components/products';
import Bestseller from '../components/bestseller';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products/>
      <Collection />
      <Bestseller />
      <Reviews />
    </div>
  )
}

export default Home
