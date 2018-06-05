import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import RitualsPage from './containers/RitualsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/rituals' component={RitualsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
