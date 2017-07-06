import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import MoviesList from './MoviesList';


class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/movies">MoviesList</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/movies" component={MoviesList} />
        </div>
      </Router>
    );
  }
}

export default App;

