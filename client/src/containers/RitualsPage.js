import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { loadRituals } from '../actions/index';
import RitualsList from '../components/RitualsList';
import RitualShow from '../containers/RitualShow';
import RitualNew from '../containers/RitualNew';
import NavBar from '../components/NavBar';

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

  updateSearch = (event) => {
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

    let sortedRituals = filteredRituals.sort(function(a,b) {
      return b.likes - a.likes
    })

    return (
      <div>
      <NavBar />
        <Switch>
          <Route exact path={match.url} render={() => (
            <div>
              <div className="search-bar">
                <input
                  type= "text"
                  placeholder="Search"
                  value={this.state.search}
                  onChange={this.updateSearch}
                />
              </div>
              <br/>
              <RitualsList rituals={sortedRituals} />
            </div>
        )}/>
          <Route path={`${match.url}/new`} component={RitualNew}/>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadRituals
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RitualsPage);
