import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import RitualsPage from './containers/RitualsPage';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <h1>SkinCare Rituals</h1>
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


export default App;
