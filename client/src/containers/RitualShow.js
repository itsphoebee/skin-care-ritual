import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ritual from '../components/RitualsList';

class RitualShow extends Component {
  render(){
    const { ritual } = this.props;
    return(
      <div>
        <Ritual ritual={ritual} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    ritual: state.rituals.rituals.find(r => r.id === +ownProps.match.params.ritualId)
  })
}

export default connect(mapStateToProps)(RitualShow);
