import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook,faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import profilePicture from '../assets/images/profilePicture.jpg'
import '../assets/styles/About.css'
import Particles from 'react-particles-js';
import particlesConfigAbout from '../config/configParticlesAbout'
import pdf from '../assets/files/mycv.pdf'
import cvicon from '../assets/icons/cvicon.png'

export default function About() {
  return (
    <div name="about" className="about" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfigAbout} />
      </div>
      <h1 className="section-title">About me</h1>
      <div className="container about-me">
        <div className="profile-picture">
          <img src={profilePicture} alt="profile picture"/>
        </div>
        <div className="text-info">
          <p>
            Hello! i'm <span>Jorge Chirinos.</span>
          </p>
          <p>
            By profession I am an Engineer, but following my passion which is technology
            I am developing my knowledge in full stack programming.
          </p>
          <p>
            My areas of strength are React.JS on the front end and Ruby on Rails on the back end,
            although I have my mind open in case I need to learn a new language as
            I am quick to learn and adapt.
          </p>
          <p>
            My goals as a full-stack developer includes learn how to create impressive web pages using 
            appropriate web design techniques and programming paradigms.
          </p>
          <p>
            I want to see myself in a year as part of a specialist team in back-end development, 
            bringing new solutions to the challenges and helping people to be a better developer.
          </p>
          <p>
            You can find me in: <br/>
            <div className="socialmedia-icons">

              <a href="https://github.com/chirinosjor" target="blank">
              <FontAwesomeIcon icon={faGithub} size="2x" className="hvr-grow"/>
              </a>

              <a href="https://www.linkedin.com/in/jorge-chirinos-3bba1b159/" target="blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="hvr-grow"/>
              </a>

              <a href="https://www.instagram.com/chirinosjor" target="blank">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="hvr-grow"/>
              </a>

              <a href="https://twitter.com/ChirinosJor" target="blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="hvr-grow"/>
              </a>

              <a href="https://www.facebook.com/ChirinosJor" target="blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="hvr-grow"/>
              </a>

              <a href={pdf} target="blank" className="hvr-grow">
                <img src={cvicon} alt=""/>
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}
