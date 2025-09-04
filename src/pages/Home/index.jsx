import React from 'react'
import HeroSection from '../../components/Hero-Section'
import About from '../About'
import Partners from '../../components/Partners'
import Carousel from '../../components/Carousel'

function Home() {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Carousel/>
        <Partners/>
    </div>
  )
}

export default Home