import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { loadRituals } from './actions/index';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import RitualsPage from './containers/RitualsPage';

class App extends Component {

  componentDidMount() {
    this.props.loadRituals();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <h1>SkinCare Rituals</h1>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/rituals' component={RitualsPage} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchtoProps = (dispatch) => {
  return bindActionCreators({
    loadRituals
  }, dispatch);
}

export default connect(null, mapDispatchtoProps)(App);
