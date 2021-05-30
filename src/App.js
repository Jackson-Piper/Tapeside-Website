import React, {Component} from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Tools from "./pages/Tools";
import Team from './pages/Team';

import Overview from "./pages/Project/Overview"
import Description from "./pages/Project/Description";
import Theory from "./pages/Project/Theory";
import Practical from "./pages/Project/Practical";

import SkillsJobs from "./pages/SkillsJobs";
import GroupReflections from "./pages/GroupReflections"

import Error from './pages/Error';

export default class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header/>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/team"/>
            </Route>
            <Route path="/team" component={Team}/>
            <Route path="/tools" component={Tools}/>
            <Route
              path="/project"
              render={({match: {url}}) => (
                <>
                  <Route path={`${url}/`} exact>
                    <Redirect to={`${url}/description`}/>
                  </Route>
                  <Route path={`${url}/overview`} component={Overview}/>
                  <Route path={`${url}/description`} component={Description}/>
                  <Route path={`${url}/theory`} component={Theory}/>
                  <Route path={`${url}/practical`} component={Practical}/>
                </>
              )}
            />
            <Route path="/skills" component={SkillsJobs}/>
            <Route path="/reflections" component={GroupReflections}/>
            <Route component={Error}/>
          </Switch>
        </div>
        <Footer/>
      </HashRouter>
    );
  }
}