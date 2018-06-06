import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRituals } from '../actions/index';
import RitualsList from '../components/RitualsList';

class RitualsPage extends Component {

  componentDidMount() {
    this.props.loadRituals();
  }

  render(){
    const { rituals } = this.props;

    return (
      <div>
        <RitualsList rituals={rituals} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rituals: state.rituals
  };
}

export default connect(mapStateToProps, { loadRituals })(RitualsPage);
