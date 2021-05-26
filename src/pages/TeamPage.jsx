import React from "react";
import Header from "../components/Header";
import Team from "../components/Team"
import Footer from "../components/Footer";

export default class TeamPage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Team/>
        <Footer/>
      </div>
    );
  }
}
