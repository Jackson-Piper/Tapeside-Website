import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { LinkContainer } from "react-router-bootstrap";

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="custom-nav">
          <LinkContainer to="/">
            <Navbar.Brand>TapeSide Technologies</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/team">
                <Nav.Link>Team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ideal-jobs">
                <Nav.Link>Ideal Jobs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/work">
                <Nav.Link>IT Work</Nav.Link>
              </LinkContainer>
              <NavDropdown title="IT Technologies" id="basic-nav-dropdown">
                <LinkContainer to="/tech">
                  <NavDropdown.Item>Technologies</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/tech/cloud">
                  <NavDropdown.Item>Clouds, services and servers</NavDropdown.Item>
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
