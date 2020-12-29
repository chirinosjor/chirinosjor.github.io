import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook,faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import profilePicture from '../assets/images/profilePicture.jpg'
import '../assets/styles/About.css'

export default function About() {
  return (
    <div>
      <h1>Acerca de mi</h1>
      <div className="container about-me">
        <div className="profile-picture">
          <img src={profilePicture} alt=""/>
        </div>
        <div className="text-info">
          <p>
            ¡Hola! Soy <span>Jorge Chirinos.</span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum harum alias quas 
            iste deserunt vero, excepturi debitis. Non ratione sunt laborum mollitia quo minima, 
            ipsam vitae, sequi, necessitatibus amet quia.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum harum alias quas 
            iste deserunt vero, excepturi debitis. Non ratione sunt laborum mollitia quo minima, 
            ipsam vitae, sequi, necessitatibus amet quia.
          </p>
          <p>
            Puedes encontrarme en: <br/>
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
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}
