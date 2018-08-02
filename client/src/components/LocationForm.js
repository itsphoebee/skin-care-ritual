import React from "react";
import { Button } from 'react-bootstrap';

const LocationForm = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Enter city here"/>
      <input type="text" name="country" placeholder="Enter country here"/>
      <Button
        bsStyle="info"
        type="submit"
      >
        Get Suggestions
      </Button>
    </form>
  )
}

export default LocationForm;
