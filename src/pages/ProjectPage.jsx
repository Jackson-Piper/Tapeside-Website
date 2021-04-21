import React from "react";
import Header from "../components/Header";
import Project from "../components/Project/Project";
import Footer from "../components/Footer";

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Project />
        <Footer />
      </div>
    );
  }
}
