import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Project from './components/project/project';
import ProjectDetails from './components/project/project_details';

import store from './redux/store.js';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
  <Provider store={store}>
    <Router>

      <div className="container">
        <ul className="nav nav-inline">
          <li className="pl-1">
            <Link to="/">Home</Link>
          </li>
          <li className="pl-1">
            <Link to="/projects">Project</Link>
          </li>
        </ul>

        <Route exact path="/" component={App}></Route>
        <Route exact path="/projects" component={Project}></Route>
        <Route exact path="/projects/:id" component={ProjectDetails}></Route>
      </div>
    </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
