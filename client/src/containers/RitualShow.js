import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ritual from '../components/Ritual';
import { likeRitual } from '../actions/index';
import { Button } from 'react-bootstrap';

class RitualShow extends Component {
  render() {
    return(
      <div>
        <Ritual ritual={this.props.ritual} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const ritual = state.rituals.rituals.find(r => r.id === +ownProps.match.params.ritualId)

  if (ritual) {
    return { ritual }
  } else {
    return { ritual: {} }
  }
};

export default connect(mapStateToProps)(RitualShow);
