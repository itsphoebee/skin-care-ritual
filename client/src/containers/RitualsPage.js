import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import RitualsList from '../components/RitualsList';
import RitualShow from '../containers/RitualShow';

class RitualsPage extends Component {

  render(){

    const { match, rituals } = this.props;
    return (
      <div>
        <Switch>
        <Route exact path={match.url} render={() => (
          <RitualsList rituals={rituals} />
        )}/>
          <Route path={`${match.url}/:ritualId`} component={RitualShow}/>
        </Switch>
      </div>
    )
  }
}

// provide new rituals prop to app
const mapStateToProps = (state) => {
  return {
    rituals: state.rituals
  };
}

export default connect(mapStateToProps)(RitualsPage);
