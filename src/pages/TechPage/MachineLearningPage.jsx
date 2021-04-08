import React from "react";
import Header from "../../components/Header";
import MachineLearning from "../../components/Tech/MachineLearning";
import Footer from "../../components/Footer";

export default class MachineLearningPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MachineLearning />
        <Footer />
      </div>
    );
  }
}
