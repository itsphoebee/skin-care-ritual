import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadRituals } from '../actions';


class RitualsPage extends Component {

  componentDidMount() {
    this.props.loadRituals();
  }

  render(){
    const { rituals, match } = this.props;
  }

  return (
    <div>
      <RitualsList rituals={rituals} />
      <Switch>
        <Route path={`${match.url}/:ritualId`} component={RitualsShow} />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    rituals: state.rituals
  };
}

export default connect(mapStateToProps, { loadRituals })(RitualsPage);
