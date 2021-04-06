import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Team from './pages/TeamPage';
import Error from './pages/ErrorPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/Tapeside-Website/" component={Home} exact />
            <Route path="/Tapeside-Website/about" component={About} />
            <Route path="/Tapeside-Website/contact" component={Contact} />
            <Route path="/Tapeside-Website/team" component={Team} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}