import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import '../../../src/Styles/SlideCarrousel.css'


const CarouselInstagram = () => {
  return (
    <Carousel className='Contenedor'>
      <Carousel.Item interval={1000}>
        <img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img1.jpg"

          alt="First slide"
        />
        <img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img2.jpg"
          alt="Second slide"
        />

        <img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>

        <img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img4.jpg"
          alt="Second slide"
        />
        <img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img5.jpg"
          alt="Second slide"
        />
        <img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img6.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img7.jpg"
          alt="Second slide"
        />
        <img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img8.jpg"
          alt="Second slide"
        /><img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img9.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img10.jpg"
          alt="Second slide"
        />
        <img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img3.jpg"
          alt="Second slide"
        />
        <img
          className="d-i block SlideCarrousel"
          src="/img/ImgInstagram/Img5.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>
  );

}

export default CarouselInstagram;