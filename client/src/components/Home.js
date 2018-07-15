import React from 'react';
import photo from '../adult-hand-cream-hands-1029896.jpg'
import { Carousel, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img width={900} height={100} alt="900x700" src={photo} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Your one stop for skin care treatments to rejuvenate your skin</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={100} alt="900x500" src={photo} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={100} alt="900x500" src={photo} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <a href="/rituals">
        <Button
          bsStyle="info"
          bsSize="large"
        >
          Get Started
        </Button>
      </a>
    </div>
  );
}

export default Home
