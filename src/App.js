import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/HomePage';
import Tools from './pages/ToolsPage';
import Team from './pages/TeamPage';
import IdealJobs from './pages/IdealJobsPage';

import Tech from './pages/TechPage/TechPage';
import Cloud from './pages/TechPage/CloudPage';
import Cybersecurity from './pages/TechPage/CybersecurityPage';
import MachineLearning from './pages/TechPage/MachineLearningPage';
import Robotics from './pages/TechPage/RoboticsPage';

import Project from './pages/ProjectPage';

import Error from './pages/ErrorPage';

export default class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path="/" component={Home} exact>
              <Redirect to="/team" />
            </Route>
            <Route path="/team" component={Team} />
            <Route path="/tools" component={Tools} />
            <Route path="/ideal-jobs" component={IdealJobs} />
            <Route
              path="/tech"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Tech} exact>
                    <Redirect to={`${url}/cloud`} />
                  </Route>
                  <Route path={`${url}/cloud`} component={Cloud} />
                  <Route path={`${url}/cybersecurity`} component={Cybersecurity} />
                  <Route path={`${url}/machine-learning`} component={MachineLearning} />
                  <Route path={`${url}/robotics`} component={Robotics} />
                </>
              )}
            />
            <Route path="/project" component={Project} />
            <Route component={Error} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}