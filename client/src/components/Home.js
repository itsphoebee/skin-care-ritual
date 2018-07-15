import React from 'react';
import photo2 from '../adult-hand-cream-hands-1029896.jpg'
import photo1 from '../accessories-adult-beauty-264591.jpg'
import photo3 from '../blur-business-candy-330990.jpg'
import { Carousel, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <div className="slider-photo">
          <img alt="lipgloss" src={photo1} />
          <Carousel.Caption>
            <h1>Beauty</h1>
            <p>Skincare products recommended according to skin types</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-photo">
          <img alt="hand lotion" src={photo2} />
          <Carousel.Caption>
            <h1>Focus</h1>
            <p>Look through our collections of rituals to find one that best fits you</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-photo">
          <img alt="heart" src={photo3} />
          <Carousel.Caption>
            <h1>Community</h1>
            <p>Recommend your own rituals and rate others</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    <br/><br/><br/>
    <h1>Skincare Rituals</h1>
    <h4>Your one stop for skin care treatments to rejuvenate your skin.</h4>
    <br/>
      <a href="/rituals">
        <Button
          bsStyle="info"
          bsSize="large"
        >
          Get Started
        </Button>
      </a>
    <br/><br/>
    </div>
  );
}

export default Home
