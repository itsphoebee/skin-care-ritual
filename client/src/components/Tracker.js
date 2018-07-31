import React, { Component } from 'react';
import LocationForm from '../components/LocationForm';
import Recommendation from '../components/Recommendation';

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
      <div className="container">
        <div className="location-form">
          <LocationForm />
        </div>
        <div className="results">
          <h3>City: {this.state.city}</h3>
          <h3>Country: {this.state.country}</h3>
          <h4>Temperature:</h4> {this.state.temperature}
          <h4>Humidity:</h4> {this.state.humidity}
          <h4>Wind:</h4> {this.state.wind}
          <h4>Clouds:</h4> {this.state.clouds}
        </div>
        <div className="recommendations">
          <Recommendation
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            wind={this.state.wind}
            clouds={this.state.clouds}
            />
        </div>
      </div>
    )
  }
}

export default Tracker;
