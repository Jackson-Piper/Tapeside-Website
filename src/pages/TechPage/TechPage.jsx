import React from "react";
import Header from "../../components/Header";
import Tech from "../../components/Tech/Tech";
import Footer from "../../components/Footer";

export default class TechPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Tech />
        <Footer />
      </div>
    );
  }
}
