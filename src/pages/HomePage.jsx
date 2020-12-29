import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import TitleMessage from '../components/TitleMessage'
import About from './About'

export default function homePage() {
  return (
    <div>
      <Hero />
      <TitleMessage />
      <Navbar />
      <About />
    </div>
  )
}

