import React from "react";

const LocationForm = () => {
  return (
    <form>
      <input type="text" name="city" placeholder="Enter city here"/>
      <input type="text" name="country" placeholder="Enter country here"/>
      <button>Get Suggestions</button>
    </form>
  )
}

export default LocationForm;
