import React from "react";
import Header from "../../components/Header";
import Cybersecurity from "../../components/Tech/Cybersecurity";
import Footer from "../../components/Footer";

export default class CybersecurityPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Cybersecurity />
        <Footer />
      </div>
    );
  }
}
