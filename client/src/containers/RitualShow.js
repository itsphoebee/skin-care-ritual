import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ritual from '../components/Ritual';
import { addDislike, addLike, editRitual } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class RitualShow extends Component {
  constructor(props){
   super(props);
   this.goBack = this.goBack.bind(this);
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const {ritual, addDislike, addLike} = this.props
    return(
      <div>
        <Button
          bsStyle="btn btn-outline-info pull-left"
          onClick={this.goBack}
        >
          Go Back
        </Button>
        <Button
          bsStyle="primary"
        >
          <Link
            key={ritual.id}
            to={`/rituals/${ritual.id}/edit`}
          >
            <span className="glyphicon glyphicon-pencil"></span> Edit Ritual
          </Link>
        </Button>
        <Ritual editRitual={editRitual} addLike={addLike} addDislike={addDislike} ritual={ritual} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const ritual = state.rituals.find(r => r.id === +ownProps.match.params.ritualId)
  if (ritual) {
    return { ritual }
  } else {
    return { ritual: {} }
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addLike,
    addDislike,
    editRitual
  }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(RitualShow);
