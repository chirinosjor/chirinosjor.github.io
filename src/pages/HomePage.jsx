import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import TitleMessage from '../components/TitleMessage'

export default function homePage() {
  return (
    <div>
      <Hero />
      <TitleMessage />
      <Navbar />

      <h1>Portafolio personal de Jorge Chirinos</h1>
    </div>
  )
}

