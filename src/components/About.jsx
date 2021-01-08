import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook,faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import profilePicture from '../assets/images/profilePicture.jpg'
import '../assets/styles/About.css'

export default function About() {
  return (
    <div name="about" className="about">
      <h1 className="section-title">Acerca de mi</h1>
      <div className="container about-me">
        <div className="profile-picture">
          <img src={profilePicture} alt=""/>
        </div>
        <div className="text-info">
          <p>
            ¡Hola! Soy <span>Jorge Chirinos.</span>
          </p>
          <p>
            De profesión soy Ingeniero Civil, pero siguiendo mi verdadera pasión que es la tecnología 
            estoy desarrollando mis conocimientos en la programación.
          </p>
          <p>
            Hasta la fecha mis fuertes son Ruby on Rails en el back-end y React.JS en el front-end, 
            aunque tengo mi mente abierta en caso de que necesite aprender un nuevo lenguaje ya que 
            soy de rápido aprendizaje y adaptación.
          </p>
          <p>
            Poseo suscripción activa a la plataforma de cursos online de Platzi, en mi perfil de 
            LinkedIn reflejo los certificados de los cursos aprobados hasta ahora.

            Tengo conocimientos de inglés avanzados, tanto en escritura como oral, comprobables.
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
