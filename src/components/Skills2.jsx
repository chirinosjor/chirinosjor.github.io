import React, { Component } from 'react'
import '../assets/styles/Skills.css'

// Skills images
import html5 from '../assets/icons/html5.svg'
import css3 from '../assets/icons/css-3.svg'
import javascript from '../assets/icons/javascript.svg'
import es6 from '../assets/icons/es6.png'
import bootstrap from '../assets/icons/bootstrap.svg'
import reactjs from '../assets/icons/reactjs.png'
import reactrouter from '../assets/icons/reactrouter.svg'
import ruby from '../assets/icons/ruby.svg'
import rails from '../assets/icons/rails.svg'
import rspec from '../assets/icons/rspec.png'
import heroku from '../assets/icons/heroku.svg'
import git from '../assets/icons/git.svg'
import github from '../assets/icons/github.svg'
import mysql from '../assets/icons/mysql.svg'
import postgresql from '../assets/icons/postgresql.svg'
import mongodb from '../assets/icons/mongodb.png'

export default class Skills2 extends Component {

  state = {
    isBoxVisible:false
  };

  toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  render() {

    const { isBoxVisible } = this.state;

    function handleClick() {
      const x = document.getElementById("frontend");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    
    return (
      <div name="skills">
        <section className="skills-section">
          <h1 className="section-title">Mis habilidades</h1>
          <div className="skills-buttons">
            <button onClick={this.toggleBox}>Front-End</button>
            <button>Back-end</button>
            <button>Otros</button>
          </div>
          <div className="skills-groups container">
              <div className={`skills-group ${isBoxVisible ? "" : "hidden"}`}>
                <p className="skills-name">Front-End</p>
                <ul>
                  <li className="hvr-grow"><img src={html5} alt="Html5 Logo"/><p>HTML 5</p></li>
                  <li className="hvr-grow"><img src={css3} alt="Html5 Logo"/><p>CSS 3</p></li>
                  <li className="hvr-grow"><img src={javascript} alt="Javascript Logo"/><p>Javascript</p></li>
                  <li className="hvr-grow"><img src={es6} alt="Es 6 Logo"/><p>ECMAScript 6+</p></li>
                  <li className="hvr-grow"><img src={bootstrap} alt="Bootstrap Logo"/><p>Bootstrap</p></li>
                  <li className="hvr-grow"><img src={reactjs} alt="React JS Logo"/><p>React.JS</p></li>
                  <li className="hvr-grow"><img src={reactrouter} alt="React Router Logo"/><p>React Router</p></li>
                </ul>
              </div>
              <div className="skills-group">
                <p className="skills-name">Back-End</p>
                <ul>
                  <li className="hvr-grow"><img src={ruby} alt="Ruby Logo"/><p>Ruby</p></li>
                  <li className="hvr-grow"><img src={rails} alt="Ruby on rails Logo"/><p>Ruby on Rails</p></li>
                  <li className="hvr-grow"><img src={rspec} alt="Rspec Logo"/><p>Rspec</p></li>
                </ul>
              </div>
              <div className="skills-group">
                <p className="skills-name">Otros</p>
                <ul>
                  <li className="hvr-grow"><img src={heroku} alt="Heroku Logo"/><p>Heroku</p></li>
                  <li className="hvr-grow"><img src={git} alt="Ruby on rails Logo"/><p>GIT</p></li>
                  <li className="hvr-grow"><img src={github} alt="Ruby on rails Logo"/><p>Github</p></li>
                  <li className="hvr-grow"><img src={mysql} alt="My Sql Logo"/><p>My SQL</p></li>
                  <li className="hvr-grow"><img src={postgresql} alt="Postgre SQL Logo"/><p>PostgreSQL</p></li>
                  <li className="hvr-grow"><img src={mongodb} alt="Ruby on rails Logo"/><p>MongoDB</p></li>
                </ul>
              </div>
          </div>
        </section>
      </div>
    )
  }
}
