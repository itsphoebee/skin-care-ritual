import React from 'react';
import { Button } from 'react-bootstrap';

const Ritual = ({ ritual, addLike, addDislike }) => {
  const renderItemList = ritual.items.map(item =>
    <li key={item.id}><strong>{item.brand}</strong> - {item.name} - ${item.price}
      <p>{item.description}</p>
      <img src={item.image} width="20%" alt={item.name} />
    </li>
  );

  return (
    <div>
      <h1>{ritual.name}</h1>
      <h3>Likes: {ritual.likes}</h3>
      <Button
        bsStyle="primary"
        onClick={ () => addLike(ritual) }
      >
      Like
      </Button>
      <Button
        bsStyle="danger"
        onClick={ () => addDislike(ritual) }
      >
      Dislike
      </Button>
      <h3>Category: {ritual.category}</h3>
      <p>{ritual.description}</p>
      <h4>Products List:</h4>
      <ul>
        {renderItemList}
      </ul>
    </div>
  );
};

export default Ritual;
