import React from 'react';
import { connect } from 'react-redux';

const RitualsShow = ({ ritual }) =>
  <div>
    <h2>{ritual.name}</h2>
    <p>{ritual.description}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const ritual = state.rituals.find(ritual => ritual.id === ownProps.match.params.ritualId)

  if (ritual) {
    return { ritual }
  } else {
    return { ritual: {} }
  }
};

export default connect(mapStateToProps)(RitualsShow);
