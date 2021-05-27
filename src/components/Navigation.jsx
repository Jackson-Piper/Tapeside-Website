import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {LinkContainer} from "react-router-bootstrap";

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="custom-nav">
          <LinkContainer to="/">
            <Navbar.Brand>TapeSide Technologies</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/*<LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>*/}
              <LinkContainer to="/team">
                <Nav.Link>Team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/tools">
                <Nav.Link>Tools</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ideal-jobs">
                <Nav.Link>Ideal Jobs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/project">
                <Nav.Link>Project</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
