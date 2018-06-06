import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { loadRituals } from '../actions/index';
import { bindActionCreators } from 'redux';
import RitualsList from '../components/RitualsList';
import RitualShow from '../containers/RitualShow';

class RitualsPage extends Component {
// loads all rituals in db
  componentDidMount() {
    this.props.loadRituals();
  }

  render(){
    const { match, rituals } = this.props;
    return (
      <div>
      <RitualsList rituals={rituals} />
        <Switch>
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

// use bindActionCreators to wrap action creator in store's dispatch function
const mapDispatchtoProps = (dispatch) => {
  return bindActionCreators({
    loadRituals: loadRituals
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(RitualsPage);
