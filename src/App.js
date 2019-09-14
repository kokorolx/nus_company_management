import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

            Learn React

          <Link to="/companies">companies</Link>
          <Link to="/projects">projects</Link>

          <Button> Hello button </Button>
        </header>
      </div>
    )
  }
}

export default App;
