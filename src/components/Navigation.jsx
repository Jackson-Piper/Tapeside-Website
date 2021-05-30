import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

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
              <LinkContainer to="/team">
                <Nav.Link>Team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/tools">
                <Nav.Link>Tools</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Project" id="basic-nav-dropdown">
                <LinkContainer to="/project/description">
                  <NavDropdown.Item>Description</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/project/theory">
                  <NavDropdown.Item>Theory</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/project/practical">
                  <NavDropdown.Item>Practical</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/skills">
                <Nav.Link>Skills and Jobs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/reflections">
                <Nav.Link>Group Reflections</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
