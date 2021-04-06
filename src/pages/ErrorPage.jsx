import React from "react";
import Header from "../components/Header";
import Error from "../components/Error";
import Footer from "../components/Footer";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Error />
        <Footer />
      </div>
    );
  }
}
