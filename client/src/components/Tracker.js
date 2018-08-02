import React, { Component } from 'react';
import LocationForm from '../components/LocationForm';
import Recommendation from '../components/Recommendation';

const API_KEY = '7661bb6186b91163c12c6f45e8ac48f9'

class Tracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      wind: undefined
    };
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    let callWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    let weather = await callWeather.json();

    if (city && country) {
      this.setState({
        city: weather.name,
        country: weather.sys.country,
        temperature: weather.main.temp,
        humidity: weather.main.humidity,
        wind: weather.wind.speed
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="location-form">
          <LocationForm getWeather={this.getWeather}/>
        </div>
        <div className="results">
          <h3>Location: {this.state.city} {this.state.country}</h3>
          <h4>Temperature: {this.state.temperature} </h4>
          <h4>Humidity: {this.state.humidity} </h4>
          <h4>Wind: {this.state.wind} </h4>
        </div>
        <div className="recommendations">
          <Recommendation
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            wind={this.state.wind}
            />
        </div>
      </div>
    )
  }
}

export default Tracker;
