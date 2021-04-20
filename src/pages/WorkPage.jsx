import React from "react";
import Header from "../components/Header";
import Work from "../components/Work";
import Footer from "../components/Footer";

export default class WorkPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Work />
        <Footer />
      </div>
    );
  }
}
