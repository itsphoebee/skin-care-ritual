import React from 'react';
import { Button, PageHeader } from 'react-bootstrap';

const Ritual = ({ ritual, addLike, addDislike }) => {
  const renderItemList = ritual.items.map(item =>
    <li key={item.id}><strong>{item.brand}</strong> - {item.name} - ${item.price}
      <p>{item.description}</p>
      <img src={item.image} width="20%" alt={item.name} />
    </li>
  );

  return (
    <div>
      <PageHeader>
        {ritual.name} <small> | {ritual.category}</small>
      </PageHeader>
      <h3>Likes: {ritual.likes}</h3>
      <Button
        bsStyle="primary"
        bsSize="small"
        onClick={ () => addLike(ritual) }
      >
      Like
      </Button>
      <Button
        bsStyle="danger"
        bsSize="small"
        onClick={ () => addDislike(ritual) }
      >
      Dislike
      </Button>
      <p>{ritual.description}</p>
      <h4>Products List:</h4>
      <ul>
        {renderItemList}
      </ul>
    </div>
  );
};

export default Ritual;
