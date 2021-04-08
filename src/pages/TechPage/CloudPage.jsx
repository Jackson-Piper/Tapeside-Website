import React from "react";
import Header from "../../components/Header";
import Cloud from "../../components/Tech/Cloud";
import Footer from "../../components/Footer";

export default class CloudPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Cloud />
        <Footer />
      </div>
    );
  }
}
