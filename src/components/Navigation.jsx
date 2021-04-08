import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { LinkContainer } from "react-router-bootstrap";

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <LinkContainer to="/">
            <Navbar.Brand>TapeSide Technologies</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/team">
                <Nav.Link>Team</Nav.Link>
              </LinkContainer>
              <NavDropdown title="IT" id="basic-nav-dropdown">
                <LinkContainer to="/tech">
                  <NavDropdown.Item>Technologies</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/tech/cloud">
                  <NavDropdown.Item>Clouds, services, servers</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/tech/cybersecurity">
                  <NavDropdown.Item>Cybersecurity</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/tech/machine-learning">
                  <NavDropdown.Item>Machine Learning</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/tech/robotics">
                  <NavDropdown.Item>Robotics</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
