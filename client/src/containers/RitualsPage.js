import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { loadRituals } from '../actions/index';
import RitualsList from '../components/RitualsList';
import RitualShow from '../containers/RitualShow';

class RitualsPage extends Component {
  componentDidMount() {
    this.props.loadRituals();
  }
  constructor(){
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event){
    console.log(event.target.value)
    this.setState({
      search: event.target.value
    })
  }

  render(){
    const { match, rituals } = this.props;
    let filteredRituals = rituals.filter(
      (ritual) => {
        return ritual.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )

    return (
      <div>
      <div>
      <input
        type= "text"
        placeholder="Search"
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}
      />
      </div>
      <br/>
        <Switch>
        <Route exact path={match.url} render={() => (
          <RitualsList rituals={filteredRituals} />
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
    rituals: state.rituals.rituals
  };
}

const mapDispatchtoProps = (dispatch) => {
  return bindActionCreators({
    loadRituals
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(RitualsPage);
