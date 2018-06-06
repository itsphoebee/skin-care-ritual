import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ritual from '../components/RitualsList';
//import { loadRitual } from '../actions/index';

class RitualShow extends Component {

  render(){
    const { ritual, match } = this.props;

    return(
      <div>
        <Ritual ritual={ritual} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    ritual: state.rituals.rituals.find(r => r.id == ownProps.match.params.ritualId)
  })
}

export default connect(mapStateToProps)(RitualShow);
