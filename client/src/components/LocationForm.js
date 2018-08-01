import React from "react";

const LocationForm = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Enter city here"/>
      <input type="text" name="country" placeholder="Enter country here"/>
      <button>
        Get Suggestions
      </button>
    </form>
  )
}

export default LocationForm;
