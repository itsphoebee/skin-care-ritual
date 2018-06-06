import React from 'react';

const Ritual = ({ ritual }) => {
  const renderItemList = ritual.items.map(item =>
    <li key={item.id}>{item.name} - <strong>{item.brand}</strong> - ${item.price}</li>
  );

  return (
    <div>
      <h1>{ritual.name}</h1>
      <h3>{ritual.category}</h3>
      <p>{ritual.description}</p>
      <h4>Products List:</h4>
      <ul>
        {renderItemList}
      </ul>
    </div>
  );
};

export default Ritual;
