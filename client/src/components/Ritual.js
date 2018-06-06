import React from 'react';

const Ritual = ({ ritual }) => {

  return (
    <div>
      <h1>{ritual.name}</h1>
      <h3>{ritual.category}</h3>
      <p>{ritual.description}</p>
    </div>
  );
};

export default Ritual;
