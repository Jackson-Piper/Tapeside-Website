import React from "react";
import Header from "../components/Header";
import Tools from "../components/Tools";
import Footer from "../components/Footer";

export default class ToolsPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Tools />
        <Footer />
      </div>
    );
  }
}
