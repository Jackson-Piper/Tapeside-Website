import React from "react";
import Header from "../../components/Header";
import Robotics from "../../components/Tech/Robotics";
import Footer from "../../components/Footer";

export default class RoboticsPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Robotics />
        <Footer />
      </div>
    );
  }
}
