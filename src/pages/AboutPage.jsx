import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}
