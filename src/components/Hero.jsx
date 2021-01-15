import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../assets/images/slide1.png'
import slide2 from '../assets/images/slide2.jpg'
import slide3 from '../assets/images/slide3.jpg'
import '../assets/styles/Hero.css'

export default class Hero extends Component {
  render() {
    return (
      <div name="home">
        <Carousel nextIcon="" nextLabel="" prevIcon="" prevLabel="" pause={false} className="carousel" >
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 slides"
              src={slide1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
