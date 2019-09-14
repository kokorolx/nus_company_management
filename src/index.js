import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Company from './components/company/index'
import Project from './components/project/index'
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/companies">companies</Link>
        </li>
        <li>
          <Link to="/projects">Project</Link>
        </li>
      </ul>

      <Route exact path="/" component={App}></Route>
      <Route path="/companies" component={Company}></Route>
      <Route path="/projects" component={Project}></Route>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
