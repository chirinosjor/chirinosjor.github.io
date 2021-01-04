import React from 'react'
import '../assets/styles/Skills.css'
import ruby from '../assets/icons/ruby.svg'
import javascript from '../assets/icons/javascript.svg'
import html5 from '../assets/icons/html5.svg'
import css3 from '../assets/icons/css-3.svg'
import reactjs from '../assets/icons/reactjs.svg'

export default function Skills() {
  return (
    <div name="skills">
      <section className="skills-section">
        <h1 className="section-title">Mis habilidades</h1>
        <div className="skills-groups container">
        <div className="skills-group hvr-grow">
            <p className="skills-name">Programming languages</p>
            <ul>
              <li><img src={ruby} alt="Ruby Logo"/><p>Ruby</p></li>
              <li><img src={javascript} alt="Javascript Logo"/><p>Javascript</p></li>
            </ul>
          </div>
          <div className="skills-group hvr-grow">
            <p className="skills-name">Front-End Technologies</p>
            <ul>
              <li><img src={html5} alt="Html5 Logo"/><p>HTML 5</p></li>
              <li><img src={css3} alt="Html5 Logo"/><p>CSS 3</p></li>
              <li><img src={reactjs} alt="React JS Logo"/><p>React.JS</p></li>
            </ul>
          </div>
          <div className="skills-group hvr-grow">
            <p className="skills-name">Back-End Technologies</p>
            <ul>
              <li>Html5</li>
            </ul>
          </div>
          <div className="skills-group hvr-grow">
            <p className="skills-name">Databases</p>
            <ul>
              <li>Html5</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
