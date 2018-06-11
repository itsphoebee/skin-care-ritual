import React from 'react';
import photo from '../adult-hand-cream-hands-1029896.jpg'
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <img src={photo} width="50%" height="50%" alt="home"/>
      <h2>Your one stop for skin care treatments to rejuvenate your skin</h2>
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
