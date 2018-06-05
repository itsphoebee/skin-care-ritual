import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          
          <header className="App-header">
            <h1 className="App-title">Welcome to SkinCare Rituals</h1>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
