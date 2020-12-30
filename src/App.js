import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TitleMessage from './components/TitleMessage'
import About from './components/About'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TitleMessage />
      <About />
    </div>
  );
};

export default App;