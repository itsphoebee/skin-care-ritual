import React from 'react';
import { Button, PageHeader } from 'react-bootstrap';

const Ritual = ({ ritual, addLike, addDislike, editRitual }) => {
    const renderItemList = ritual.items.map(item =>
      <div>
        <h4>Products List:</h4>
        <ul>
          <li key={item.id}><strong>{item.brand}</strong> - {item.name} - ${item.price}
            <p>{item.description}</p>
            <img src={item.image} width="20%" alt={item.name} />
          </li>
        </ul>
      </div>
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
      Like <span className="glyphicon glyphicon-thumbs-up"></span>
      </Button>
      <Button
        bsStyle="danger"
        bsSize="small"
        onClick={ () => addDislike(ritual) }
      >
      Dislike <span className="glyphicon glyphicon-thumbs-down"></span>
      </Button>
      <p>{ritual.description}</p>
        {renderItemList}
    </div>
  );
};

export default Ritual;
