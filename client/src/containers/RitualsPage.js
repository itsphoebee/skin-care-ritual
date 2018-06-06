import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { loadRituals } from '../actions/index';
import RitualsList from '../components/RitualsList';
import RitualShow from '../containers/RitualShow';

class RitualsPage extends Component {

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

const mapStateToProps = state => {
  return {
    rituals: state.rituals
  };
}

export default connect(mapStateToProps, { loadRituals })(RitualsPage);
