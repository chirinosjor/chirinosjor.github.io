import React from 'react'
import '../assets/styles/Projects.css'
import Particles from 'react-particles-js';
import particlesConfigProjects from '../config/configParticlesProjects'

import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.webp'
import project3 from '../assets/images/project3.png'


import html5 from '../assets/icons/html5.svg'
import css3 from '../assets/icons/css-3.svg'
import bootstrap from '../assets/icons/bootstrap.svg'
import reactjs from '../assets/icons/reactjs.png'
import reactrouter from '../assets/icons/reactrouter.svg'
import rails from '../assets/icons/rails.svg'
import postman from '../assets/icons/postman.png'
import postgresql from '../assets/icons/postgresql.svg'
import github from '../assets/icons/github.svg'
import newtab from '../assets/icons/newtab.svg'

export default function Projects() {
  return (
    <div name="projects" className="projects-section" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfigProjects} />
      </div>
      <h1>My projects</h1>
      <div className="projects">
        <div className="project">
          <h2>Delivery orders manager</h2>
          <img src={project1} alt="project1"/>
          <div className="project-description">
            <h4>Project description</h4>
            <p>
              This is a personal project in which restaurants can manage their current orders in 
              order to be in control of waiting times and the delivery riders waiting for orders.
            </p>
          </div>
          <h4>Tech used</h4>
          <div className="tech-used">
            <div className="tech">
              <img src={html5} alt="Html5 Logo"/>
              <p>HTML 5</p>
            </div>
            <div className="tech">
              <img src={css3} alt="Html5 Logo"/>
              <p>CSS 3</p>
            </div>         
            <div className="tech">
              <img src={bootstrap} alt="Bootstrap Logo"/>
              <p>Bootstrap</p>
            </div>          
            <div className="tech">
              <img src={reactjs} alt="React JS Logo"/>
              <p>React.JS</p>
            </div>          
            <div className="tech">
              <img src={reactrouter} alt="React Router Logo"/>
              <p>React Router</p>   
            </div>  
          </div>
          <div className="project-links">            
            <a href="https://github.com/chirinosjor/delivery-orders-react" target="blank"><img src={github} alt="Github Logo" className="hvr-grow"/></a>
            <a href="https://deliver-orders-react.herokuapp.com/orders" target="blank"><img src={newtab} alt="Github Logo" className="hvr-grow"/></a>
          </div>
        </div>
        <div className="project">
          <h2>Delivery orders manager API</h2>
          <img src={project2} alt="project2"/>
          <div className="project-description">
            <h4>Project description</h4>
            <p>
              This project is an API created for the operation of the "Delivery orders manager" 
              project in which orders are handled through HTTP requests and the responses are in 
              JSON format.
            </p>
          </div>
          <h4>Tech used</h4>
          <div className="tech-used">
            <div className="tech">
              <img src={rails} alt="Html5 Logo"/>
              <p>Ruby on Rails</p>
            </div>
            <div className="tech">
              <img src={postgresql} alt="Html5 Logo"/>
              <p>PostgreSQL</p>
            </div>  
            <div className="tech">
              <img src={postman} alt="Html5 Logo"/>
              <p>Postman</p>
            </div>
          </div>
          <div className="project-links">            
            <a href="https://github.com/chirinosjor/delivery-orders-api" target="blank"><img src={github} alt="Github Logo" className="hvr-grow"/></a>
            <a href="https://delivery-orders-api.herokuapp.com/health" target="blank"><img src={newtab} alt="Github Logo" className="hvr-grow"/></a>
          </div>
        </div>
        <div className="project">
          <h2>Dogs shelter</h2>
          <img src={project3} alt="project3"/>
          <div className="project-description">
            <h4>Project description</h4>
            <p>
              This project is a shelter for abandoned dogs, it has a guest area made with HTML and 
              CSS that includes dynamic sections made with ERB and an administration area where 
              they can perform all the operations of a CRUD both with shelters and with the dogs 
              that exist in each one of them.
            </p>
          </div>
          <h4>Tech used</h4>
          <div className="tech-used">
            <div className="tech">
              <img src={html5} alt="Html5 Logo"/>
              <p>HTML 5</p>
            </div>
            <div className="tech">
              <img src={css3} alt="Html5 Logo"/>
              <p>CSS 3</p>
            </div>         
            <div className="tech">
              <img src={bootstrap} alt="Bootstrap Logo"/>
              <p>Bootstrap</p>
            </div>
            <div className="tech">
              <img src={rails} alt="Html5 Logo"/>
              <p>Ruby on Rails</p>
            </div>
            <div className="tech">
              <img src={postgresql} alt="Html5 Logo"/>
              <p>PostgreSQL</p>
            </div>    
          </div>
          <div className="project-links">            
            <a href="https://github.com/chirinosjor/dogs_shelter" target="blank"><img src={github} alt="Github Logo" className="hvr-grow"/></a>
            <a href="https://dogs-shelter.herokuapp.com/" target="blank"><img src={newtab} alt="Github Logo" className="hvr-grow"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
