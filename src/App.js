import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TitleMessage from './components/TitleMessage'
import About from './components/About'
import Skills from './components/Skills'
import Skills2 from './components/Skills2'
import Experience from './components/Experience'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TitleMessage />
      <About />
      <Skills2 />
      <Experience />
    </div>
  );
};

export default App;