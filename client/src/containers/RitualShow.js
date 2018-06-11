import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ritual from '../components/Ritual';
import { addDislike, addLike } from '../actions/index';
import { bindActionCreators } from 'redux';

class RitualShow extends Component {
  render() {
    const {ritual, addDislike, addLike} = this.props
    return(
      <div>
        <Ritual addLike={addLike} addDislike={addDislike} ritual={ritual} />
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
    addDislike
  }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(RitualShow);
