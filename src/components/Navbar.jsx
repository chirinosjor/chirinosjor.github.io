import React from 'react'
import { Link } from "react-scroll";
import '../assets/styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="links">
          <Link className="hvr-underline-from-center" to="home" spy={true} smooth={true} duration={1000}>Home</Link>
          <Link className="hvr-underline-from-center" to="about" offset={-150} spy={true} smooth={true} duration={1000}>About</Link>
          <Link className="hvr-underline-from-center" to="skills" offset={-60} spy={true} smooth={true} duration={1000}>Skills</Link>
          <Link className="hvr-underline-from-center" to="experience" offset={-60} spy={true} smooth={true} duration={1000}>Experience</Link>
          <Link className="hvr-underline-from-center" to="#">Projects</Link>
          <Link className="hvr-underline-from-center" to="#">Contact</Link>
        </div>
    </nav>
  )
}
