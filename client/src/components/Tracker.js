import React, { Component } from 'react';
import LocationForm from '../components/LocationForm';

class Tracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      wind: undefined,
      clouds: undefined
    }
  }

  render() {
    return (
      <div className="location-form">
        <LocationForm />
      </div>
    )
  }
}

export default Tracker;
