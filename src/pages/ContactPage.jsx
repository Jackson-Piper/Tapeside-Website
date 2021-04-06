import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
        <Footer />
      </div>
    );
  }
}
