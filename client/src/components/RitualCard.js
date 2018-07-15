import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import photo from '../adult-hand-cream-hands-1029896.jpg'
import { Thumbnail, Button, Popover } from 'react-bootstrap';
import { addDislike, addLike } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RitualCard extends Component {

  render() {
    const { ritual, addLike, addDislike } = this.props
    return(
      <div className="ritual" key={ritual.id}>
        <br/>
        <Thumbnail className="default-photo" src={photo} width="60%" alt="default">
        <strong><Link style={{ marginRight: '12px' }} to={`/rituals/${ritual.id}`}>
          {ritual.name}
        </Link></strong>
        <br/>
        Likes: {ritual.likes}
        <br/>
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
        </Thumbnail>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addLike,
    addDislike
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(RitualCard)
