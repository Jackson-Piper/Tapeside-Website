import React from "react";
import Header from "../components/Header";
import Project from "../components/Project/Project";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
        <Project />
        </Container>
        <Footer />
      </div>
    );
  }
}
