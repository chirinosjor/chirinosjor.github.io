import React from 'react'
import { Link } from 'react-router-dom'
import navbarlogo from '../assets/images/navbarlogo.png'
import '../assets/styles/Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarlogo">
          <img src={navbarlogo} alt="Logo"/>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Skills</Link>
          <Link to="#">Experience</Link>
          <Link to="#">Projects</Link>
          <Link to="#">Contact</Link>
        </div>
    </div>
  )
}
