import React, {Component} from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './pages/Home';
import Tools from "./pages/Tools";
import Team from './pages/Team';
import IdealJobs from './pages/IdealJobs';

import Error from './pages/Error';

export default class App extends Component {
  render() {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Header/>
            <Switch>
              <Route path="/" component={Home} exact>
                <Redirect to="/team"/>
              </Route>
              <Route path="/team" component={Team}/>
              <Route path="/tools" component={Tools}/>
              <Route path="/ideal-jobs" component={IdealJobs}/>
              <Route
                path="/project"
                render={({match: {url}}) => (
                  <>
                    <Route path={`${url}/`} exact>
                      <Redirect to={`${url}/description`}/>
                    </Route>
                    <Route path={`${url}/description`} component={Home}/>
                    <Route path={`${url}/theory`} component={Home}/>
                    <Route path={`${url}/practical`} component={Home}/>
                  </>
                )}
              />
              <Route component={Error}/>
            </Switch>
          </div>
          <Footer/>
        </HashRouter>
    );
  }
}