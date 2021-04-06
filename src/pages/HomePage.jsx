import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}
