import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Team from './pages/TeamPage';
import Tech from './pages/TechPage/TechPage';
import Cloud from './pages/TechPage/CloudPage';
import Cybersecurity from './pages/TechPage/CybersecurityPage';
import MachineLearning from './pages/TechPage/MachineLearningPage';
import Robotics from './pages/TechPage/RoboticsPage';
import Error from './pages/ErrorPage';

export default class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/team" component={Team} />
            <Route
              path="/tech"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Tech} exact />
                  <Route path={`${url}/cloud`} component={Cloud} />
                  <Route path={`${url}/cybersecurity`} component={Cybersecurity} />
                  <Route path={`${url}/machine-learning`} component={MachineLearning} />
                  <Route path={`${url}/robotics`} component={Robotics} />
                </>
              )}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}