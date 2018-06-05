import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadRituals } from '../actions';
import RitualsList from '../components/RitualsList';
import RitualsShow from './RitualsShow';

class RitualsPage extends Component {

  componentDidMount() {
    this.props.loadRituals();
  }

  render(){
    const { rituals, match } = this.props;

    return (
      <div>
        <Switch>
          <RitualsList rituals={rituals} />
          <Route path={`${match.url}/:ritualId`} component={RitualsShow} />
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
