import React from 'react'
import { Link } from "react-scroll";
import '../assets/styles/Navbar.css'

export default function Navbar() {
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-300px";
    }
    prevScrollpos = currentScrollPos;
  }
  return (
    <nav id="navbar" className="navbar">
        <div className="links">
          <Link className="hvr-underline-from-center" to="home" spy={true} smooth={true} duration={1000}>Home</Link>
          <Link className="hvr-underline-from-center" to="about" spy={true} smooth={true} duration={1000}>About</Link>
          <Link className="hvr-underline-from-center" to="skills" spy={true} smooth={true} duration={1000}>Skills</Link>
          <Link className="hvr-underline-from-center" to="projects" spy={true} smooth={true} duration={1000}>Projects</Link>
        </div>
    </nav>
  )
}
