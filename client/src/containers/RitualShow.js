import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ritual from '../components/Ritual';
import { likeRitual, dislikeRitual } from '../actions/index';
import { bindActionCreators } from 'redux';

class RitualShow extends Component {

  render() {
    const {ritual, dislikeRitual, likeRitual} = this.props
    return(
      <div>
        <Ritual likeRitual={likeRitual} dislikeRitual={dislikeRitual} ritual={ritual} />
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    likeRitual,
    dislikeRitual
  }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(RitualShow);
